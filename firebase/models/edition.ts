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


export interface Edition extends Collection {
  testimonials: Testimonial[];
  eventSchedule: EventSchedule[];
  eventDate: Timestamp;
  judgesPanel: Judge[];
  videoData?: {
    title: string;
    description: string;
    videoUrl: string
  }
}