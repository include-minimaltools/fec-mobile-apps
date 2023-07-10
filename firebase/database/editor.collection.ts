import { BaseService } from "./base.collection";
import { CURRENT_EDITION } from "~/constants";
import { type Editor } from "../models";

class EditorCollection extends BaseService<Editor> {
  constructor() {
    super(`Editions/${CURRENT_EDITION}/Editors`);
  }
}

export default EditorCollection;
