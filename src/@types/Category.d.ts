import { tags } from "./Tags";

export type Tag = typeof tags[number];

export interface Category {
  id: string;
  name: Tag;
}
