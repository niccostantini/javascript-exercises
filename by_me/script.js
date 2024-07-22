/*SELEZIONE CONTENITORE*/
const container = document.querySelector("#container");

/*CREA ELEMENTO*/
const par = document.createElement("p");
const title3 = document.createElement("h3");
const div = document.createElement("div");

/*AGGIUNGI ATTRIBUTO CSS*/
par.classList.add("par")
par.textContent = "Hey I'm red!";
par.style.color = "red";

title3.textContent = "I'm a blue h3!";
title3.style.color = "blue";

div.classList.add("box");
const box = document.querySelector(".box");
    const title1Child = document.createElement("h1");
    const parChild = document.createElement("p");

    title1Child.textContent = "I'm a div";
    parChild.textContent = "ME TOO!";

    box.appendChild(title1Child);
    box.appendChild(parChild);

/*AGGIUNGI AL CONTENITORE CREATO IN PRECEDENZA*/
container.appendChild(par);
container.appendChild(title3)
