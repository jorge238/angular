
class Avenger{

  nombre:string;
  equipo:string;
  nombrereal:string;
  puedepelar:boolean;
  peleasganadas:number;
  //se define un contructar con la palabra reservada constructor
  //va a llevar los parametros de nuestra clase y asi va a poder cambiar los parametros
  //para apuntar a los requerimientos de la clase se utilza el this
  constructor(nombre:string,equipo:string,nombrereal:string){
    this.nombre=nombre;
    this.equipo=equipo;
    this.nombrereal=nombrereal;
  }
}
//se rellenan los atributos conforme el mismo orden 
let atman:Avenger= new Avenger("atman","cap","roger");
console.log(atman);
