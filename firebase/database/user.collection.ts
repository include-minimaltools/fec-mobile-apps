import { BaseService } from "./base.collection";
import { User } from "../models/user";
import { CURRENT_EDITION } from "~/constants";

class UserCollection extends BaseService<User> {
  constructor() {
    super(`Editions/${CURRENT_EDITION}/Users`);
  }
}

export default UserCollection;
