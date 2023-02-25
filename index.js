const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! hola mundo')
})

app.get('/doble/:num', (req, res) => {
    console.log(req.params);
    const doble = {
        "num": req.params.num,
        "resultado": req.params.num * 2
    }
    res.json(doble)
})





app.get('/estudiantes', (req, res) => {
    const estudiantes = [
        {
            "nombre": "Pedro Campos",
            "correo": "pedro@correo.de"
        },
        {
            "nombre": "Jimena Mora",
            "correo": "jimena@correo.de"
        }
    ]
    res.json(estudiantes);
})








app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})