import guitar from "./guitar.js";
import piano from "./piano.js";
import pianos from "./pianos.js";

const guitar1 = new guitar(`samsung`, `kiril2`, `black`, 6);
guitar1.display();

const pianos1 = new pianos(`peener`, `kiril4`, `white`, 7, 8);

pianos1.display();

pianos1.makeSound();

const piano1 = new piano(`peener`, `kiril4`, `white`, 7);

piano1.makeSound();
