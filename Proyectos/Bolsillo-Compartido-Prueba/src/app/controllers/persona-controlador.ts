import PersonaModel from "../models/persona-model";
import { Request, Response } from "express";

export default class PersonaControlador {

    constructor( 
        private readonly personaModelo: PersonaModel
    ){ }


    getAll = async (_req: Request, res: Response): Promise<void> => {
        try {
            const personas = await this.personaModelo.getAll()
            if (personas) {
                res.status(200).json({ "datos": personas })
            }
        } catch (error) {
            res.status(500).json({ "mensaje": "Error interno del servidor" })
        }
    }

    create = async (req: Request, res: Response): Promise<void> => {
        const datosPersona = req.body
            try {
                const nuevaPersona = await this.personaModelo.create(datosPersona)
                if (nuevaPersona) {
                    res.status(201).json({ "mensaje": "Persona creada con exito" })
                } else {
                    res.status(400).json({ "mensaje": "Error en proceso de creación" })
                }
            } catch (error) {
                res.status(500).json({ "mensaje": "error interno del servidor" })
            }
    }

}