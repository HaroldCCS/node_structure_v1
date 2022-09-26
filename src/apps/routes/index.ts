import { Router } from 'express';
import DynamoRouter from './DynamoRouter';
import S3Router from './S3Router';

export default class Routes {
  private router: Router;
  constructor(_router: Router) {
    this.router = _router
    this.intance()
  }


  private intance(){
    new S3Router(this.router) as any
    new DynamoRouter(this.router) as any
  }
}