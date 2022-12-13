<template>
	<main>
		<CountDown :second="1" />
	</main>
</template>

<script>
import CountDown from "./components/CountDown.vue";
export default {
	components: {
		CountDown,
	},
};
</script>
