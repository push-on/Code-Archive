var button = document.getElementById("enter"); //button
var button2 = document.getElementById("delete"); //button
var input = document.getElementById("userInput"); //input box
var ul = document.querySelector("ul"); //unordered list

function addListItem() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	// clear HTML txt input box
	input.value = "";
}

button.addEventListener("click", function () {
	// Empty = Ignore Event listener
	if (input.value.length > 0) {
		addListItem();
	}
});

input.addEventListener("keypress", function (event) {
	console.log(event);
	// Empty = Ignore Event listener & on Enter Run
	if (input.value.length > 0 && event.key === "Enter") {
		addListItem();
	}
});
button2.addEventListener("click", function () {
	ul.removeChild(ul.lastChild);

});
function print(stuff) {
	const div = document.getElementById('div');
	const text = document.createElement('p');
	text.innerHTML = stuff;
	div.appendChild(text);
}