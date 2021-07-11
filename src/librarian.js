class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };
  greetPatron(name, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${name}!`;
    }
    return `Hello, ${name}!`;
  };
  findBook(book) {
    var genreFantasy = this.library.shelves.fantasy;
    var genreFiction = this.library.shelves.fiction;
    var genreNonFiction = this.library.shelves.nonFiction;
    var confirmationMessage = `Yes, we have ${book}`;
    for (var i = 0; i < 3; i++) {
      if (genreFantasy[i] && genreFantasy[i].title === book) {
        genreFantasy.splice(i, 1);
        return confirmationMessage;
      } else if (genreFiction[i] && genreFiction[i].title === book) {
        genreFiction.splice(i, 1);
        return confirmationMessage;
      } else if (genreNonFiction[i] && genreNonFiction[i].title === book) {
        genreNonFiction.splice(i, 1);
        return confirmationMessage;
      };
      return `Sorry, we do not have ${book}`;
    }
  };
  calculateLateFee(number) {
    var lateFee = Math.ceil(number * .25);
    return lateFee;
  }
};

module.exports = Librarian;
