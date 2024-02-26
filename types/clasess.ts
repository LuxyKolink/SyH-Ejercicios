// class Point {
//     x: number;
//     y: number;

//     constructor(){
//         this.x = 0
//     }
// }

// const pt =  new Point();
// pt.x = 0;
// pt.y = 0;

// console.log(pt);

///////////////////////////////////////////////////////////


// class Persona {
//     private nombre: string;
//     edad: number;

//     constructor(nombre: string, edad: number) {
//         this.nombre = nombre,
//         this.edad = edad
//     }

    
//     public get names() : string {
//         return this.nombre;
//     }
    
// }

// const persona = new Persona("Edward", 25);

// console.log(persona.names);

//////////////////////////////////////////////////////////

// class Persona {
//     readonly name: string

//     constructor() {
//         this.name = "Carolina"
//     }
// }

// const persona = new Persona();
// persona.name = "Carolina"

// class Persona {
//     constructor(x: number, y: string)
// }

// function persona(x: number, y: string) {
//     return console.log(x, y);
    
// }

// Diferencias entre función y constructor
// Constructores no pueden tener parametros con tipos
// constructores no pueden declarar retornos

//////////////////////////////////////////////////////

// Extends class (clase heredada de otra clase)

// class Persona {
//     nombre: string = "Carolina"
// }

// class Ingeniero extends Persona {
//     constructor(){
//         super();
//         console.log(this.nombre);
        
//     }
// }

// const ing = new Ingeniero()


// métodos dentro de una clase tienen el mismo tipado que una función o constructor
// class Punto {
//     x: number
//     y: number

//     scale(): string {
//         return this.x
//     }
// }

// Por qué se usa el this?

// let numero: number = 0

// class Persona {
//     numero: string = "0"

//     m(){
//         // Incorrecto
//         //numero = "1"
//         // Correcto
//         this.numero = "1"
//     }
// }

///////////////////////////////////////////////////////////////////

// Getter y setters

// SI existe get pero no set, la propiedad es readonly
// SI no se especifica el tipo del parametro de la función set, se infiere el tipo desde el método get
// getters y setters deben tener la misma visibilidad
// class Persona {
//     _nombre: string

    
//     public get nombre() : string {
//         return this._nombre
//     }

    
//     public set nombre(valor : string) {
//         this._nombre = valor;
//     }
    
    
// }


// visibildad

// class Persona {
//     private nombre: string = "Carolina"
// }

// const persona = new Persona()
// console.log(persona);

//////////////////////////////////////////////////////////////////////////

// Intrface


// interface IngenieroPruebas {
//     hacerPruebas(): void;
// }

// class Persona implements IngenieroPruebas {
//     hacerPruebas(): void {
//         console.log("Estoy haciendo pruebas!!");
        
//     }
    
// }

// class Persona implements IngenieroPruebas {
//     hacerDesarrollo(): void {
//         console.log("Estoy haciendo desarrollo!!");
        
//     }
    
// }

// Propiedades opcionales

// interface Ingeniero {
//     cargo: string
//     puntos?: number
// }

// class Persona implements Ingeniero {
//     cargo = "Ingeniero de sistemas"
    
// }

// const persona = new Persona()
// console.log(persona.puntos);


//////////////////////////////////////////////////////////////////////

// Extensiones

// class Persona {
//     camina(){
//         console.log("Ando caminando no me molesten");
        
//     }
// }

// class Ingeniero extends Persona {
//     programar(veces: number){
//         for (let i = 0; i < veces; i++) {
//             console.log(`He programado unas ${veces} veces!!`);
            
            
//         }
//     }
// }

// const ing = new Ingeniero()
// ing.programar(4)

// class Base {
//     greet() {
//       console.log("Hello, world!");
//     }
//   }
   
//   class Derived extends Base {
//     greet(name?: string) {
//       if (name === undefined) {
//         super.greet();
//       } else {
//         console.log(`Hello, ${name.toUpperCase()}`);
//       }
//     }
//   }
   
//   const d = new Derived();
//   d.greet();
//   d.greet("reader");

//   class Base {
//     greet() {
//       console.log("Hello, world!");
//     }
//   }
   
//   class Derived extends Base {
//     // Make this parameter required
//     greet() {
//       console.log(`Hello, ${name.toUpperCase()}`);
//     }
//   }

