import AnimalService from "./animals-service.js";

const animalService = new AnimalService();
const animals = animalService.getAnimalsFromDatabase();

animals[0].numberOfLungs;
