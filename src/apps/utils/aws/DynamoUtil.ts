import AWS from "aws-sdk"
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import ResponseUtility from "../../../utils/responseUtility";

class DynamoUtil {

  private docClient: DocumentClient = new AWS.DynamoDB.DocumentClient();

  constructor() {
    setTimeout(() => {
      this.docClient = new AWS.DynamoDB.DocumentClient();
    }, 2000);
  }

  public async create(params: any) {
    try {
      this.docClient.put(params, function (err, data) {
        if (err) {
          return ResponseUtility.error(err)
        } else {
          return ResponseUtility.success(data)
        }
      });

      return ResponseUtility.success({})
    } catch (error) {
      return ResponseUtility.fail(error)
    }
  }


  public async get(params: any) {
    try {
      await this.docClient.get(params).promise()
        .then((result) => {
          return ResponseUtility.success(result)
        }).catch((err) => {
          return ResponseUtility.error(err)
        });

      return ResponseUtility.success({})
    } catch (error) {
      return ResponseUtility.fail(error)
    }
  }


  public async delete(params: any) {
    try {
      this.docClient.delete(params, function (err, data) {
        if (err) {
          return ResponseUtility.error(err)
        } else {
          return ResponseUtility.success(data)
        }
      });

      return ResponseUtility.success({})
    } catch (error) {
      return ResponseUtility.fail(error)
    }
  }
}

export default new DynamoUtil();