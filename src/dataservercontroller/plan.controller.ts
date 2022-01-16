import { Request, Response, NextFunction} from 'express'
import Planner from "../CommonMethods/requiredServer"

// @Controller('server')
export default class PlanController {


  public static async calculatePlanner(
    req: Request,
    res: Response,
    next: NextFunction
      ) {
        try {
          const { serverType, virtualMachine} = req.body;
          const vmController = new Planner(serverType, virtualMachine);
          const result = vmController.calculatePlanner();

          return  res.status(200).send({
            message:
            "server type capacity successful",
            result: {
              value: result,
            }
          });
        } catch (error) {
          console.log(error);
        }
      }
}
