import { Request, Response, Router } from 'express';
import Category from '../models/category';
import Menu from '../models/menu';

class CategoryRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public create(req: Request, res: Response): void {
        const categories: string = "Appetizer"
        // const list: Array<Object> = req.body.menu._id
        let category = new Category({
            categories
            // list
        });
        category.save()
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

const categoryRoutes = new CategoryRouter().router;

export default categoryRoutes;

