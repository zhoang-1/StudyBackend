import express from "express";
import homeController from "../controllers/homeController.js";
let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getTest);

    //CRUD
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.DisplayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);

    router.post('/put-crud', homeController.putCRUD);
    return app.use("/", router);
}

module.exports = initWebRouters;