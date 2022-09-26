import { Response } from 'express';


export default class ResponseUtility {
  constructor() {
  }

  static sendResponse = (_res: Response, _object: any = {}) => {
    const code = (_object.hasOwnProperty('code')) ? _object['code'] : 500;
    return _res.status(code).send(_object);
  }


  //@INFO Retorno exitoso
  static success(_data: any) {
    {
      return {
        code: 200,
        status: 'success',
        ..._data
      }
    }
  }

  //@INFO Error controlado
  static error(_error: any) {
    return {
      code: 400,
      status: 'error',
      _error
    }
  }

  //@INFO Error de catch no controlado
  static fail(_error: any) {
    return {
      code: 500,
      status: 'error',
      _error
    }
  }
}