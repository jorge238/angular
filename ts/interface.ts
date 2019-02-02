//la interfas se tiliza para hacer o formar objetos con datos en comun
//que tengan que cumlir con los datos requeridos y haci funcionen en el codigo
//asignado
//estructura de interaces es comenzando con la palabra interfac y despues el nombre
//despues se abern corchetes y se ponen son lo que debe de cumplir  el objeto
interface Xmen{
  nombre:string,
  poder:string
}
//al objeto se le asigna el tipo de objeto que sera
//este tipo sera declarado por el nombre de la interface
let wolwerine:Xmen={
  nombre:"wolwerine",
  poder:"regeneracion"
}
//el la funcion se la va a pasar dos parametros uno se le indica el nombre y el segundo el timpo
//se le asigna el tipo de onjeto como se nombro la interface

function enviarMision(xmen : Xmen){
  console.log("enviando a mision" + xmen.nombre);
}
function enviarCasa(xmen : Xmen){
  console.log("enviando a casa" + xmen.nombre);
}

enviarMision(wolwerine);
enviarCasa(wolwerine);
