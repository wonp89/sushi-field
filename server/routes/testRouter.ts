import { Request, Response, Router } from 'express';

export class TestRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public test(req: Request, res: Response): void {
        res.send({
            name: "won Park"
        })
    }

    public routes() {
        this.router.get('/', this.test)
    }

}

const testRoutes = new TestRouter().router;
// testRoutes.routes();

export default testRoutes;
