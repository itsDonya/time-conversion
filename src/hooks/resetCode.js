import { ref } from "vue";
const registerCode = ref(null);
export default function useReset() {
	function resetCode() {
		registerCode.value.value = "";
		let codeBoxes = document.querySelectorAll(".code-digit");
		codeBoxes = Array.prototype.slice.call(codeBoxes);
		codeBoxes.forEach((box) => {
			box.innerText = "";
		});
	}
	return [registerCode, resetCode];
}
