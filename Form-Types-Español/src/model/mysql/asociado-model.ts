import Asociado from "../../interface/asociado.interface";

export default class AsociadoModelo {

    // Obtener por Código Asociado
    getById = (codigo: string): Asociado | null => {
        console.error(codigo + 'Not implemented');
        return null
    }

    // Obtener todos los asociados
    getAll = (): Asociado[] => {
        console.error('Not implemented');
        return []
    }
    
}