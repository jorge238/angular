//la  promose nos da la opcion de ejecutar una opercion a sincrona a otra o cuando se acabo una funcion u otra tarea
//este es el cuerpo basico de la promesas
let prom1=new Promise(function(resolve, reject){
  setTimeout(()=>{
    console.log("promesa terminada");
//resolve();
reject();
  }, 1500)
})
//se ejecuta la acion asincronaa despues de que la promesa saliera bien
//se hace referencia a la promesa con su nombre
//despues se pone una funcion then que va a llevar dos parametros el resolve y el reject se parados de una ,
//y asi se puee ejecutar una funcion si sale bien la primera
prom1.then(function(){
  console.log("todo salio bien");
},function(){
  console.error("todo salio mal ")
})
