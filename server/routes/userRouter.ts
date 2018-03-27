import { Request, Response, Router } from 'express';
import User from '../models/user';

class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public create(req: Request, res: Response): void {
        const userName: string = "sushiField"
        const password: string = "1234"
        let user = new User({
            userName,
            password
        });
        user.save()
        .then((data) => {
            res.status(201).json({ data });
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
    }

    public routes() {
        this.router.post('/', this.create)
    }
}

const userRoutes = new UserRouter().router;

export default userRoutes;

