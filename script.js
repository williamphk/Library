let myLibrary = [];
let bookID = 0;

//Class
class Book {
  constructor(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
  }
}

//create book object
function getBookFromInput() {
  let book = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("page").value
  );
  myLibrary.push(book);
}

function addBookToLibrary() {
  toggleForm();
  //create new book background
  const bookContainer = document.getElementById("book-container");
  const nextBookXL = document.createElement("div");
  nextBookXL.classList.add("book-XL");
  bookContainer.insertBefore(
    nextBookXL,
    bookContainer.lastChild.previousElementSibling.previousElementSibling
  );
  //create new book container
  const nextBook = document.createElement("div");
  nextBook.classList.add("book");
  const randomColor = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  nextBook.style.setProperty("background-color", randomColor);
  nextBookXL.appendChild(nextBook);
  //create book content container
  getBookFromInput();
  let title = document.createElement("p");
  let author = document.createElement("p");
  let page = document.createElement("p");
  title.classList.add("title");
  author.classList.add("author");
  page.classList.add("page");
  nextBook.appendChild(title);
  nextBook.appendChild(author);
  nextBook.appendChild(page);
  //get book content from myLibrary
  title.textContent = myLibrary[bookID]["title"];
  author.textContent = `Written by: ${myLibrary[bookID]["author"]}`;
  page.textContent = `Number of pages: ${myLibrary[bookID]["page"]}`;
  //create remove button
  let close = document.createElement("button");
  nextBook.appendChild(close);
  close.innerHTML = "Remove";
  close.setAttribute("id", bookID);
  close.onclick = function () {
    nextBookXL.remove();
  };
  bookID++;
}

function toggleForm() {
  const toggle = document.getElementById("form");
  toggle.classList.toggle("hide");
}
