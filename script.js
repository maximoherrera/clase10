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
const iniciales = nombre.map(function(nombre){
    return nombre.charAt(0);
});
console.log(iniciales);

//F:
const Mayusculas = nombres.map(nombre => nombre.toLocaleUpperCase());
console.log(Mayusculas);

//G:
const nombresConJ = nombres.some(nombre => nombre.charAt(0) ===  "J");
console.log(nombresConJ);