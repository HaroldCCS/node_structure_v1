import { Router } from "express";
import InsterfaceRouter from "../../router/InsterfaceRouter";
import DynamoController from "../controllers/DynamoController";


export default class DynamoRouter extends InsterfaceRouter {
  private path: string = '/dynamo';


  constructor(_router: Router) {
    super(_router, DynamoController)
  }

  gets() {
    this.router.get(this.path + '/:_id', this.entity.get);
  }

  posts() {
    this.router.post(this.path, this.entity.create);
  }

  deletes() {
    this.router.delete(this.path + '/:_id', this.entity.delete);
  }
}

