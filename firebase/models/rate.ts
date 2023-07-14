import { type Timestamp } from "firebase/firestore";
import { type Collection } from "./collection";

export type Criteria = "funcionality" | "complexity" | "innovation" | "userExperience" | "presentation";

export interface Rate extends Collection, Record<Criteria, number> {
  date: Timestamp;
}

export const EMPTY_RATE: Record<Criteria, number> = {
  complexity: 0,
  innovation: 0,
  funcionality: 0,
  presentation: 0,
  userExperience: 0
}