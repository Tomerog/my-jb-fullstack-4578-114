import Backup from "./backup.js";

class kitten {
  name: string;
  age: number;
  color: string;
}
const kiriscus = new kitten();
kiriscus.age = 3;
kiriscus.name = `kiriscus`;
kiriscus.color = `black`;
const test1 = new Backup(`test1`, `kiril`);
const test2 = new Backup(`test2`, 2);
const test3 = new Backup(`test3`, true);
const test4 = new Backup(`test4`, Date);
const test5 = new Backup(`test5`, kiriscus);

test1.display();
test2.display();
test3.display();
test4.display();
test5.display();
