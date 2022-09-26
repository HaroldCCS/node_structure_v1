import { connect } from "mongoose";
import InterfaceDatabase from "./interfaceDatabase";

class Mongo extends InterfaceDatabase {

  constructor() {
    super();
  }

  async connect(): Promise<boolean>  {
    try {
      await connect(process.env.DB_MONGO_CONN || "");
      this.state = true;
      console.log("Database Mongo online");
    } catch (error: any) {
      this.state = false;
      console.error("Error connection to MongoDB")
    }
    return this.state
  }

  async validate_state(): Promise<boolean> {
    //TODO Validacion
    return this.state
  }
}

const MongoInstance = new Mongo();

export default MongoInstance;