import axios from "axios";
import Draft from "../models/furniture/draft";
import Furniture from "../models/furniture/furniture";

class Furnitures {
  async getAll(): Promise<Furniture[]> {
    const response = await axios<Furniture[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/furniture`
    );
    const furniture = response.data;
    return furniture;
  }

  async add(draft: Draft): Promise<Furniture> {
    const response = await axios.post(
      `${import.meta.env.VITE_REST_SERVER_URL}/add-furniture`,
      draft
    );
    const newFurniture = response.data;
    return newFurniture;
  }
}

const furnituresServices = new Furnitures();
export default furnituresServices;
