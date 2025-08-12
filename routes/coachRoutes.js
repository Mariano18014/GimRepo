import express from "express";

const router = express.Router();

class CoachRoute {
    constructor () {
        this.controller = new AdminController();
    }

    start() {
        router.get('/get/coach', this.controller.getClass);
        router.post('/post/coach', this.controller.addClass);
        router.put('/put/coach', this.controller.editClass);
        router.delete('/put/coach', this.controller.deleteClass);

        return router;
    }
}

export default CoachRoute;