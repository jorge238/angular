function consola (constructor:Function) {
  console.log(constructor);
}
//los decoradores se ponene adjunto a una clase y envia como paramatreo el constructor de esta
//se inicia con un @
@consola
class villano{
nombre:string;
constructor( nombre:string){
  this.nombre=nombre;
}

}
