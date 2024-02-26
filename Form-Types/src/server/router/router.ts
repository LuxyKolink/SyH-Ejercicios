import { Router } from "express";
import UserController from "../../controller/user.controller";
// import UserModel from "../model/User";
// import users from "../../../database/users.json"
// import User from "../../interface/user.interface";

export default class ServerRouter {
    router: Router

    constructor(
        private readonly userController: UserController
    ){
        this.router = Router()
        this.routes()
    }

    routes = (): void => {
        this.router.get('/', this.userController.getAll)
        this.router.get('/:id', this.userController.getById)
    }
}

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
