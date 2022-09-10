import { Request, Response, NextFunction } from "express";
import jwt from '../token/jwt';

async function validateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token: string = String(authorization?.replace('Bearer ', ''));

    console.log(token)

    const verified = jwt.verifyToken(token);

    if (!verified) {
        console.log(token)
        return res.status(401).send('Token inválido!');
    }
    
    res.locals.verified = verified;

    next();
}

export default validateToken;