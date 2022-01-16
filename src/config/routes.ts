import { Express, Router, Request, Response, NextFunction } from "express";
import DataRouter from "../routes/dataserver.routes";

export default class Route {
  public router: Router;
  private app;

  constructor(app: Express) {
    // Set router
    this.router = Router();
    // Set app
    this.app = app;
    // Set all routes
    this.setAllRoutes();
  }

  private setAllRoutes() {
    this.app.use("/api/", DataRouter);
  }
}
