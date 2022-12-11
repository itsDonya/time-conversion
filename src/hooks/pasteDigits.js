export default function usePaste() {
	function pasteInBoxes(e) {
		const codeBoxes = document.querySelectorAll(".code-digit");
		const code = e.target.value;
		for (let i in code) {
			const letter = code[i];
			if (codeBoxes[i]) {
				codeBoxes[i].innerText = letter;
			}
		}
	}
	return [pasteInBoxes];
}
