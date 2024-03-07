import Asociado from "../../database/models/asociado";
import IAsociado from "../interface/asociado.interface";

export default class AsociadoModelo {

    constructor() { }
    // Obtener por Código Asociado
    getById = async (codigo: string): Promise<IAsociado | null> => {
        try {
            const asociado = await Asociado.findOne({
                where: {
                    AsoCod: codigo
                }
            })
            return asociado
        } catch (error) {
            console.error(error);
        }
        return null
    }

    // Obtener todos los asociados
    getAll = async (): Promise<IAsociado[]> => {
        try {
            const asociados = await Asociado.findAll({
                attributes: ["AsoCod", "AsoEstado", "AsoNom"]
            })
            return asociados
        } catch (error) {
            console.error(error);
        }
        return []
    }

    create = async (asociado: Asociado): Promise<IAsociado | null> => {
        try {
            if (!asociado) {
                console.error('El objeto asociado es nulo.');
                return null
            }

            if (!asociado.asoNom) {
                console.error('Faltan campos obligatorios en el objeto asociado.');
                return null
            }
            const nuevoAsociado = await Asociado.create({
                asoNom: asociado.asoNom,
                asoEstado: asociado.asoEstado
            }, {
                fields: ["asoNom", "asoEstado"]
            })
            return nuevoAsociado
        } catch (error) {
            console.error(error);
        }
        return null
    }

}