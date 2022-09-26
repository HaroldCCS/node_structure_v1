export module S3Types {

  export type TypeFile = { [key: string]: IFile };

  export interface ISaveFiles {
    bucket_name: string
  }

  interface IFile {
    name: any
    data: any
    mimetype: any
  }
}