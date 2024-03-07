import AsociadoModelo from "./model/asociado-model";
import AsociadoControlador from "./controller/asociado.controller";
import ServidorRouter from "./server/router/router";
import Servidor from "./server/server";

const asociadoModelo = new AsociadoModelo();
const asociadoControlador = new AsociadoControlador(asociadoModelo);
const servidorRouter = new ServidorRouter(asociadoControlador)

const servidor = new Servidor(servidorRouter)
servidor.start();


