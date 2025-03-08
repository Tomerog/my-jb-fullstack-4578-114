export default class Animal {
    constructor(numberOfLungs) {
        this.numberOfLungs = numberOfLungs;
    }
    breath() {
        console.log(`breathing with my ${this.numberOfLungs} lungs`);
    }
}
