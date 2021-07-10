function shelfBook(book, shelf) {
  if (shelf.length <= 2) {
  shelf.unshift(book);
}
};

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1);
    }
  }
};

function listTitles(shelf) {
  var titles = [];
  for (var i = shelf.length - 1; i >= 0; i--) {
    titles.unshift(shelf[i].title);
  }
  return titles.join(', ');
};

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(title)) {
      return true;
    }
  }
  return false;
};


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
