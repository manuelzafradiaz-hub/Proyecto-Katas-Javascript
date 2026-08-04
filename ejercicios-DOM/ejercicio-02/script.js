//2.1
const nuevoDiv = document.createElement('div');
document.body.appendChild(nuevoDiv);

//2.2
const miDiv = document.createElement('div');
const miParrafo = document.createElement('p');
miDiv.appendChild(miParrafo);
document.body.appendChild(miDiv);

//2.3
const miDiv = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const parrafo = document.createElement('p');
  miDiv.appendChild(parrafo);
}
document.body.appendChild(miDiv);

//2.4
const miParrafo = document.createElement('p');
miParrafo.textContent = 'Soy dinámico!';
document.body.appendChild(miParrafo);

//2.5
const miH2 = document.createElement('h2');
miH2.textContent = 'Soy Ricknillo';
document.body.appendChild(miH2);

//2.6 

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);

//2.7 

const elementosEliminar = document.querySelectorAll(".fn-remove-me");

elementosEliminar.forEach((elemento) => {
  elemento.remove();
});

//2.8 
const divs = document.querySelectorAll("div");

const pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio";

divs[0].after(pMedio);


//2.9

const divsInsertHere = document.querySelectorAll("div.fn-insert-here");

divsInsertHere.forEach((div) => {
  const p = document.createElement("p");
  p.textContent = "Voy dentro";
  div.appendChild(p);
});