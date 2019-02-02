//los paramettros ologatorios son cosas que necesita la funcion para trabajar si o se envian la funcion no corre
//los parametros opcionales llevan un signo de interrogacion al final eso quiere decir que puede que lo envien o no a la function
//parametro por defectoes aquel que podemos enviar o no a la funcion pero si no enviamos tiene un valor
function activar(quien:string,objeto:string="batiseñal",momento?:string) {
let mensaje:string;
if(momento){
  mensaje = `${ quien } activo la ${objeto} ${momento} `;
  console.log(mensaje);
}
else{
  mensaje = `${ quien } activo la ${objeto} `;
  console.log(mensaje);

}
}
 activar("gordon","batiseñal","en la tarde");
// se tiene que llenar afuerza por como estan acomodados primero quien y despue objeto etc
