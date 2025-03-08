import instrument from "./instrument.js";

export default class piano extends instrument {
  public keys: number;
  public constructor(
    module: string,
    maker: string,
    color: string,
    keys: number
  ) {
    super("piano", module, maker, color);
    this.keys = keys;
  }
  public display(): void {
    super.display();
    console.log(`this instruments keys are:${this.keys}`);
  }
}
