//

let nombre:string="juan";
let apellido:string="lopez";
let edad:number=32;
let texto="hola mundo" +" "+ nombre +" "+ apellido +"  ("+ edad +")";

console.log(texto);
// se utiliza los temples literales para acortar el codigo a concatener y se abre con las dos apostrofes diferentes
//y para poner variables dentro se usa el signo de dolar  tal como en el ejemplo , y lo que esta adentro de los corchetes es js puro
let text=`hola, ${nombre} ${apellido} (${edad})`;
console.log(text); 
