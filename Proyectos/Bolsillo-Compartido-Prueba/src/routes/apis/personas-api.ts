import { Router } from "express";
import PersonaControlador from "../../app/controllers/persona-controlador";

export default class PersonasAPI {

    router: Router

    constructor(
        private readonly personaControlador: PersonaControlador
    ){
        this.router = Router()
        this.#apis()
    }

    #apis = () => {

        this.router.get('/', this.personaControlador.getAll)
        this.router.post('/', this.personaControlador.create)

    }

}