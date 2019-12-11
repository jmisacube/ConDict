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

	let medhrim = document.createElement("td");
	medhrim.appendChild(makeMedhrim(temp));
	medhrim.headers = "medhrim";

	let translit = document.createElement("td");
	translit.innerHTML = temp;
	translit.headers = "translit";

	let part = document.createElement("td");
	part.innerHTML = entry.part;
	part.headers = "part";
	part.className = "italy";

	let def = document.createElement("td");
	def.innerHTML = entry.def;
	def.headers = "english";
 
	row.appendChild(medhrim);
	row.appendChild(translit);
	row.appendChild(part);
	row.appendChild(def);
	document.getElementById("words").appendChild(row);
};

let makeMedhrim = function(text) {
	let split = text.split(/[0-9]/);

	let div = document.createElement("div");
	split.forEach((item, index) => {
		if (item) {
			let img = document.createElement("img");
			img.src = "src/chars/" + item + ".png";
			img.alt = item;
			div.appendChild(img);
			console.log("Char: " + item);
		}
	});

	return div;
}
