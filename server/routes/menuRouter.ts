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
        let menu = new Menu({
            name,
            price,
            about,
            category
        });
        Category.find({ categories: category }, (err, category) => {
            if (err) {
                return res.status(500).json({ err });
            }
            const selectedCategory: any = category[0]
            selectedCategory.list.push(menu)
            // remove
            // const one = selectedCategory.list.find(x => x._id == "5abaff59a3fd8abbcc172701")
            // selectedCategory.list.splice(one, 1)
            selectedCategory.save()
                 .then((data) => {
                    res.status(201).json({ data })
                })
                .catch((err) => {
                    res.status(500).json({ err });
                });
        })
    }

    public routes() {
        this.router.post('/', this.create)
    }
}

const menuRoutes = new MenuRouter().router;

export default menuRoutes;
