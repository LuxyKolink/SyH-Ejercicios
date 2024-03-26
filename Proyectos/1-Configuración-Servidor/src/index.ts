import express, { Application } from "express"
import enrutador from "./rutas"

const aplicacion: Application = express()

aplicacion.use(express.urlencoded({extended: true}))
aplicacion.use(express.json())

aplicacion.use('/personas', enrutador)

aplicacion.listen(3000, () => {
    console.info("Servidor SyH corriendo en puerto 3000")
})


// Cree una clase que permita manejar la siguiente estructura:
// La clase se debe de llamar Servidor,
// se puede definir cualquier tipo de visibilidad para las propiedades y funciones (justifique)
// propiedades necesarias:
//   * aplicacion de tipo Application (express)
//   * (opcional) se pueden definir mas propiedades de acuerdo a la necesidad del desarrollador (justifique)
// constructor:
//   * debe recibir cómo parámetros el enrutador del servidor 
// métodos necesarios:
//   * método configuración de tipo void (middlewares de express)
//   * método enrutamiento de tipo void (rutas de la aplicación)
//   * método inicio servidor de tipo void 

// Uso de la clase:
// const servidor = new Servidor()
// servidor.nombreFuncion()

// Salida en consola -> Servidor conectado en puerto 3000
