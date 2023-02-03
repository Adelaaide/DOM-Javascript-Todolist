var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
const deleteButton = document.getElementsByClassName("li");
var clearButton = document.getElementById("clear");

function strikethrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function createDeleteButtonIcon() {
    for (var ind = 0; ind < li.length; ind++) {
        var createDeleteButton = document.createElement("i");
        var createDiv = document.getElementsByClassName("brisk");
        createDeleteButton.classList.add("fa", "fa-trash");
        // Create Event Listener so the trash icon actually works
        createDeleteButton.addEventListener('click', deleteNodeOnClick);
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
    // Create Elements
    var li = document.createElement("li");
    var briskClassSwerve = document.createElement("div");
    briskClassSwerve.classList.add("de-swerve");
    var createBrisk = document.createElement("div");
    createBrisk.classList.add("brisk");
    var createDeleteButton = document.createElement("i");
    createDeleteButton.classList.add("fa", "fa-trash");
    // Add Event Listener for Delete Button
    createDeleteButton.addEventListener('click', deleteNodeOnClick);
    
    // Append elements
    createBrisk.appendChild(createDeleteButton);
    li.appendChild(document.createTextNode(input.value));
    briskClassSwerve.appendChild(li);
    briskClassSwerve.appendChild(createBrisk);
    ul.appendChild(briskClassSwerve);

    // Reset Input Value
    input.value = "";
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

// On Load create trash icons for all items
createDeleteButtonIcon();

clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikethrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
