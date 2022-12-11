<template>
	<div class="flex items-center gap-4">
		<!-- Main input that's going to be hidden and save the whole code -->
		<input
			id="code"
			type="number"
			@input="pasteInBoxes($event)"
			ref="registerCode"
			class="border-2 mx-auto my-6 opacity-0 w-0 h-0"
			maxlength="6" />
		<!-- LABEL reason: focus on main input while user click on each box -->
		<label for="code" class="flex justify-center items-end gap-1.5 my-4 ltr">
			<!-- Code Boxes -->
			<codeBox />
			<codeBox />
			<codeBox />
			<codeBox />
			<codeBox />
			<codeBox />
			<img
				src="../assets/icon/trash.svg"
				@click="resetCode"
				class="w-4 mb-1 cursor-pointer"
				alt="Trash icon" />
		</label>
	</div>
</template>

<script>
import codeBox from "./CodeBox.vue";
import useReset from "../hooks/resetCode";
import usePaste from "../hooks/pasteDigits";
export default {
	components: {
		codeBox,
	},
	setup() {
		const [pasteInBoxes] = usePaste();
		const [registerCode, resetCode] = useReset();

		return {
			pasteInBoxes,
			registerCode,
			resetCode,
		};
	},
};
</script>

<style scoped>
label {
	direction: ltr;
}
</style>
