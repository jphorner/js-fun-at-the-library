function createTitle(bookTitle) {
  return `The ${bookTitle}`;
};

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character;
};

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
    return;
  } else {
    reviews.push(review);
}
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

function writeBook(bookTitle, bookCharacter, genre) {
  var bookDetails = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
  return bookDetails;
};

function editBook(book) {
  book.pageCount = book.pageCount * .75;
  return book;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
