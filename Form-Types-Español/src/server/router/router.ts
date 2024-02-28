import { Router } from "express";
import AsociadoControlador from "../../controller/asociado.controller";

export default class ServidorRouter {
    router: Router

    constructor(
        private readonly asociadoControlador: AsociadoControlador
    ){
        this.router = Router()
        this.routes()
    }

    routes = (): void => {
        this.router.get('/asociados', this.asociadoControlador.getAll)
        this.router.get('/asociados/:id', this.asociadoControlador.getById)
    }
}

//////////////////////////////////////////////////////////////////////////////////////////

// Enrutador sin clases

// import UserModel from "../model/User";
// import users from "../../../database/users.json"
// import User from "../../interface/user.interface";

// const router: Router = Router();

// router.get("/maxPages", (_req: Request, res: Response) => {
//     const pageNumber = Math.ceil(users.length / 5)
//     // res.send(`${pageNumber}`);
//     // res.status(200).send(pageNumber.toString())
//     res.status(200).send({ pageNumber })
// });

// router.get("/users", (_req: Request, res: Response) => {
//     const usersList: User[] = users
//     res.status(201).json({ "data": usersList })
// });

// router.post("/", (req: Request, res: Response) => {
//     console.log(req.body);
//     res.send(req.body);
// });
