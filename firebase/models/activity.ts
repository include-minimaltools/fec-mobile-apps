import type { Timestamp } from "firebase/firestore";
import type { Collection } from "./collection";

export interface Activity extends Collection {
  title: string;
  startTime: Timestamp;
  responsible: string;
}