function book(title, author, numpages, read) {
  this.title = title;
  this.author = author;
  this.numpages = numpages;
  this.read = read;
  if (this.read == "read") {
    return;
  } else {
    this.read = "not read yet";
  }
}
book.prototype.info = function () {
  return `${this.title} by ${this.author},${this.numpages} pages,${this.read}`;
};
const bookOne = new book("shalom", "john", "200", "not read");
console.log(bookOne.info());
