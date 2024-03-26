import Enrutador from "./routes/rutas"
import Servidor from "./server/servidor"

const enrutador = new Enrutador()
const servidor = new Servidor(enrutador)
servidor.inicio()