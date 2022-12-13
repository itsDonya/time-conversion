<template>
	<button
		@click="resendCode(3)"
		class="px-4 py-2 text-white bg-emerald-500 rounded-lg disabled:bg-opacity-60 disabled:cursor-not-allowed"
		ref="resendBtn"
		:disabled="canSendReq">
		ارسال مجدد کد
		<span :class="{ hiddenCounter: !canSendReq }"
			>{{ calculatedSec }}:{{ calculatedMin }}</span
		>
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
		const [
			second,
			resendBtn,
			resendCode,
			canSendReq,
			calculatedMin,
			calculatedSec,
		] = useCounter(props.second);
		return {
			second,
			resendBtn,
			resendCode,
			canSendReq,
			calculatedSec,
			calculatedMin,
		};
	},
};
</script>

<style scoped>
.hiddenCounter {
	display: none;
}
</style>
