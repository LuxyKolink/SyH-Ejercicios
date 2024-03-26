import { Router, Request, Response } from "express";

const enrutador: Router = Router()

enrutador.get('/', (_req: Request, res: Response) => {
    res.send("Hola SyH")
})

enrutador.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send(req.body)
})

export default enrutador

// Cree una clase que permita manejar la siguiente estructura:
// La clase se debe de llamar Enrutador,
// se puede definir cualquier tipo de visibilidad para las propiedades y funciones (justifique)
// propiedades necesarias:
//   * enrutador de tipo Router (express)
//   * (opcional) se pueden definir mas propiedades de acuerdo a la necesidad del desarrollador (justifique)
// métodos necesarios:
//   * método rutas de tipo void (rutas de la aplicacion)

// Uso de la clase:
// const enrutador = new Enrutador()
// enrutador.nombreFuncion()

// Cómo declarar una clase:
// class Enrutador {
//      // Estrucutra de la clase
// }