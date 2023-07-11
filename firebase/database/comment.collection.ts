import { BaseService } from "./base.collection";
import { type Comment } from "../models";
import { CURRENT_EDITION } from "~/constants";

class CommentCollection extends BaseService<Comment> {
  constructor(projectId: string) {
    super(`Editions/${CURRENT_EDITION}/Projects/${projectId}/Comments`);
  }
}

export default CommentCollection;
