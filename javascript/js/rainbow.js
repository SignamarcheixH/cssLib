let rainbow_colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#2E2B5F', '#8B00FF'];

function rainbowiseString(string) {
	let currentColorIndex = 0;
	let sentence = string.innerHTML;
	let newSentence = document.createElement('span');

		let myReg = (sentence.length >=7 )? new RegExp('.{1,7}', 'g') : new RegExp('.','g');
		let parts = sentence.match(myReg);
		for(let part of parts) {
			newSentence.appendChild(createColoredSpan(part, rainbow_colors[currentColorIndex]));
			currentColorIndex = (currentColorIndex + 1) % Math.min(sentence.length, 7);
		}
	string.innerHTML = '';
	string.appendChild(newSentence);
}


function createColoredSpan(string, color) {
	let span = document.createElement('span');
	span.innerHTML = string;
	span.style.color = color;
	return(span);
}


document.addEventListener("DOMContentLoaded", () => {
	let entries = [...document.getElementsByClassName("rainbow-pattern")];
	for(let entry of entries) {
		rainbowiseString(entry);
	}
});


