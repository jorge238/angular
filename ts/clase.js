//para defenir una clase se define con la palabra reservada class
//despues se pone el nombre con la primera letra en mayuscula
//se habern llaves y asi se crea la clase
var Avenger = /** @class */ (function () {
    function Avenger() {
    }
    return Avenger;
}());
var atman = new Avenger();
console.log(atman);
