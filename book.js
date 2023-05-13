const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");
const bookButton = document.querySelector(".addBook");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const row1 = document.querySelector("tr");
const submit = document.querySelector(".submit-btn");
let myLibrary = [];

class library {
  constructor(title, author, numpages, read) {
    this.title = title;
    this.author = author;
    this.numpages = numpages;
    this.read = read;
    this.values = { title, author, numpages, read };
    if (this.read === true) {
      return (this.read = "yes");
    } else {
      this.read = "No";
    }
  }

  displayBook = (e) => {
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
    tbody.appendChild(row);
    cell2.addEventListener("click", () => {
      this.deleteRow(e);
    });
    cell3.addEventListener("click", () => {
      this.changeRead(e);
    });
  };
  changeRead = (e) => {
    e.read = e.read === "yes" ? "no" : "yes";
    myLibrary.forEach(() => {
      tbody.removeChild(tbody.lastChild);
    });
    myLibrary.forEach((i) => {
      this.displayBook(i);
    });
  };
  deleteRow = (e) => {
    myLibrary.forEach(() => {
      tbody.removeChild(tbody.lastChild);
    });
    myLibrary.splice(myLibrary.indexOf(e), 1);
    myLibrary.forEach((i) => {
      this.displayBook(i);
    });
  };
}

function addBookToLibrary() {
  let bookName = document.getElementById("title").value;
  let bookAuthor = document.getElementById("author").value;
  let bookPages = document.getElementById("pages").value;
  let readBook = document.getElementById("read").checked;
  let newBook = new library(bookName, bookAuthor, bookPages, readBook);
  myLibrary.push(newBook.values);
  console.log(myLibrary);
  newBook.displayBook(myLibrary[myLibrary.length - 1]);
}
submit.addEventListener("click", () => {
  addBookToLibrary();
  closeModal();
  event.preventDefault();
});
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
bookButton.addEventListener("click", openModal);
