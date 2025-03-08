import piano from "./piano.js";

export default class pianos extends piano {
  public length: number;
  public constructor(
    module: string,
    maker: string,
    color: string,
    keys: number,
    length: number
  ) {
    super(module, maker, color, keys);
    this.length = length;
    this.instrumentName = `pianos`;
  }
  public display(): void {
    super.display();
    console.log(`this instruments length is:${this.length}`);
  }
}
