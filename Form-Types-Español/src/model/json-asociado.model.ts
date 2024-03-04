import asociados from "../../database/json/asociados.json";
import Asociado from "../interface/asociado.interface";

export default class AsociadoModelo {
    getPaginasTotales = (): number => {
        return Math.ceil(asociados.length / 5)
    }

    // Obtener por Código Asociado
    getById = (codigo: string): Partial<Asociado> | null => {
        try {
            if (asociados !== undefined) {
                for (const entidadAsociado of asociados) {
                    if (entidadAsociado.asoCod === +codigo) {
                        return {
                            asoCod: entidadAsociado.asoCod,
                            asoNom: entidadAsociado.asoNom
                        }
                    }
                }
            }
        } catch (error) {
            console.error(error);

        }
        return null
    }

    // Obtener todos los asociados
    getAll = (): Asociado[] => {
        try {
            if (asociados !== undefined) {
                const listaAsociados: Asociado[] = []
                for (const entidadAsociado of asociados) {
                    if (entidadAsociado === null) {
                        console.error("No hay asociados registrados");
                        return []
                    }
                    listaAsociados.push({
                        asoCod: entidadAsociado.asoCod,
                        asoNom: entidadAsociado.asoNom,
                        asoEstado: "A"
                    })
                }
                return listaAsociados
            }
        } catch (error) {
            console.error(error);
            
        }
        return []
    }
}