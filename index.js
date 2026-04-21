const books = [
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"
  },
  {
    title: "HTML and CSS: Design and Build Websites",
    author: "Jon Duckett",
    image: "https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    image: "https://images-na.ssl-images-amazon.com/images/I/81bXtg+4k-L.jpg"
  }
];

const bookList = document.getElementById("book-list");

books.forEach(book => {
  const li = document.createElement("li");

  const title = document.createElement("h2");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = book.author;

  const img = document.createElement("img");
  img.src = book.image;              
  img.alt = book.title;

  li.appendChild(title);
  li.appendChild(author);
  li.appendChild(img);

  bookList.appendChild(li);
});
