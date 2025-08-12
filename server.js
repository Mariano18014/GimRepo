import express from "express";
import AdminRoute from "./routes/adminRoutes";
import CoachRoute from "./routes/coachRoutes";
import UserRoute from "./routes/userRoutes";
import ManagerRoute from "./routes/managerRoutes";

const app = express.app();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/route/admin', new AdminRoute().start());
app.use('/route/coach', new CoachRoute().start());
app.use('/route/user', new UserRoute().start());
app.use('/route/manager', new ManagerRoute().start());

const PORT = process.env.PORT;
const server = app.listen(PORT, () => console.log(`Server listening on. http://localhost:${PORT}`));

server.on('error', error => console.log(`Error in server, ${error.message}`));