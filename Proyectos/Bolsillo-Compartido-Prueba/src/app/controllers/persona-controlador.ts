import PersonaModel from "../models/persona-model";
import { Request, Response } from "express";

export default class PersonaControlador {

    constructor(
        private readonly personaModelo: PersonaModel
    ) { }

    getById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = Number(req?.params?.id)
            if (!id) {
                res.status(400).json({ "message": 'ID persona requerido.' });
            } else {
                const persona = await this.personaModelo.getById(id)
                if (persona) {
                    res.status(200).json({ "datos": persona })
                } else {
                    res.status(204).json({ "mensaje": `No hay registro de persona con ID=${id}` })
                }
            }
        } catch (error) {
            res.status(500).json({ "mensaje": "Error interno del servidor" })
        }
    }

    getAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const page = Number(req.query.page) || 1;

            const personas = await this.personaModelo.getAll(page)
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