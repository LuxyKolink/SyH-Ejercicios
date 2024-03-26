import { Router } from "express";
import PersonaControlador from "../../controller/persona-controller";

export default class Enrutador {

    router: Router

    constructor(
        private readonly personaControlador: PersonaControlador
    ) {
        this.router = Router()
        this.#rutas()
    }

    #rutas = (): void => {
        this.router.get('/persona', this.personaControlador.getAll)
        this.router.post('/persona', this.personaControlador.create)
    }

}