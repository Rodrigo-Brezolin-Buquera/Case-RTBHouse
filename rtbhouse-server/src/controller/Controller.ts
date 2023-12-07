import { Business } from "../business/Business";
import { Request, Response } from "express";
import { CustomError } from "../error/customError";

export class Controller {
  public async findProductsData(req: Request, res: Response): Promise<any> {
    try {
      const business = new Business();
      const result = await business.findProductsData();
      res.status(200).send({ result });
    } catch (error) {
        if(error instanceof CustomError) {
            res.status(error.statusCode).send(error.message)
        } else {
            res.status(500).send("Unexpected error, try again later")
        }
    }
  }
}
