import ResponseUtility from '../../utils/responseUtility';
import { DynamoTypes } from '../types/DynamoTypes';
import DynamoUtil from "../utils/aws/DynamoUtil";

class DynamoService {
  constructor() {
  }

  public async create(_params: DynamoTypes.ICreate) {
    try {
      /*
        EJEMPLO
          "usersKeys"
            {
            "userKey": "3",
            "date": new Date(),
            "edad": "11",
            "name": "Harold"
          }
      */
      let params_create = {
        TableName: _params.table_name,
        Item: {
          ..._params.items
        }
      };

      return await DynamoUtil.create(params_create);
    } catch (error) {
      return ResponseUtility.fail(error)
    }
  }


  public async get(_params: DynamoTypes.IGet) {
    try {
      let params_get = {
        TableName: _params.table_name,
        Key: {
          ..._params.key,
        },
      };

      return await DynamoUtil.get(params_get);
    } catch (error) {
      return ResponseUtility.fail(error)
    }
  }


  public async delete(_params: DynamoTypes.IDelete) {
    try {
      let params_delete = {
        TableName: _params.table_name,
        Key: {
          ..._params.key,
        },
      };

      return await DynamoUtil.get(params_delete);
    } catch (error) {
      return ResponseUtility.fail(error)
    }
  }
}

export default new DynamoService();