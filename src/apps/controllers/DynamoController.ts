import { Request, Response } from 'express';
import ResponseUtility from '../../utils/responseUtility';
import DynamoService from '../services/DynamoService';


export default class DynamoController {

  public async get({ req, res }: { req: Request; res: Response; }): Promise<void> { 
    const value = DynamoService.get(req.body)
    ResponseUtility.sendResponse(res, value)
  }
  public async create({ req, res }: { req: Request; res: Response; }): Promise<void> { 
    const value = DynamoService.create(req.body)
    ResponseUtility.sendResponse(res, value)
  }
  public async delete({ req, res }: { req: Request; res: Response; }): Promise<void> { 
    const value = DynamoService.delete(req.body)
    ResponseUtility.sendResponse(res, value)
  }
}

