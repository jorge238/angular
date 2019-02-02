//let se us para declarar una variable pero aunque cres otra variables con el msmo nombre su valor no va a cambiar
//al terminar el proceso se devuelve el valor original
let mensaje ="hola";

if (true) {
    let mensaje="adios";
}

console.log(mensaje);
//conservan  sus valores no se pueden cambiar por que son constantes
//aunque adentro de otro skope si se puede declarar otra consasnte con el mismo nobre pero solo servira en ese proceso
const OPCIONES="todas";
if (true) {
    const OPCIONES="todas";
}
