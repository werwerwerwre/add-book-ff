// Імітація бази даних
let books = JSON.parse(localStorage.getItem("books")) || [];

// Відображення списку книг на головній сторінці
if (document.getElementById("book-list")) {
  const bookList = document.getElementById("book-list");
  books.forEach((book, index) => {
    const bookItem = document.createElement("div");
    bookItem.className = "book-item";
    bookItem.textContent = book.title;
    bookItem.onclick = () => {
      localStorage.setItem("currentBook", JSON.stringify(book));
      window.location.href = "book-details.html";
    };
    bookList.appendChild(bookItem);
  });
}

// Додавання книги
if (document.getElementById("book-form")) {
  document.getElementById("book-form").onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById("book-title").value;
    const content = document.getElementById("book-content").value;
    books.push({ title, content });
    localStorage.setItem("books", JSON.stringify(books));
    window.location.href = "index.html";
  };
}

// Відображення книги на сторінці деталей
if (document.getElementById("book-title") && document.getElementById("book-content")) {
  const currentBook = JSON.parse(localStorage.getItem("currentBook"));
  document.getElementById("book-title").textContent = currentBook.title;
  document.getElementById("book-content").textContent = currentBook.content;
}
