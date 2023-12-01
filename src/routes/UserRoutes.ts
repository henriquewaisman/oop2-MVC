import { Router, Request, Response } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

UserRouter.get("/users", UserController.listUsers);

UserRouter.post('/user', function (req: Request, res: Response) {
    res.send("Request POST user");
});

UserRouter.put('/user', function (req: Request, res: Response) {
    res.send("Request PUT user");
});

UserRouter.delete('/user', function (req: Request, res: Response) {
    res.send("Request DELETE user");
});

export default UserRouter;