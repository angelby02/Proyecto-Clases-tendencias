import { Injectable, NestMiddleware } from "@nestjs/common"
import { NextFunction } from "express";

@Injectable()
export class VeryfyDeviceMiddleware implements NestMiddleware{
use(req: Request, res: Response, next: NextFunction) {
    console.log(req.method),
                (req.body);
next();
}
}