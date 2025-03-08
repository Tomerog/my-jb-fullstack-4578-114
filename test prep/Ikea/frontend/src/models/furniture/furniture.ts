import Type from "../type/type";
import Draft from "./draft";

export default interface Furniture extends Draft {
  id: string;
  type: Type;
}
