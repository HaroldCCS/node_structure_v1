export default abstract class InterfaceDatabase {
  protected state: boolean

  constructor() {
    this.state = false
  }


  abstract connect(): Promise<boolean>

  abstract validate_state(): Promise<boolean>

  async validate_and_make_connection(): Promise<boolean> {
    this.validate_state();
    if (!this.state) await this.connect();
    return this.state
  }

}