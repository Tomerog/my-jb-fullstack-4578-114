export default abstract class instrument {
  protected instrumentName: string;
  public module: string;
  public maker: string;
  public color: string;
  public constructor(
    instrumentName: string,
    module: string,
    maker: string,
    color: string
  ) {
    this.instrumentName = instrumentName;
    this.module = module;
    this.color = color;
    this.maker = maker;
  }
  public display() {
    console.log(`this instruments module is:${this.module}`);
    console.log(`this instruments maker is:${this.maker}`);
    console.log(`this instruments color is:${this.color}`);
  }
  public makeSound() {
    console.log(`${this.instrumentName} is now playing...`);
  }
}
