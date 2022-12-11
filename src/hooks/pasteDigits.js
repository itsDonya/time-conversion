export default function usePaste() {
	// Put code digits in every single box
	function pasteInBoxes(e) {
		const codeBoxes = document.querySelectorAll(".code-digit");
		const code = e.target.value;
		for (let i in code) {
			const digit = code[i];
			if (codeBoxes[i]) {
				codeBoxes[i].innerText = digit;
			}
		}
	}
	return [pasteInBoxes];
}
