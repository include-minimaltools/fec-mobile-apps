import { Collection } from "./collection";

export interface User extends Collection {
  name: string;
  email: string;
  image: string;
}