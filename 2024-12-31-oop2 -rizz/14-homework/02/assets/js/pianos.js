import piano from "./piano.js";
export default class pianos extends piano {
    constructor(module, maker, color, keys, length) {
        super(module, maker, color, keys);
        this.length = length;
        this.instrumentName = `pianos`;
    }
    display() {
        super.display();
        console.log(`this instruments length is:${this.length}`);
    }
}
