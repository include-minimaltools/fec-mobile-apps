import {
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { BaseService } from "./base.collection";
import { User } from "../models/user.collection";

class UserCollection extends BaseService<User> {
  constructor() {
    super("Users");
  }
}

export default UserCollection;
