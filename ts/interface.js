//al objeto se le asigna el tipo de objeto que sera
//este tipo sera declarado por el nombre de la interface
var wolwerine = {
    nombre: "wolwerine",
    poder: "regeneracion"
};
//el la funcion se la va a pasar dos parametros uno se le indica el nombre y el segundo el timpo
//se le asigna el tipo de onjeto como se nombro la interface
function enviarMision(xmen) {
    console.log("enviando a mision" + xmen.nombre);
}
function enviarCasa(xmen) {
    console.log("enviando a casa" + xmen.nombre);
}
enviarMision(wolwerine);
enviarCasa(wolwerine);
