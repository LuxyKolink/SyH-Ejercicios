import { Request, Response } from "express";
import Persona from "../../database/models/personas-model";

export default class PersonaControlador {

    getAll = async (_req: Request, res: Response) => {
        try {
            const personas = await Persona.findAll({
                attributes: ["id", "nombre", "email", "cc"]
            })
            res.status(200).json({ data: personas})
        } catch (error) {
            res.status(500).json({ 'message': 'Error interno del servidor' })
        }
    }

    create = async (req: Request, res: Response) => {
        const datosPersona = req.body
        try {
            const nuevaPersona = await Persona.create({
                nombre: datosPersona.nombre,
                email: datosPersona.email,
                cc: datosPersona.cc
            }, {
                fields: ["nombre", "correo", "cc"]
            })
            if (nuevaPersona) {
                res.status(201).json({ mensaje: `Usuario ${datosPersona.nombre} creado con exito!.`})
            }
        } catch (error) {
            res.status(500).json({ 'message': 'Error interno del servidor' })
        }
    }

}