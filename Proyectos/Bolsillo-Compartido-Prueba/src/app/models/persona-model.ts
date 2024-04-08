import Persona from "../../database/model/persona-sequelize"
import IPersona from "../../interfaces/persona-interface"

export default class PersonaModel {

    getAll = async (): Promise<IPersona[]> => {
        try {
            const personas = Persona.findAll({
                attributes: ["id", "nombre", "email", "cc"]
            })
            return personas
        } catch (error) {
            console.error(error);
        }
        return []
    } 

    create = async (persona: IPersona): Promise<IPersona | null> => {
        try {
            const nuevaPersona = await Persona.create({
                nombre: persona.nombre,
                email: persona.email,
                cc: persona.cc
            })
            return {
                id: nuevaPersona.id,
                nombre: nuevaPersona.nombre,
                email:  nuevaPersona.email,
                cc: nuevaPersona.cc
            }
        } catch (error) {
            console.error(error);
        }
        return null
    }

}