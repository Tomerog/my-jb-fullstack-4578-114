import instrument from "./instrument.js";
export default class drum extends instrument {
    constructor(module, maker, color, diameter) {
        super(`drum`, module, maker, color);
        this.instrumentName = `drum`;
    }
    display() {
        super.display();
        console.log(`this instruments diameter are:${this.diameter}`);
    }
}
