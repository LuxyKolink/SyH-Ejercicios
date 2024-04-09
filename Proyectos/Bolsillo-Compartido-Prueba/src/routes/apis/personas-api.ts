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

        this.router.route('/')
            .get(this.personaControlador.getAll)
            .post(this.personaControlador.create)

        this.router.route('/:id')
            .get(this.personaControlador.getById)

    }

}