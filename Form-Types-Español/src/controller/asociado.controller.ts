import AsociadoModelo from "../model/asociado-model";
import { Request, Response } from "express";

export default class AsociadoControlador {

    constructor(
        private readonly asociadoModelo: AsociadoModelo
    ){

    }

    // Obtener por Código Asociado
    getById = async (req: Request, res: Response) => {
        try {
            const asoCod = req.params.id;
            console.log(asoCod);
            
            // const asociado = this.asociadoModelo.getById(asoCod)
            const asociado = await this.asociadoModelo.getById(asoCod)
            if (asociado) {
                res.status(200).json({"datos": asociado})
            } else {
                res.status(400).json({ 'message': 'Asociado no existe' })
            }
        } catch (error) {
            console.error(error);
            
            res.status(500).json({ 'message': 'Error interno del servidor' })
        }
    }

    

    // Obtener todos los asociados
    getAll = async (_req: Request, res: Response) => {
        try {
            // const asociados = this.asociadoModelo.getAll()
            const asociados = await this.asociadoModelo.getAll();
            res.status(200).json({'data': asociados})
        } catch (error) {
            res.status(500).json({ 'message': 'Error interno del servidor' })
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const newAsociado = req.body
            
            const nuevoAsociado = await this.asociadoModelo.create(newAsociado);
        
            if (nuevoAsociado) {
                res.status(200).json({'message': 'Usuario creado con exito'})
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ 'message': 'Error interno del servidor' })
        }
    }
}