// la destructuracion de objeto se trata de estraer la infomacion del objeto
let avenger={
  nombre:"steve",
  clave:"capitan amrica",
  poder:"droga"

}
//asi se hace normalmente
//let nombre= avenger.nombre;
//let clave= avenger.clave;
//let poder= avenger.poder;
//este es el modo de la destructuracion de objetos
//la sintaxis comienza como una variable let y despues con un parde corchetes que de ahi vamos a obtener
//las propiedades del objeto y despues viene un igual para decirle de que onjeto vamos a obtener la informacion

let {nombre,clave,poder}=avenger;
console.log(nombre,clave,poder);
