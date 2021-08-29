import { Book } from "./book";
import { BookShelf } from "./bookShelf";
import { MyIterator } from "./myIterator";

export class BookShelfIterator implements MyIterator {
  private bookShelf: BookShelf;
  private index: number;

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  hasNext(): boolean {
    if (this.index < this.bookShelf.getLength()) {
      return true;
    }
    return false;
  }

  next(): Book {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}