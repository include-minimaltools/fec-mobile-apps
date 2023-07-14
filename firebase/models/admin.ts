import type { Collection } from "./collection";

export interface Admin extends Collection {
  active: boolean;
}