import { Request, Response } from 'express';
import ResponseUtility from '../../utils/responseUtility';
import S3Service from '../services/S3Service';


export default class DynamoController {

  public async get_buckets({ req, res }: { req: Request; res: Response; }): Promise<void> { 
    const value = S3Service.get_buckets()
    ResponseUtility.sendResponse(res, value)
  }
  public async create({ req, res }: { req: Request; res: Response; }): Promise<void> { 
    const value = S3Service.create(req.body, req?.files)
    ResponseUtility.sendResponse(res, value)
  }
}

