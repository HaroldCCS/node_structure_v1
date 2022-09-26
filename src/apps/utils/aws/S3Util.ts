import AWS from "aws-sdk"
import ResponseUtility from "../../../utils/responseUtility";

class S3Util {
  private s3 = new AWS.S3({ apiVersion: '2006-03-01' });

  constructor() {
    setTimeout(() => {
      this.s3 = new AWS.S3({ apiVersion: '2006-03-01' });
    }, 2000);
  }


  public async save_files(params: any) {
    try {
      this.s3.upload(params, function (err: any, data: any) {
        if (err) return ResponseUtility.error(err);
        return ResponseUtility.success({ location: data.Location })
      });

      return ResponseUtility.success({})
    } catch (error) {
      return ResponseUtility.fail(error)
    }
  }


  public async get_buckets() {
    try {
      this.s3.listBuckets(function (err, data) {
        if (err) return ResponseUtility.error(err);
        return ResponseUtility.success({buckets: data.Buckets})
      });

      return ResponseUtility.success({})
    } catch (error) {
      return ResponseUtility.fail(error)
    }
  }
}

export default new S3Util();