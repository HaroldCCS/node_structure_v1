import { Router } from "express";
import InsterfaceRouter from "../../router/InsterfaceRouter";
import S3Controller from "../controllers/S3Controller";

export default class S3Router extends InsterfaceRouter {
  private path: string = '/s3';

  constructor(_router: Router) {
    super(_router, S3Controller)
  }

  gets() {
    this.router.get(this.path + '/:_id', this.entity.get_buckets);
  }

  posts() {
    this.router.post(this.path + '/create', this.entity.create);
  }
}
