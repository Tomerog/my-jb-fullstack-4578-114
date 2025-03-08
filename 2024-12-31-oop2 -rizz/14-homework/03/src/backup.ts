export default class Backup<T> {
  subject: string;
  value: T;

  constructor(subject: string, value: T) {
    this.subject = subject;
    this.value = value;
  }

  display() {
    console.log(this.subject);
    console.log(this.value);
  }
}
