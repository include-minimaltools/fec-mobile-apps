import { BaseService } from "./base.collection";
import { CURRENT_EDITION } from "~/constants";
import { type Admin } from "../models";

class AdminCollection extends BaseService<Admin> {
  constructor() {
    super(`Editions/${CURRENT_EDITION}/Admins`);
  }
}

export default AdminCollection;
