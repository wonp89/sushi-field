import { Request, Response, Router } from 'express';
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')
import User from '../models/user';

class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public signin(req: Request, res: Response): void {
        User.findOne({ username: req.body.username }, (err, user: any) => {
            if (err) return res.status(500).json({err})
            if (!user) return res.status(401).json({ err: {message: 'Wrong Username'}})
            if (!bcrypt.compareSync(req.body.password, user.password)) return res.status(401).json({ err: {message: "Wrong Password"}})

            let token = jwt.sign({user: user}, 'secret', {expiresIn: 10800});
            res.status(200).json({
                mssage: 'You are logged in',
                token: token
            })
        })
    }

    public routes() {
    this.router.post('/signin', this.signin)
}
}

const userRoutes = new UserRouter().router;

export default userRoutes;

