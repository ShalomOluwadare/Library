const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");
const bookButton = document.querySelector(".addBook");
const table = document.querySelector("table");
const submit = document.querySelector(".submit-btn");

let myLibrary = [];
function book(title, author, numpages, read) {
  this.title = title;
  this.author = author;
  this.numpages = numpages;
  this.read = read;
  if (this.read === true) {
    return (this.read = "yes");
  } else {
    this.read = "No";
  }
}
book.prototype.info = function () {
  return `${this.title} by ${this.author},${this.numpages} pages,${this.read}`;
};
function addBookToLibrary() {
  let bookName = document.getElementById("title").value;
  let bookAuthor = document.getElementById("author").value;
  let bookPages = document.getElementById("pages").value;
  let readBook = document.getElementById("read").checked;
  console.log(readBook);
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
    let cell3 = document.createElement("td");
    let cell2 = document.createElement("td");
    cell3.textContent = "Status";
    cell2.textContent = "Delete";
    row.appendChild(cell2);
    row.appendChild(cell3);
    table.appendChild(row);
    cell2.addEventListener("click", () => {
      table.removeChild(row);
      myLibrary.splice(myLibrary.indexOf(e), 1);
      console.log(myLibrary);
    });
    cell3.addEventListener("click", () => {
      e.read = myLibrary[0].read === "yes" ? "no" : "yes";
      let td = document.querySelectorAll("td");
      td.item(3).textContent = e.read;
      console.log(myLibrary[0].read);
      console.log(e.read);
      console.log(myLibrary);
    });
  });
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
closeModalBtn.addEventListener("click", closeModal);
submit.addEventListener("click", () => {
  addBookToLibrary();
  console.log(myLibrary);
  displayBook();
  closeModal();
  event.preventDefault();
});
overlay.addEventListener("click", closeModal);
bookButton.addEventListener("click", openModal);
