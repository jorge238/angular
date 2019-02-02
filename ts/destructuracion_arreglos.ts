//para indicar que es un arreglo se agregan estas llaves [] antes de el signo de igual y despues se abern []  y montamos nuestro arrelgo

let avengers:string[]=[ "thor","steve","tony" ];
//para hacer la destructuracion en un arreglo la variacion es poner las llaves []y no los corchtes{}

let[thor,steve,tony]=avengers;
//para obtener un solo nombre se tiene que hacer referencia con un espacio
//y despues del espacio una , hasta llegar a la posicion onde obtendremos el valor

console.log(thor,steve,tony);
