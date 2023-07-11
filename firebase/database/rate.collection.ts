import { BaseService } from "./base.collection";
import { CURRENT_EDITION } from "~/constants";
import { type Rate } from "../models";

class RateCollection extends BaseService<Rate> {
  constructor(projectId: string) {
    super(`Editions/${CURRENT_EDITION}/Projects/${projectId}/Rates`);
  }
}

export default RateCollection;
