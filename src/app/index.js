const express = require('express');
const uuid = require('uuid/v1');

class App{
    constructor(){
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            req.appId = uuid();
                console.log(`[${req.appId}] ${req.method} ${req.url}`);
            res.on("finish", () =>
                console.log(`[${req.appId}] ${req.method} ${req.url} ${res.statusCode}`)
            );
            next();
        });
    }

    routes(){
        this.app.use(require("./routes/teste-route"));
    }

}

module.exports = new App().app;