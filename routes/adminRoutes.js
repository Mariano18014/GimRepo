import express from "express";

const router = express.Router();

class AdminRoute {
    constructor () {
        this.cotroller = new AdminController();
    }

    start() {
        router.get('/get/users', this.controller.getAllUsers);
        router.get('/get/coachs', this.controller.getAllCoachs);
        router.get('/get/managers', this.controller.getAllManagers);
        router.post('/post/users', this.controller.addUser);
        router.post('/post/coachs', this.controller.addCoach);
        router.post('/post/managers', this.controller.addManager);
        router.put('/put/users', this.controller.updateUser);
        router.put('/put/coachs', this.controller.updateCoach);
        router.put('/put/managers', this.controller.updateManager);
        router.delete('/delete/users', this.controller.deleteUser);
        router.delete('/delete/coachs', this.controller.deleteCoach);
        router.delete('/delete/managers', this.controller.deleteManager);

        return router;
    }

}

export default AdminRoute;