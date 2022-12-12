import { onMounted, ref, computed, watch } from "vue";
export default function useCounter(receivedSecond) {
	const resendBtn = ref(null);
	const second = ref(receivedSecond);
	const counterEl = ref(null);
	// let calculatedSec = ref(second.value % 60);

	// Calculate second
	const calculatedSec = computed(() => {
		// Check if the number has only one digit, put a "0" behind
		if (second.value < 10) {
			return `0${second.value % 60}`;
		} else {
			return second.value % 60;
		}
	});

	// Calculate minute
	const calculatedMin = computed(() => {
		return Math.trunc(second.value / 60);
	});

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
		// Watch if counter reached to zero, then stop counting
		if (val === 0) {
			clearInterval(reduceCounter);
			resendBtn.value.disabled = false;
			counterEl.value.classList.add("hidden");
		}
	});
	return [
		second,
		resendBtn,
		resendCode,
		counterEl,
		calculatedSec,
		calculatedMin,
	];
}
