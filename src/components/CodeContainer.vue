<template>
	<div class="flex items-center gap-4">
		<CodeInput />
		<CodeInput />
		<CodeInput />
		<CodeInput />
		<CodeInput />
		<CodeInput />
	</div>
</template>

<script>
import CodeInput from "./CodeInput.vue";
export default {
	components: {
		CodeInput,
	},
};
</script>
