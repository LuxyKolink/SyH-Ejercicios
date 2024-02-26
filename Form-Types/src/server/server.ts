import dotenv from "dotenv";
import express, { Application } from "express";
import path from "path";
import ServerRouter from "./router/router";

export default class Server {
    #app: Application

    constructor(
        private readonly serverRouter: ServerRouter
    ) {
        this.#app = express()
        this.#config()
        this.#routes()
    }

    #config = (): void => {
        dotenv.config({
            path: path.join(__dirname, "../../config/.env.development"),
        });
        this.#app.use(express.urlencoded({ extended: true }))
        this.#app.use(express.json());
    }

    #routes = (): void => {
        this.#app.use('/', this.serverRouter.router)
        this.#app.use('*', this.serverRouter.router)
    }

    start = (): void => {
        const port = process.env.PORT
        this.#app.listen(port, () => {
            const hostname = process.env.HOST ? process.env.HOST : "undefined";
            console.info(`Server running at http://${hostname}:${port}/`);
          });
    }


}