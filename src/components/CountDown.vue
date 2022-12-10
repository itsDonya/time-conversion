<template>
	<button
		@click="resendCode"
		class="px-4 py-2 text-white bg-emerald-500 rounded-lg disabled:bg-opacity-60 disabled:cursor-not-allowed"
		ref="resendBtn"
		disabled>
		ارسال مجدد کد
		<span ref="counterEl">{{ minute }}:{{ second }}</span>
	</button>
</template>

<script>
import { onMounted, ref, computed, watch } from "vue";

export default {
	props: {
		second: {
			type: Number,
		},
	},
	setup(props) {
		const resendBtn = ref(null);
		const receivedSecond = ref(props.second);
		const counterEl = ref(null);
		let calculatedSec = ref(receivedSecond.value % 60);
		const second = computed(() => {
			if (calculatedSec.value < 10) {
				return `0${calculatedSec.value}`;
			} else {
				return calculatedSec.value;
			}
		});
		let minute = ref(Math.trunc(receivedSecond.value / 60));

		onMounted(() => {
			sendCode();
		});

		let reduceCounter;

		function sendCode() {
			reduceCounter = setInterval(() => {
				receivedSecond.value -= 1;
			}, 1000);
		}

		function resendCode() {
			resendBtn.value.disabled = true;
			receivedSecond.value = props.second;
			sendCode();
			counterEl.value.classList.remove("hidden");
		}

		watch(receivedSecond, (val) => {
			calculatedSec.value = receivedSecond.value % 60;
			minute.value = Math.trunc(receivedSecond.value / 60);

			if (val === 0) {
				clearInterval(reduceCounter);
				resendBtn.value.disabled = false;
				counterEl.value.classList.add("hidden");
			}
		});

		return { second, minute, resendBtn, resendCode, counterEl };
	},
};
</script>
