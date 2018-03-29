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
                err
                    ? res.status(500).json({ err })
                    : res.status(201).json({ data });
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
            .then((data: any) => {
                Category.find({ categories: category }, (err, category) => {

                    if (err) return res.status(500).json({ err });
                    
                    const selectedCategory: any = category[0]
                    selectedCategory.list.push(data._id)
                    selectedCategory.save()

                        // send menu object stored in category list array to the client side
                        .then((result: any) => {
                            Category.find({ _id: result._id })
                                .populate('list', ['name', 'price', 'about', 'category'])
                                .exec((err, data) =>
                                    err
                                        ? res.status(500).json({ err })
                                        : res.status(201).json({ data })
                                )
                        })
                })
            })
    }

    public update(req: Request, res: Response): void {
        Menu.findById(req.params.id, (err, menu: any) => {
            
            if (err) return res.status(500).json({ err })

            // remove menu from old category
            if (menu.category !== req.body.category)
                Category.find({ categories: menu.category }, (err, result: any) => {

                    if (err) return res.status(500).json({ err })

                    const oldCategory = result[0]
                    oldCategory.list.pull(menu._id)
                    oldCategory.save();
                })

            menu.name = req.body.name
            menu.price = req.body.price
            menu.about = req.body.about
            menu.category = req.body.category
            menu.save((err, result) => {
                err
                    ? res.status(500).json({ err })
                    : Category.find({ categories: result.category }, (err, category: any) => {

                        if (err) return res.status(500).json({ err });

                        //save menu into new category
                        const selectedCategory: any = category[0]
                        selectedCategory.list.push(result._id)
                        selectedCategory.save()
                        res.status(201).json({ result })
                    })
            })
        })
    }

    public remove(req: Request, res: Response): void {
        Menu.findById(req.params.id, (err, menu) => {

            if (err) return res.status(500).json({ err })
            
            menu.remove((err, result) =>
                err
                    ? res.status(500).json({ err })
                    : res.status(201).json({ result })
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

