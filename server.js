const express = require("express");
const morgan = require("morgan");
const path = require('path');

// START
const app = express();

// AMBIENTE
const isProduction = process.env.NODE_ENV === "production";
const PORT = 3005;

// CONFIGURACOES
if (!isProduction) app.use(morgan("dev"));
app.disable('x-powered-by');

// ROTAS
app.use("/", require("./routes"));

// 404 - ROTA
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// ROTA - 422, 500, 401
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if (err.status !== 404) console.warn("Error: ", err.message, new Date());
    res.json(err);
});


// ESCUTAR
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Rodando na //localhost:${PORT}`);
});