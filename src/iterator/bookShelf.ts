import { Aggregate } from "./aggregate";
import { Book } from "./book";
import { BookShelfIterator } from "./bookShelfIterator";

export class BookShelf implements Aggregate {
  private books: Book[];
  private last: number = 0;
  constructor() {
    this.books = [];
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }

  appendBook(book: Book) {
    this.books[this.last] = book;
    this.last++;
  }

  getLength(): number {
    return this.last;
  }

  iterator() {
    return new BookShelfIterator(this);
  }
}