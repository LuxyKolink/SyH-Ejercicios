# Personas
URL -> http://localhost:3000/personas

Interface API:
    - getAll() -> GET /personas
    - create() -> POST /personas
    - update() -> PUT /personas/:id
    - patch() -> PATCH /personas/:id
    - delete() -> DELETE /personas/:id

    - getById() -> GET /personas/:id

    // Por parametro
    - getByCc() -> GET /personas/:cc

    // Por cuerpo de petición
    - getByCc() -> GET /personas
                -> BODY:
                {
                    "cc": "999999999"
                }


# Tipo Ingreso
URL -> http://localhost:3000/tiposdeingreso

Interface API:
    - getAll() -> GET /tiposdeingreso
    - create() -> POST /tiposdeingreso
    - update() -> PUT /tiposdeingreso/:id
    - patch() -> PATCH /tiposdeingreso/:id
    - delete() -> DELETE /tiposdeingreso/:id

    - getById() -> GET /tiposdeingreso/:id


# Tipo Gasto
URL -> http://localhost:3000/tiposdegasto

Interface API:
    - getAll() -> GET /tiposdegasto
    - create() -> POST /tiposdegasto
    - update() -> PUT /tiposdegasto/:id
    - patch() -> PATCH /tiposdegasto/:id
    - delete() -> DELETE /tiposdegasto/:id

    - getById() -> GET /tiposdegasto/:id

# Tipo Bolsillo
URL -> http://localhost:3000/tiposdebolsillo

Interface API:
    - getAll() -> GET /tiposdebolsillo
    - create() -> POST /tiposdebolsillo
    - update() -> PUT /tiposdebolsillo/:id
    - patch() -> PATCH /tiposdebolsillo/:id
    - delete() -> DELETE /tiposdebolsillo/:id

    - getById() -> GET /tiposdebolsillo/:id

# Ingresos
URL -> http://localhost:3000/personas/:idPersona/ingresos

Interface API:
    - getAll() -> GET /personas/:idPersona/ingresos
    - create() -> POST /personas/:idPersona/ingresos
    - update() -> PUT /personas/:idPersona/ingresos/:idIngreso
    - patch() -> PATCH /personas/:idPersona/ingresos/:idIngreso
    - delete() -> DELETE /personas/:idPersona/ingresos/:idIngreso

    - getById() -> GET /personas/:idPersona/ingresos/:idIngreso

# Gastos
URL -> http://localhost:3000/personas/:idPersona/gastos

Interface API:
    - getAll() -> GET /personas/:idPersona/gastos
    - create() -> POST /personas/:idPersona/gastos
    - update() -> PUT /personas/:idPersona/gastos/:idGasto
    - patch() -> PATCH /personas/:idPersona/gastos/:idGasto
    - delete() -> DELETE /personas/:idPersona/gastos/:idGasto

    - getById() -> GET /personas/:idPersona/gastos/:idGastos

# Bolsillo

URL -> http://localhost:3000/personas/:idPersona/bolsillo

Interface API:
    - getAll() -> GET /personas/:idPersona/bolsillo
    - create() -> POST /personas/:idPersona/bolsillo
    - update() -> PUT /personas/:idPersona/bolsillo/:idBolsillo
    - patch() -> PATCH /personas/:idPersona/bolsillo/:idBolsillo
    - delete() -> DELETE /personas/:idPersona/bolsillo/:idBolsillo

    - getById() -> GET /personas/:idPersona/bolsillo/:idBolsillo

# Para empezar

### Tipo Ingreso

1. Crear archivo -> app/models/tipo-ingreso-modelo.ts
2. Crear archivo -> app/controllers/tipo-ingreso-controlador.ts
3. Crear archivo -> routes/apis/tipo-ingreso-api.ts

4. Modificar método rutas en routes/enrutador.ts
    4.1. Definir tipoIngresoAPI dentro de los parametros de la clase Enrutador
    4.2. Exponer ruta en el método #rutas 

5. Inicializar las clases Modelo, Controlador, API de tipo ingresos en index.ts
    5.1. Llamar a la API tipoIngreso en los parametros de Enrutador (index.ts)