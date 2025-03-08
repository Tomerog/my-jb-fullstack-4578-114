export default class Backup {
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
    display() {
        console.log(this.subject);
        console.log(this.value);
    }
}
