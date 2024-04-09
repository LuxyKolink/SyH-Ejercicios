import Persona from "../../database/model/persona-sequelize"
import IPersona from "../../interfaces/persona-interface"

export default class PersonaModel {

    getById = async (id: number): Promise<IPersona | null> => {
        try {
            if (id <= 0) {
                console.error('Id debe ser número positivo.');
                return null
            }
            
            const persona = await Persona.findByPk(id)

            if (!persona) {
                console.error(`No hay registro de persona con ID=${id}`);
                return null
            } 

            return persona
        } catch (error) {
            console.error(error);
        }
        return null
    }

    getByParam = async (_param: string, _value: string): Promise<IPersona | null> => {
        try {
            //const persona = await Persona.findOne()
        } catch (error) {
            console.error(error);
        }
        return null
    }

    getAll = async (page: number): Promise<IPersona[]> => {
        try {
            const limite = Number(process.env.LIMITE)
            const offset = limite * page
            const personas = Persona.findAll({
                attributes: ["id", "nombre", "email", "cc"],
                limit: limite,
                offset: offset
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