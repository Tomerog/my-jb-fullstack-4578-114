import Axios from "axios";
import User from "../models/user/User";

class Followers {
  async getFollowers(): Promise<User[]> {
    const response = await Axios.get<User[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/allow/follows/followers`
    );
    return response.data;
  }
}

// singleton
const followers = new Followers();
export default followers;
