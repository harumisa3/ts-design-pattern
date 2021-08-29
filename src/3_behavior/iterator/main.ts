import { Book } from "./book";
import { BookShelf } from "./bookShelf";

class Main {
  main() {
    const bookShelf = new BookShelf();
    bookShelf.appendBook(new Book("Alpha"));
    bookShelf.appendBook(new Book("Barvo"));
    bookShelf.appendBook(new Book("Charlie"));
    bookShelf.appendBook(new Book("Delta"));
    const iterator = bookShelf.iterator();

    while(iterator.hasNext()) {
      console.log(iterator.next().getName());
    }
  }
}

const main = new Main();
main.main();