<template>
	<button
		@click="resendCode"
		class="px-4 py-2 text-white bg-emerald-500 rounded-lg disabled:bg-opacity-60 disabled:cursor-not-allowed"
		ref="resendBtn"
		disabled>
		ارسال مجدد کد
		<span ref="counterEl">{{ minute }}:{{ computeDigits }}</span>
	</button>
</template>

<script>
import useCounter from "../hooks/counter";
export default {
	props: {
		second: {
			type: Number,
		},
	},
	setup(props) {
		const [second, minute, resendBtn, resendCode, counterEl, computeDigits] =
			useCounter(props.second);

		return {
			second,
			minute,
			resendBtn,
			resendCode,
			counterEl,
			computeDigits,
		};
	},
};
</script>
