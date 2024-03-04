import AsociadoModelo from "../model/json-asociado.model"
import { MysqlAsociadoModel } from "../../database/models/asociado-model";
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
            const asociado = await MysqlAsociadoModel.findOne({
                where: {
                    AsoCod: asoCod
                }
            })
            if (asociado) {
                res.status(200).json({"datos": asociado})
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
            const asociados = await MysqlAsociadoModel.findAll({
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
            const nuevoAsociado = await MysqlAsociadoModel.create({
                asoNom
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