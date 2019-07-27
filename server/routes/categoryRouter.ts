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
    // seeding manually
    const categories: any[] = [
      new Category({
        categories: "Appetizer",
        order: 0
      }),
      new Category({
        categories: "Lunch Special",
        order: 1
      }),
      new Category({
        categories: "Dinner Special",
        order: 2
      }),
      new Category({
        categories: "Tempura",
        order: 3
      }),
      new Category({
        categories: "Noodles",
        order: 4
      }),
      new Category({
        categories: "Ramen",
        order: 5
      }),
      new Category({
        categories: "Japanese Curry",
        order: 6
      }),
      new Category({
        categories: "Sashimi",
        order: 7
      }),
      new Category({
        categories: "Sushi Nigiri",
        order: 8
      }),
      new Category({
        categories: "Hoso Maki",
        order: 9
      }),
      new Category({
        categories: "Temaki (Sushi Cones)",
        order: 10
      }),
      new Category({
        categories: "Vegetable Sushi Rolls",
        order: 11
      }),
      new Category({
        categories: "Sushi Rolls",
        order: 12
      }),
      new Category({
        categories: "Baked Rolls",
        order: 13
      }),
      new Category({
        categories: "Tempura Rolls",
        order: 14
      }),
      new Category({
        categories: "Chef's Special Rolls",
        order: 15
      }),
      new Category({
        categories: "Teriyaki / Katsu / Don",
        order: 16
      }),
      new Category({
        categories: "Roll Combo",
        order: 17
      }),
      new Category({
        categories: "Platter",
        order: 18
      }),
    ];

    for (let category of categories) {
      let allCategory = new Category(category)
      allCategory.save()
    }
    res.send("Databse sucessfully seeded")
  }

  public routes() {
    this.router.post('/', this.create)
  }
}

const categoryRoutes = new CategoryRouter().router;

export default categoryRoutes;

