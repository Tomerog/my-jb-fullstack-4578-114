import instrument from "./instrument.js";
export default class piano extends instrument {
    constructor(module, maker, color, keys) {
        super("piano", module, maker, color);
        this.keys = keys;
    }
    display() {
        super.display();
        console.log(`this instruments keys are:${this.keys}`);
    }
}
