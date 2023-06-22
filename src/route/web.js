import express from "express";
import homeController from "../controllers/homeController.js";
let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getTest);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.DisplayGetCRUD);

    return app.use("/", router);
}

module.exports = initWebRouters;