import { type Timestamp } from "firebase/firestore";
import { type Collection } from "./collection";

export interface Rate extends Collection {
  rate: number;
  date: Timestamp;
}