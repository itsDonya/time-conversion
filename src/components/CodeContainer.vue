<template>
	<div class="flex items-center gap-4">
		<input
			id="code"
			type="number"
			@input="changeInput($event)"
			ref="registerCode"
			class="border-2 mx-auto my-6 opacity-0 w-0 h-0"
			maxlength="6" />
		<label for="code" class="flex justify-center items-end gap-1.5 my-4 ltr">
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
import { ref } from "vue";
import codeBox from "./CodeBox.vue";
export default {
	components: {
		codeBox,
	},
	setup() {
		const registerCode = ref(null);
		function changeInput(e) {
			const codeBoxes = document.querySelectorAll(".code-digit");
			const code = e.target.value;
			for (let i in code) {
				const letter = code[i];
				if (codeBoxes[i]) {
					codeBoxes[i].innerText = letter;
				}
			}
		}
		function resetCode() {
			registerCode.value.value = "";
			let codeBoxes = document.querySelectorAll(".code-digit");
			codeBoxes = Array.prototype.slice.call(codeBoxes);
			codeBoxes.forEach((box) => {
				box.innerText = "";
			});
			console.log(registerCode.value.value);
		}
		return {
			changeInput,
			resetCode,
			registerCode,
		};
	},
};
</script>

<style scoped>
label {
	direction: ltr;
}
</style>
