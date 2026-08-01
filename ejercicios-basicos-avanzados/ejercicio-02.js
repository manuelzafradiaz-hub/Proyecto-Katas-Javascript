console.log("====================================");
const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí... 

jedi.edad = 25;
console.log(jedi);

console.log("====================================");

let nombre= "Leia";
let apellido= "Organa";
let edad= "20";

// Muestra un mensaje por consola que siga la siguiente estructura:
//Utiliza la concatenación para ello.

console.log("Soy "+ nombre + " " + apellido , "tengo "+ edad , "años y soy una princesa de Alderaan.");
console.log("====================================");

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...
const precioTotal= sable1.precio + sable2.precio;
console.log("El precio total de los sables de luz es:",precioTotal);
console.log("====================================");

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal= 25000;
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...
const precioFinalNave1 = nave1.precioBase + precioBaseGlobal;
const precioFinalNave2 = nave2.precioBase + precioBaseGlobal;

console.log("el precio base global es:", precioBaseGlobal);
console.log("el precio final de la nave 1 es:", precioFinalNave1);
console.log("el precio final de la nave 2 es:", precioFinalNave2);