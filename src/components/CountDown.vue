<template>
	<button
		@click="
			resendCode();
			resetCode();
		"
		class="px-4 py-2 text-white bg-emerald-500 rounded-lg disabled:bg-opacity-60 disabled:cursor-not-allowed"
		ref="resendBtn"
		disabled>
		ارسال مجدد کد
		<span ref="counterEl">{{ calculatedSec }}:{{ calculatedMin }}</span>
	</button>
</template>

<script>
import useCounter from "../hooks/counter";
import useReset from "../hooks/resetCode";
export default {
	props: {
		second: {
			type: Number,
		},
	},
	setup(props) {
		const [
			second,
			resendBtn,
			resendCode,
			counterEl,
			calculatedMin,
			calculatedSec,
		] = useCounter(props.second);
		const [resetCode] = useReset();
		return {
			second,
			resendBtn,
			resendCode,
			counterEl,
			calculatedSec,
			calculatedMin,
			resetCode,
		};
	},
};
</script>
