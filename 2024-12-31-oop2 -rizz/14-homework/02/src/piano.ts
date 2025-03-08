import instrument from "./instrument.js";
import Tester from "./tester.js";

export default class piano extends instrument implements Tester {
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
  test() {
    console.log(`testing a piano`);
  }
  tune() {
    console.log(`tuning a piano`);
  }
}
