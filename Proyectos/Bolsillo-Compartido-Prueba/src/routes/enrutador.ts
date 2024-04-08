import { Router } from "express";
import PersonasAPI from "./apis/personas-api";

export default class Enrutador {

    router: Router

    constructor(
        private readonly personasApi: PersonasAPI
    ) {
        this.router = Router()
        this.#rutas()
    }

    #rutas = (): void => {
        this.router.use('/personas', this.personasApi.router)
    }

    /*
    #rutas = (): void => {
        // Ruta creada usando MVC
        this.router.get('/new/personas', this.personaControlador.getAll)

        // Rutas sin MVC
        this.router.get('/old/personas', async (_req: Request, res: Response) => {
            try {
                const personas = await Persona.findAll({
                    attributes: ["nombre", "email", "cc"]
                })
                if (personas) {
                    res.status(201).json({ "datos": personas })
                }
            } catch (error) {
                res.status(500).json({ "mensaje": "error interno del servidor" })
            }
        })

        this.router.post('/old/personas', async (req: Request, res: Response) => {
            const datosPersona = req.body
            try {
                const nuevaPersona = await Persona.create(datosPersona)
                if (nuevaPersona) {
                    res.status(201).json({ "mensaje": "Persona creada con exito" })
                }
            } catch (error) {
                res.status(500).json({ "mensaje": "error interno del servidor" })
            }

        })

        this.router.post('/old/descriptivo/personas', async (req: Request, res: Response) => {
            const {
                nombre,
                email,
                cc
            } = req.body

            if (!nombre || !email || !cc) {
                res.status(400).json({ "mensaje": "Digite los campos faltantes."})
            }

            try {
                const nuevaPersona = await Persona.create({
                    nombre: nombre,
                    email: email,
                    cc: cc
                }, {
                    fields: ["nombre", "email", "cc"]
                })
                if (nuevaPersona) {
                    res.status(201).json({ "mensaje": `Usuario ${nombre} creado con exito!.` })
                }
            } catch (error) {
                res.status(500).json({ 'mensaje': 'Error interno del servidor' })
            }

        })

        this.router.put('/old/personas/:id', async (req: Request, res: Response) => {

            const id = parseInt(req.params.id);

            if (!id) {
                res.status(400).json({ 'message': 'Parametro ID es requerido.' });
            }

            const datosPersona = req.body;

            try {
                const persona = await Persona.findByPk(id)
                if(persona){
                    const actualizacionPersona = await persona.update(datosPersona)
                    if (actualizacionPersona) {
                        res.status(200).json({ "mensaje": "Persona actualizada con exito" })
                    }
                } else {
                    res.status(400).json({ "mensaje": `No employee matches ID ${id}.`})
                }
            } catch (error) {
                res.status(500).json({ 'mensaje': 'Error interno del servidor' })
            }

        })

        this.router.delete('/old/personas/:id', async (req: Request, res: Response) => {

            const id = parseInt(req.params.id);

            if (!id) {
                res.status(400).json({ 'message': 'Parametro ID es requerido.' });
            }

            try {
                const persona = await Persona.findByPk(id)
                if(persona){
                    await persona.destroy()
                    res.status(200).json({ "mensaje": "Persona eliminada con exito" })
                } else {
                    res.status(400).json({ "mensaje": `No employee matches ID ${id}.`})
                }
            } catch (error) {
                res.status(500).json({ 'mensaje': 'Error interno del servidor' })
            }

        })
    }
    */

}