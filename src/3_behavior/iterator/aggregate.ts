import { MyIterator } from "./myIterator";

export interface Aggregate {
  iterator(): MyIterator;
}