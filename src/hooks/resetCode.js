import { ref } from "vue";
export default function useReset() {
	const registerCode = ref(null);
	function resetCode() {
		registerCode.value.value = "";

		// Making all of the boxes empty
		let codeBoxes = document.querySelectorAll(".code-digit");
		codeBoxes = Array.prototype.slice.call(codeBoxes);
		codeBoxes.forEach((box) => {
			box.innerText = "";
		});
	}
	return [registerCode, resetCode];
}
