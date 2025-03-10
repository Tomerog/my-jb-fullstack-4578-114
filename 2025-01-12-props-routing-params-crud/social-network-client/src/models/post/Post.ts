import User from "../user/User";
import Comment from "../comment/Comment";
import PostDraft from "./PostDraft";

export default interface Post extends PostDraft {
  id: string;
  userId: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  comments: Comment[];
}
