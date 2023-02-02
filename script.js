var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
const deleteButton = document.getElementsByClassName("li");
var clearButton = document.getElementById("clear");

function strikethrough(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle ("done");
	}
}

function createDeleteButtonIcon() {
    for (var ind = 0; ind < li.length; ind++) {
        var createDeleteButton = document.createElement("i");
        var createDiv = document.getElementsByClassName("brisk");
        console.log(createDiv);
        createDeleteButton.classList.add("fa", "fa-trash");
        createDiv[ind].appendChild(createDeleteButton);
}
}

function inputValue() {
return input.value.length;
}

const dateDisplay = document.getElementById("date");
const date = new Date();
const options = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric"
};

dateDisplay.innerHTML = date.toLocaleDateString("en-Us", options);

function createListElement() {
var li = document.createElement("li");
var createBrisk = document.createElement("brisk");

var briskClassSwerve = document.createElement("brisk");
briskClassSwerve.classList.add("de-swerve");

li.appendChild(document.createTextNode(input.value));
 briskClassSwerve.appendChild(li);
 briskClassSwerve.appendChild(createBrisk);
 ul.appendChild(briskClassSwerve);

input.value = "";
createBrisk.classList.add("brisk");
var createDeleteButton = document.createElement("i");
createDeleteButton.classList.add("fa", "fa-trash");
createBrisk.appendChild(createDeleteButton);
deleteParentNodeOnClick();
}


function addListAfterKeypress(event) {
if (inputValue() > 0 && event.keyCode === 13) {
createListElement();
}
}

function addListAfterClick() {
    if (inputValue() > 0) {
        createListElement();
    }
}

function deleteNodeOnClick(e) {
    if (e.target.classList.contains("fa-trash")) {
        e.target.parentNode.parentNode.remove();
    }
}

for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deleteNodeOnClick);
}

function clearList() {
    ul.innerHTML = "";
}

clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikethrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
