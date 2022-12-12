export default function useReset() {
	function resetCode() {
		const registerCode = document.getElementById("code");
		registerCode.value = "";

		// Making all of the boxes empty
		let codeBoxes = document.querySelectorAll(".code-digit");
		codeBoxes = Array.prototype.slice.call(codeBoxes);
		codeBoxes.forEach((box) => {
			box.innerText = "";
		});
	}
	return [resetCode];
}
