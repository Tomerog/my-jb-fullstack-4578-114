import instrument from "./instrument.js";

export default class drum extends instrument {
  public instrumentName: string = `drum`;
  public diameter: number;
  public constructor(
    module: string,
    maker: string,
    color: string,
    diameter: number
  ) {
    super(`drum`, module, maker, color);
  }
  public display(): void {
    super.display();
    console.log(`this instruments diameter are:${this.diameter}`);
  }
}
