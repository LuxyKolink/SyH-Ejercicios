import AsociadoModelo from "../model/asociado.model"
import { Request, Response } from "express";

export default class AsociadoControlador {

    constructor(
        private readonly asociadoModelo: AsociadoModelo
    ){

    }

    getPaginasTotales = async (_req: Request, res: Response) => {
        try {
            const numeroDePaginas = this.asociadoModelo.getPaginasTotales()
            res.status(200).json({numeroDePaginas})
        } catch (error) {
            res.status(500).json({ 'message': 'Error interno del servidor' })
        }
    }

    // Obtener por Código Asociado
    getById = async (req: Request, res: Response) => {
        try {
            const asoCod = req.params.id;
            const asociado = this.asociadoModelo.getById(asoCod)
            if (asociado) {
                res.status(200).json({"datos": asociado})
            }
        } catch (error) {
            res.status(500).json({ 'message': 'Error interno del servidor' })
        }
    }

    // Obtener todos los asociados
    getAll = async (_req: Request, res: Response) => {
        try {
            const asociados = this.asociadoModelo.getAll()
            res.status(200).json({'data': asociados})
        } catch (error) {
            res.status(500).json({ 'message': 'Error interno del servidor' })
        }
    }
}