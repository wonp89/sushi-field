import { Request, Response, Router } from 'express';
import Category from '../models/category';
import Menu from '../models/menu';

class MenuRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public create(req: Request, res: Response): void {

        const name: string = req.body.name
        const price: string = req.body.price
        const about: string = req.body.about
        const category: string = req.body.category
        // const categoryId: Obejct = {"_id":}
        let menu = new Menu({
            name,
            price,
            about,
            category,
            // categoryId
        });
        menu.save()
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

const menuRoutes = new MenuRouter().router;

export default menuRoutes;
