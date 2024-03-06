import AsociadoModelo from "../model/json/json-asociado.model"
import { Asociado } from "../../database/models/asociado";
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
            console.log(asoCod);
            
            // const asociado = this.asociadoModelo.getById(asoCod)
            const asociado = await Asociado().findOne({
                where: {
                    AsoCod: asoCod
                }
            })
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
            const asociados = await Asociado.findAll({
                attributes: ["AsoCod", "AsoEstado", "AsoNom"]
            })
            res.status(200).json({'data': asociados})
        } catch (error) {
            res.status(500).json({ 'message': 'Error interno del servidor' })
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const { asoNom } = req.body
            const nuevoAsociado = await Asociado.create({
                asoNom,
            },{
                fields: ["asoNom"]
            });
            
            if (nuevoAsociado) {
                res.status(200).json({'message': 'Usuario creado con exito'})
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ 'message': 'Error interno del servidor' })
        }
    }
}