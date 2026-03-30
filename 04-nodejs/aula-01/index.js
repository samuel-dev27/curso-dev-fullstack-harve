const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Minha primeira API com node e express");
});

app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");
});