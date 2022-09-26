import { Application } from "express";


import ReadFile from "./ReadFile";
import DefaultConfig from "./application";
import instance_aws from "../apps/utils/aws/init";

export default function init(_app: Application): void {
  new ReadFile(_app) as any
  new DefaultConfig(_app) as any
  instance_aws.validate_and_make_connection()
}