import { Request, Response, Router } from 'express';
import Category from '../models/category';
import Menu from '../models/menu';

class MenuRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public get(req: Request, res: Response): void {
        Category.find()
            .populate('list', ['name', 'price', 'about', 'category'])
            .exec((err, data) => {
                if (err) return res.status(500).json({ err })
                res.status(201).json({ data })
            });
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
        menu.save()

            //push menu into category list
            .then((data: any): void => {
                Category.find({ categories: category }, (err, category) => {
                    if (err) return res.status(500).json({ err });
                    const selectedCategory: any = category[0]
                    selectedCategory.list.push(data._id)
                    selectedCategory.save()
                        // send menu objects stored in category list array to the client side
                        .then((result: any): void => {
                            Category.find({ _id: result._id })
                                .populate('list', ['name', 'price', 'about', 'category'])
                                .exec((err, data) => {
                                    if (err) return res.status(500).json({ err })
                                    res.status(201).json({ data })
                                }
                                )
                        })
                })
            })
    }

    public update(req: Request, res: Response): void {
        Menu.findById(req.params.id, (err, menu: any) => {
            if (err) return res.status(500).json({ err })
            menu.name = req.body.name
            menu.price = req.body.price
            menu.about = req.body.about
            menu.category = req.body.category
            menu.save((err, result) => {
                if (err) return res.status(500).json({ err })
                res.status(201).json({ result })
            })
        })
    }

    public remove(req: Request, res: Response): void {
        Menu.findById(req.params.id, (err, menu) => {
            if (err) return res.status(500).json({ err })
            menu.remove((err, result) => {
                if (err) return res.status(500).json({ err })
                res.status(201).json({ result })
            }
            )
        })
    }

    public routes() {
        this.router.get('/', this.get)
        this.router.post('/', this.create)
        this.router.patch('/:id', this.update)
        this.router.delete('/:id', this.remove)
    }
}

const menuRoutes = new MenuRouter().router;

export default menuRoutes;

