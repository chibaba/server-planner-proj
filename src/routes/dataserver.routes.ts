import {Router, Request, Response} from  'express'
import  DataCenterController from "../dataservercontroller/plan.controller"
import validate from '../CommonMethods/validator'

export class dataRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }


  async init() {
    this.router.post(
      "/server/planner-vm",
      validate.validateBody(validate.schemas.calucateVm),
      DataCenterController.calculatePlanner
    );

    this.router.get("/", (req: Request, res: Response) => {
      return res.send({
        message: "Response sent successfuly, Welcome",
      });
    });
}
}

export default new dataRouter().router;