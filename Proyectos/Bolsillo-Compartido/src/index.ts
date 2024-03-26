import PersonaControlador from "./controller/persona-controller"
import Enrutador from "./server/router/enrutador"
import Servidor from "./server/servidor"

const personaControlador = new PersonaControlador()

const enrutador = new Enrutador(personaControlador)
const servidor = new Servidor(enrutador)
servidor.inicio()