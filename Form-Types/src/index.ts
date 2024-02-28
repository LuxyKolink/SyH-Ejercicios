import UserModel from "./model/json/User";
import UserController from "./controller/user.controller";
import ServerRouter from "./server/router/router";
import Server from "./server/server";

const userModel = new UserModel();
const userController = new UserController(userModel);
const serverRouter = new ServerRouter(userController)

const server = new Server(serverRouter)
server.start();


