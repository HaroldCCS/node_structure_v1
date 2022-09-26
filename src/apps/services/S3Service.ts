import ResponseUtility from '../../utils/responseUtility';
import { S3Types } from '../types/S3Types';
import S3Util from "../utils/aws/S3Util";


class S3Service {
  constructor() {}


  public async save_files(_params: S3Types.ISaveFiles, _files: S3Types.TypeFile) {
    try {
      //@INFO Bucket de preba: pruebanode
      let uploadParams = { Bucket: _params.bucket_name, Key: '', Body: '', ContentType: '' };

      if (!!!_files) return ResponseUtility.error('Files not found')

      let resposes: any[] = []
      let files_key = Object.keys(_files)
      for (let _clave of files_key) {
        uploadParams.Key = _files[_clave].name
        uploadParams.Body = _files[_clave].data
        uploadParams.ContentType = _files[_clave].mimetype

        resposes.push(await S3Util.save_files(uploadParams))
      }

      return ResponseUtility.success({resposes})
    } catch (error) {
      return ResponseUtility.fail(error)
    }
  }


  public async get_buckets() {
    try {
      return await S3Util.get_buckets()
    } catch (error) {
      return ResponseUtility.fail(error)
    }
  }
}

export default new S3Service();