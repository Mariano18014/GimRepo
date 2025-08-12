import express from "express";

const router = express.Router();

class UserRoute {
    constructor () {
        this.controller = new UserController();
    }

    start() {
        router.get('/get/user/getClass', this.controller.getClass);
        router.get('/get/user/mydata', this.controller.getMyData);
        router.post('/post/user', this.controller.addClass);
        router.delete('/delete/user', this.controller.deleteClass);

        return router;
    }

}

export default UserRoute;