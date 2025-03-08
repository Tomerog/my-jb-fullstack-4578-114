import instrument from "./instrument.js";
export default class guitar extends instrument {
    constructor(module, maker, color, strings) {
        super(`guitar`, module, maker, color);
        this.strings = strings;
    }
    display() {
        super.display();
        console.log(`this instruments strings are:${this.strings}`);
    }
}
