export default class instrument {
    constructor(instrumentName, module, maker, color) {
        this.instrumentName = instrumentName;
        this.module = module;
        this.color = color;
        this.maker = maker;
    }
    display() {
        console.log(`this instruments module is:${this.module}`);
        console.log(`this instruments maker is:${this.maker}`);
        console.log(`this instruments color is:${this.color}`);
    }
    makeSound() {
        console.log(`${this.instrumentName} is now playing...`);
    }
}
