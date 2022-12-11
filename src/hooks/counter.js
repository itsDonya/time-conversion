import { onMounted, ref, computed, watch } from "vue";
export default function useCounter(receivedSecond) {
	const resendBtn = ref(null);
	const second = ref(receivedSecond);
	const counterEl = ref(null);
	let calculatedSec = ref(second.value % 60);

	// Check if the number has only one digit, put a "0" behind
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
		// Reduce the counter per second
		reduceCounter = setInterval(() => {
			second.value -= 1;
		}, 1000);
	}

	function resendCode() {
		// Enable resending code button
		resendBtn.value.disabled = true;

		// Re-count the seconds
		second.value = receivedSecond;
		sendCode();

		// Show counter element
		counterEl.value.classList.remove("hidden");
	}

	watch(second, (val) => {
		calculatedSec.value = second.value % 60;
		minute.value = Math.trunc(second.value / 60);

		// Watch if counter reached to zero, then stop counting
		if (val === 0) {
			clearInterval(reduceCounter);
			resendBtn.value.disabled = false;
			counterEl.value.classList.add("hidden");
		}
	});
	return [second, minute, resendBtn, resendCode, counterEl, computeDigits];
}
