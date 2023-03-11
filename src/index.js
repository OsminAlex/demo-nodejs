const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (res, req)  => {
    res.send("Hola");
})

app.listen(PORT, () => {
    console.log(`Aplicación corriendo en el puerto ${PORT}`)
})