const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const bookButton = document.querySelector(".addBook");
const table = document.querySelector("table");
let myLibrary = [];
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
function addBookToLibrary() {
  let bookName = prompt("Book Title:");
  let bookAuthor = prompt("Book Author:");
  let bookPages = prompt("Number of pages:");
  let readBook = prompt("Have You Read Book: ");
  let newBook = new book(bookName, bookAuthor, bookPages, readBook);
  myLibrary.push(newBook);
}

function displayBook() {
  myLibrary.forEach((e) => {
    let row = document.createElement("tr");
    Object.values(e).forEach((text) => {
      let cell = document.createElement("td");
      cell.textContent = text;
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
}
bookButton.addEventListener("click", () => {
  addBookToLibrary();
  console.log(myLibrary[0]);
  console.log(myLibrary[0].title);
  displayBook();
});
