import express from "express";
import homeController from "../controllers/homeController.js";
let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getTest);
    router.get('/', (req, res) => {
        return res.send("'hello world with Tam Tang !!!")
    });
    return app.use("/", router);
}

module.exports = initWebRouters;