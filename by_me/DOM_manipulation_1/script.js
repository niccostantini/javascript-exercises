/*SELEZIONE CONTENITORE*/
const container = document.querySelector("#container");

/*CREA ELEMENTO*/
const par = document.createElement("p");
const title3 = document.createElement("h3");


/*AGGIUNGI ATTRIBUTO CSS*/
par.classList.add("par")
par.textContent = "Hey I'm red!";
par.style.color = "red";

title3.textContent = "I'm a blue h3!";
title3.style.color = "blue";

const div = document.createElement("div");

/*AGGIUNGI AL CONTENITORE CREATO IN PRECEDENZA*/
container.appendChild(par);
container.appendChild(title3)

div.classList.add("box");
const title1Child = document.createElement("h1");
const parChild = document.createElement("p");

title1Child.textContent = "I'm a div";
parChild.textContent = "ME TOO!";

div.appendChild(title1Child);
div.appendChild(parChild);
container.appendChild(div)



