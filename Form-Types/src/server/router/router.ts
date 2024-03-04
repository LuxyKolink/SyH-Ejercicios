import { Router } from "express";
import UserController from "../../controller/user.controller";

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
