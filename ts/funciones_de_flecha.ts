//las funcones de fleecha se utilzan para simplificar una funcion normal en algunos casoso o para apuntar a un atributo demtro de un objeto
//simplificar
let mifuncion=function (a) {
  return a;
}
//primero lleva el parametro y despues la funcion
let mifuncionf= a => a;

//apuntar a un atributo dentro del objeto
let hulk={
  nombre:"hulk",
//para hacer una funcion ya no es necesario poner la palara funcion con que pongas (){}lo reconoce como funcion
  smash(){
    //this se utiliza para llamar un atributo afuera de la funcion pero dentro del mismo objeto
    setTimeout(()=>{ console.log(this.nombre + "shash!!") },1500) //setTimeout es para retrasar su ejecucion y recibe dos parametros el primero es una funcion y el segundo el tiempo de ejecucion
  }
}
//se le pone . para llamar una funcion dentro de un objeto o de otra funcion etc
hulk.smash();
setTimeout(()=>{})
