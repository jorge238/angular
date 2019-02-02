"use strict";
//let se us para declarar una variable pero aunque cres otra variables con el msmo nombre su valor no va a cambiar
//al terminar el proceso se devuelve el valor original
var mensaje = "hola";
if (true) {
    var mensaje_1 = "adios";
}
console.log(mensaje);
//conservan  sus valores no se pueden cambiar por que son constantes
//aunque adentro de otro skope si se puede declarar otra consasnte con el mismo nobre pero solo servira en ese proceso
var OPCIONES = "todas";
if (true) {
    var OPCIONES_1 = "todas";
}
