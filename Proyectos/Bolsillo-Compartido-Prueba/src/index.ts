import PersonaControlador from "./app/controllers/persona-controlador"
import PersonaModel from "./app/models/persona-model"
import PersonasAPI from "./routes/apis/personas-api"
import Enrutador from "./routes/enrutador"
import Servidor from "./server/servidor"

const personaModelo = new PersonaModel()
const personaControlador = new PersonaControlador(personaModelo)
const personasApi = new PersonasAPI(personaControlador)

const enrutador = new Enrutador(personasApi)
const servidor = new Servidor(enrutador)
servidor.inicio()