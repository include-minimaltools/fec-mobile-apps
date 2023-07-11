import { type Timestamp } from "firebase/firestore";
import { type Collection } from "./collection";

export interface Comment extends Collection {
  author: string;
  comment: string;
  avatarUrl: string;
  date: Timestamp;
}