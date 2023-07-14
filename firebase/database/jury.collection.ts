import { BaseService } from "./base.collection";
import type { Jury } from "../models";
import { CURRENT_EDITION } from "~/constants";

class JuryCollection extends BaseService<Jury> {
  constructor() {
    super(`Editions/${CURRENT_EDITION}/Jury`);
  }
}

export default JuryCollection;
