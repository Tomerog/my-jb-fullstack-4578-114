import axios from "axios";
import Type from "../models/type/type";

class Types {
  async getAll(): Promise<Type[]> {
    const response = await axios<Type[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/types`
    );
    const types = response.data;
    return types;
  }
}

const typesServices = new Types();
export default typesServices;
