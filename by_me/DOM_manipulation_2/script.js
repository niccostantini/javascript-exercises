const input = document.querySelector(".item");
const button = document.querySelector(".button");
const list = document.querySelector(".list");

function addItem() {
    const value = input.value;
    const listElement = document.createElement("li");
    const newButton = document.createElement("button");
    button.textContent = "Delete";
    const span = document.createElement("span");
    span.textContent = value;
    listElement.appendChild(span);
    listElement.appendChild(newButton);
    list.appendChild(listElement);
    value = "";
}

button.addEventListener("click", () => addItem());