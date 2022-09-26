import { Application } from "express";
import fileUpload from 'express-fileupload'; //requerido para leer imagenes
import morgan from 'morgan'; //requerido para leer imagenes

export default class ReadFile {

  private app: Application

  constructor(_app: Application) {
    this.app = _app
    this.read()
  }


  read() {
    this.app.use(fileUpload({ createParentPath: true }));
    this.app.use(morgan('dev'));
  }

}