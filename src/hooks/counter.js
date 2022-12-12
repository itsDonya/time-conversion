import { onMounted, ref, computed, watch } from "vue";
export default function useCounter(receivedSecond) {
	const resendBtn = ref(null);
	const second = ref(receivedSecond);

	// Calculate second
	const calculatedSec = computed(() => {
		// Check if the number has only one digit, put a "0" behind
		if (second.value % 60 < 10) {
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

	// Check if can send request again
	const canSendReq = computed(() => {
		if (second.value < 1) {
			return false;
		} else {
			return true;
		}
	});

	let reduceCounter;
	function sendCode() {
		// Reduce the counter per second
		reduceCounter = setInterval(() => {
			second.value -= 1;
		}, 1000);
	}

	function resendCode() {
		// Re-count the seconds
		second.value = receivedSecond;
		sendCode();
	}

	watch(second, (val) => {
		// Watch if counter reached to zero, then stop counting
		if (val === 0) {
			clearInterval(reduceCounter);
		}
	});
	return [
		second,
		resendBtn,
		resendCode,
		canSendReq,
		calculatedSec,
		calculatedMin,
	];
}
