import { BaseService } from "./base.collection";
import { type Project } from "../models";
import { CURRENT_EDITION } from "~/constants";

class ProjectCollection extends BaseService<Project> {
  constructor() {
    super(`Editions/${CURRENT_EDITION}/Projects`);
  }
}

export default ProjectCollection;
