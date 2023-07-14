import { type Timestamp } from "firebase/firestore";
import { type Collection } from "./collection";

export type Criteria = "funcionality" | "complexity" | "innovation" | "userExperience" | "presentation";

export type CriteriaWithTitle = {
  title: string;
  criteria: Criteria
}

export const CRITERIA_WITH_TITLE: CriteriaWithTitle[] = [
  {
    title: "Complejidad",
    criteria: 'complexity',
  },
  {
    title: "Funcionalidad",
    criteria: 'funcionality'
  },
  {
    title: "Innovación",
    criteria: 'innovation',
  },
  {
    title: "Presentación",
    criteria: 'presentation',
  },
  {
    title: "UI/UX",
    criteria: 'userExperience',
  }
]

export interface Rate extends Collection, Record<Criteria, number> {
  date: Timestamp;
  projectId: string;
  email: string;
}

export const EMPTY_RATE: Record<Criteria, number> = {
  complexity: 0,
  innovation: 0,
  funcionality: 0,
  presentation: 0,
  userExperience: 0
}