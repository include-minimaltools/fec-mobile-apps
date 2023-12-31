import { type Timestamp } from "firebase/firestore";
import { type Collection } from "./collection";



export type Testimonial = {
  author: string;
  description: string;
  imageUrl: string;
}

export type Host = {
  name: string,
  position: string,
}

export type EventSchedule = {
  subject: string,
  host: Host,
  time: string
}

export type Judge = {
  name: string;
  position: string;
}

export type EditionStatus = "finished" | "in progress" | "pre";

export interface Edition extends Collection {
  status: EditionStatus;
  testimonials: Testimonial[];
  eventSchedule: EventSchedule[];
  eventDate: Timestamp;
  judgesPanel: Judge[];
  locationDescription?: string;
  videoData?: {
    title: string;
    description: string;
    videoUrl: string
  }
}