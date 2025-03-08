import Axios from "axios";
import User from "../models/user/User";

class Following {
  async getFollowing(): Promise<User[]> {
    const response = await Axios.get<User[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/allow/follows/following`
    );
    return response.data;
  }
}

// singleton
const following = new Following();
export default following;
