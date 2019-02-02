var Avenger = /** @class */ (function () {
    //se define un contructar con la palabra reservada constructor
    //va a llevar los parametros de nuestra clase y asi va a poder cambiar los parametros
    //para apuntar a los requerimientos de la clase se utilza el this
    function Avenger(nombre, equipo, nombrereal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombrereal = nombrereal;
    }
    return Avenger;
}());
//se rellenan los atributos conforme el mismo orden 
var atman = new Avenger("atman", "cap", "roger");
console.log(atman);
