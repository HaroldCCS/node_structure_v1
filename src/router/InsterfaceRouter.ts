import { Router } from "express";


export default class InsterfaceRouter {
  public router: Router
  public entity: any

  constructor(_router: Router, _Entity: any) {
    this.router = _router
    this.entity = new _Entity()
    this.create()
  }

  create() {
    this.gets()
    this.posts()
    this.puts()
    this.deletes()
  }

  public gets(): void { }

  public posts(): void { }

  public puts(): void { }

  public deletes(): void { }
}
