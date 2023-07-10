import { BaseService } from "./base.collection";
import { type Edition } from "../models";
import { CURRENT_EDITION } from "~/constants";

class EditionCollection extends BaseService<Edition> {
  constructor() {
    super("Editions");
  }

  async getCurrentEdition() {
    if (CURRENT_EDITION)
      return await this.get(CURRENT_EDITION);
  }
}

export default EditionCollection;
