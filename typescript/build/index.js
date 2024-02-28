"use strict";
// import print from "./lib/modules";
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// console.log();
// print("Bienvenido");
// greet("Maddison", new Date());
////////////////////////////////////////////////////////////////////////////////////////
// Declarando una clase
// class Asociado { }
////////////////////////////////////////////////////////////////////////////////////////
// Agregando propiedades
class Asociado {
    constructor(nombre) {
        this.nombre = nombre;
        this.identificacion = 10;
    }
    get leerIdentificacionAsociado() {
        return this.identificacion;
    }
    set escribirIdentificacionAsociado(valor) {
        this.identificacion = valor;
    }
    get leerNombreAsociado() {
        return this.nombre;
    }
    escribirNombreAsociado(nombre, edad) {
        this.edad = edad;
        this.nombre = nombre;
    }
}
const asociado = new Asociado("Carolina");
//console.log(asociado);
// asociado.escribirNombreAsociado = "Alexis"
asociado.escribirNombreAsociado("Alexis", 12);
console.log(asociado);
asociado.escribirIdentificacionAsociado = 24;
console.log(asociado);
//console.log(asociado.leerIdentificacionAsociado);
