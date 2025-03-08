import instrument from "./instrument.js";

export default class guitar extends instrument {
  public strings: number;
  public constructor(
    module: string,
    maker: string,
    color: string,
    strings: number
  ) {
    super(`guitar`, module, maker, color);
    this.strings = strings;
  }

  public display(): void {
    super.display();
    console.log(`this instruments strings are:${this.strings}`);
  }
}
