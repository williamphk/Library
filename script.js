const bookContainer = document.getElementById("book-container");

function Book(title, author, page) {
  this.title = title;
  this.author = author;
  this.page = page;
}

const getBookFromInput = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const page = document.getElementById("page").value;
  return new Book(title, author, page);
};

function addBookToLibrary() {
  showForm();
  const nextBookXL = document.createElement("div");
  nextBookXL.classList.add("book-XL");
  bookContainer.insertBefore(
    nextBookXL,
    bookContainer.lastChild.previousElementSibling.previousElementSibling
  );
  const nextBook = document.createElement("div");
  nextBook.classList.add("book");
  const randomColor = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  nextBook.style.setProperty("background-color", randomColor);
  nextBookXL.appendChild(nextBook);
  const newBook = getBookFromInput();
  let title = document.createElement("p");
  let author = document.createElement("p");
  let page = document.createElement("p");
  title.classList.add("title");
  author.classList.add("author");
  page.classList.add("page");
  nextBook.appendChild(title);
  nextBook.appendChild(author);
  nextBook.appendChild(page);
  title.textContent = newBook.title;
  author.textContent = `Written by: ${newBook.author}`;
  page.textContent = `Number of pages: ${newBook.page}`;
}

function showForm() {
  const hide = document.getElementById("form");
  hide.classList.toggle("hide");
}
