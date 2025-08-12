import express from "express";

const router = express.Router();

class ManagerRoute {
    constructor () {
        this.controller = new ManagerController();
    }

    start() {
        router.get('/get/manager', this.controller.getUsers);
        router.put('/put/manager', this.controller.updateBalance);

        return router;
    }

}

export default ManagerRoute;