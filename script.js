//EJERCICIO 1
let numeros = [];
for (let i = 0; i < 10; i++){
    numeros.push(Math.floor(Math.random() * 100));
}
numeros.sort(function(a, b) {
    return a - b;
});
let lista = document.getElementById("numeros");
for(let i = 0; i < numeros.length; i++){
    let item = document.createElement("li");
    item.textContent = numeros[i];
    lista.appendChild(item);
}

//EJERCICIO 2
//A:
const arreglo = [1, 2, 3, 4, 5, 6];
let i = 0;
while(i < Array.length){
    console.log(arreglo[i]);
    i++;
}
//B:
for(let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}
//C:
arreglo.forEach(function(element){
    console.log(element); 
});
//D:
for(let i= 0; i < arreglo.length; i++){
    console.log(arreglo[i] + 1);
}
//E:
const arregloNuevo = [];
for(let i = 0; i < arreglo.length; i++){
    arregloNuevo.push(arreglo[i] + 1);
} 
console.log(arregloNuevo);
//F
let suma = 0;
for(let i = 0; i < arreglo.length; i++){
    suma += arreglo[i]; 
}
const promedio = suma / arreglo.length;
console.log(promedio);

//EJERCICIO 3
const arreglo2 = [1, 3, 6, 9, 18];
const cuadradoDelArray = arreglo2.map(function(numero2){
    return numero2 ** 2;
});
console.log(cuadradoDelArray);

//EJERCICIO 4
const array2 = [1, -4, 12, 0, -3, 29, -150];
let sumarPositivos = 0;

for(let i = 0; i < array2.length; i++){
    if (array2[i] < 0){
        sumarPositivos += array2[i];
    }
}
console.log(sumarPositivos);

//EJERCICIO 5
//A:
const nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
const seisletras = nombres.filter(function (nombre){
    return  nombre.length >= 6;
});
console.log(seisletras);

//B:
const nombresM = nombres.filter(function(nombre){
        return nombre.charAt(0) === "M";
});
console.log(nombresM);

//C:
const ordenados = nombres.sort();
console.log(ordenados);

//D
const iniciales = nombres.map(function(nombre){
    return nombre.charAt(0);
});
console.log(iniciales);

//F:
const Mayusculas = nombres.map(nombre => nombre.toLocaleUpperCase());
console.log(Mayusculas);

//G:
const nombresConJ = nombres.some(nombre => nombre.charAt(0) ===  "J");
console.log(nombresConJ);

//EJERCICIO 6 
function promptColores() {
    const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
    let colorUsuario = prompt('Introduzca un color para determinar su validez').toLowerCase();

    if (colores.includes(colorUsuario)) {
        alert('El color es valido');
    }else{
        alert('El color no se encontró dentro');
    }
}

//EJERCICIO 7
function numerosPares(arreglo) {
    arreglo = [];
    arreglo.filter( value => value % 2 === 0);
}

//EJERCICIO 8
function arregloPorVocales(arreglo) {
    const vocales = ['a','e','i','o','u'];
    arreglo.filter(value => vocales.includes(letra[0].toLowerCase()))
}

//EJERCICIO 9
let numeros1 = [1, 2, 3, 4, 5];

function intercambionumeros(arreglo, indice1, indice2) {
  let temp = arreglo[indice1];
  arreglo[indice1] = arreglo[indice2];
  arreglo[indice2] = temp;
}

console.log("primer orden de numeros: " + numeros1);
intercambionumeros(numeros1, 1, 3);
console.log("orden despues del cambio: " + numeros1);



//EJERCICIO 10
function cambiarFondo(tabla) {
    if (tabla.style.backgroundColor === "green") {
        tabla.style.backgroundColor = "";
    } else {
        tabla.style.backgroundColor = "green";
    }
}

//EJERCICIO 11

const elementos = document.querySelectorAll('li');

elementos.forEach((e) =>{
    e.addEventListener('click', () => {
        e.style.display = 'none'
    });
});

//EJERCICIO 12
const filas = document.querySelectorAll('.tabla div');

filas.forEach(fila => {
  fila.addEventListener('click', () => {
    fila.classList.toggle('seleccionada');
  });
});

// EJERCICIO 13
function aumentarfuente() {
    const noticias = document.getElementsByClassName("noticia");
    for (let i = 0; i < noticias.length; i++) {
      noticias[i].style.fontSize = "larger";
    }
  }
  
  function fuentechica() {
    const noticias = document.getElementsByClassName("noticia");
    for (let i = 0; i < noticias.length; i++) {
      noticias[i].style.fontSize = "smaller";
    }
  }
  
  function resaltar() {
    const noticias = document.getElementsByClassName("noticia");
    for (let i = 0; i < noticias.length; i++) {
      noticias[i].classList.toggle("resaltado");
    }
  }

  // EJERCICIO 14
  function cambiarcontenido() {
    const tabla = document.getElementById("tabla1");
    const celdas = tabla.getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) {
      celdas[i].textContent = "-";
    }
  }
  
  // EJERCICIO 15
  function cambiarhipervinculo(url) {
    const hipervinculo = document.getElementById('hipervinculo');
    hipervinculo.href = url;
    hipervinculo.textContent = url;
  }

  // EJERCICIO 16
  const pnegritas = document.querySelectorAll('strong');

pnegritas.forEach(palabra => {
  palabra.addEventListener('click', () => {
    palabra.style.display = 'none';
  });
});

// EJERCICIO 17
const casilla1 = document.getElementById("casilla1");
casilla1.addEventListener("mouseover", function() {
  this.style.backgroundColor = "blue";
});
const casilla2 = document.getElementById("casilla2");
casilla2.addEventListener("mouseover", function() {
  this.style.backgroundColor = "blue";
});
const casilla3 = document.getElementById("casilla3");
casilla3.addEventListener("mouseover", function() {
  this.style.backgroundColor = "blue";
});
const casilla4 = document.getElementById("casilla4");
casilla4.addEventListener("mouseover", function() {
  this.style.backgroundColor = "blue";
});

//EJERCICIO 18

function cambiarTamaño(div) {
  if (div.style.width === "800px" || div.style.height === "70px") {
    div.style.width = "250px";
    div.style.height = "250px";
  } else {
    div.style.width = "800px";
    div.style.height = "70px";
  }
}
