import AWS from "aws-sdk"

export class Init{
  protected state: boolean

  constructor() {
    this.state = false
  }


  async newConnection(){
    AWS.config.update({
			accessKeyId: process.env.AWSaccessKeyId,
			secretAccessKey: process.env.AWSsecretAccessKey,
			region: process.env.AWSregion,
		});
  }

  statusConection(){

  }

  public async  validate_state(): Promise<boolean>{
    return this.state;
  }

  async validate_and_make_connection(): Promise<boolean> {
    this.validate_state();
    if (!this.state) await this.newConnection();
    return this.state
  }
}

const instance_aws = new Init();
export default instance_aws;
