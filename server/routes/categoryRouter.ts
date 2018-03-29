//route for seeding category database: http://localhost:3000/category
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

        const categories: any[] = [
            new Category({
                categories: "Appetizer"
            }),
            new Category({
                categories: "Sushi"
            }),
            new Category({
                categories: "Tempura"
            }),
            new Category({
                categories: "Noodle"
            }),
            new Category({
                categories: "Drink"
            })
        ];

        for (let category of categories) {
            let allCategory = new Category(category)
            allCategory.save()
        }
        res.send("databse sucessfully seeded")
    }

    public routes() {
        this.router.post('/', this.create)
    }
}

const categoryRoutes = new CategoryRouter().router;

export default categoryRoutes;

