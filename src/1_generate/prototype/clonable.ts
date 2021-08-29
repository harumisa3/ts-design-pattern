export interface Clonable {
  createClone: () => Clonable;
}