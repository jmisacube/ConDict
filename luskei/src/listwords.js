"use strict";

var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	let dict = JSON.parse(entries);
	dict.sort(compare);
	dict.forEach(function(item, index) {
		addRow(item);
	});
};

let compare = function(a, b) {
	if (a.word.toLowerCase() > b.word.toLowerCase()) return 1;
	if (b.word.toLowerCase() > a.word.toLowerCase()) return -1;
	return 0;
};

let addRow = function(entry) {
	let row = document.createElement("tr");
	row.class = "entry";
	
	let temp = entry.word;
	if (entry.stress > 0) {
		temp = addAccent(entry.word, entry.stress-1);	
	}

	let word = document.createElement("td");
	word.innerHTML = temp;
	word.headers = "luskei";

	let part = document.createElement("td");
	part.innerHTML = entry.part;
	part.headers = "part";
	part.className = "italy";

	let def = document.createElement("td");
	def.innerHTML = entry.def;
	def.headers = "english";
 
	row.appendChild(word);
	row.appendChild(part);
	row.appendChild(def);
	document.getElementById("words").appendChild(row);
};

let addAccent = function(word, place) {
	let vowel = word.charAt(place) || 0;
	if (vowel !== 0) {
		let trade = '';
		if (vowel === 'A') trade = 'Á';
		else if (vowel === 'a') trade = 'á';
		else if (vowel === 'I') trade = 'Í';
		else if (vowel === 'i') trade = 'í';
		else if (vowel === 'Y') trade = 'Ý';
		else if (vowel === 'y') trade = 'ý';
		else if (vowel === 'E') trade = 'É';
		else if (vowel === 'e') trade = 'é';
		else if (vowel === 'O') trade = 'Ó';
		else if (vowel === 'o') trade = 'ó';
console.log("vowel: " + vowel + "  trade: " + trade);
		return word.substring(0, place) + trade + word.substring(place+1);
	}
	return word
};
