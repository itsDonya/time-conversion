import { onMounted, ref, computed, watch } from "vue";
export default function useCounter(receivedSecond) {
	const resendBtn = ref(null);
	const second = ref(receivedSecond);
	const counterEl = ref(null);
	let calculatedSec = ref(second.value % 60);
	const computeDigits = computed(() => {
		if (calculatedSec.value < 10) {
			return `0${calculatedSec.value}`;
		} else {
			return calculatedSec.value;
		}
	});
	let minute = ref(Math.trunc(second.value / 60));

	onMounted(() => {
		sendCode();
	});

	let reduceCounter;

	function sendCode() {
		reduceCounter = setInterval(() => {
			second.value -= 1;
		}, 1000);
	}

	function resendCode() {
		resendBtn.value.disabled = true;
		second.value = receivedSecond;
		sendCode();
		counterEl.value.classList.remove("hidden");
	}

	watch(second, (val) => {
		calculatedSec.value = second.value % 60;
		minute.value = Math.trunc(second.value / 60);

		if (val === 0) {
			clearInterval(reduceCounter);
			resendBtn.value.disabled = false;
			counterEl.value.classList.add("hidden");
		}
	});
	return [second, minute, resendBtn, resendCode, counterEl, computeDigits];
}
