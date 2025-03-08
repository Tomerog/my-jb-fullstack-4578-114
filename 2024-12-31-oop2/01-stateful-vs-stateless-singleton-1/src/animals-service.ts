import Animal from "./animal.js";

export default class AnimalService {
  getAnimalsFromDatabase(): Animal[] {
    // ... fetches animals from database
    return [new Animal(2), new Animal(4), new Animal(6)];
  }
}
