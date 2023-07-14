import { BaseService } from "./base.collection";
import type { Activity } from "../models";
import { CURRENT_EDITION } from "~/constants";

class ActivityCollection extends BaseService<Activity> {
  constructor() {
    super(`Editions/${CURRENT_EDITION}/Activities`);
  }
}

export default ActivityCollection;
