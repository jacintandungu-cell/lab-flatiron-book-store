const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

// PSEUDOCODE: Build Flatbook Website

// START

// INPUT: bookStore object with name and array of books
// OUTPUT: Populated HTML page with bookstore name and all books displayed

// MAIN STEPS:
// ===========

// 1. SELECT THE HEADER ELEMENT
//    - Get element with id="header"
//    - Store in variable: bookStoreTitle

// 2. UPDATE THE HEADER TEXT
//    - Set bookStoreTitle.textContent = bookStore.name
//    - Result: Header now shows "Flatbooks Technical Books"

// 3. GET THE BOOK LIST CONTAINER
//    - Get element with id="book-list"
//    - Store in variable: bookList

// 4. REMOVE EXAMPLE ITEM (if exists)
//    - Find element with id="delete-this"
//    - Remove it from DOM

// 5. LOOP THROUGH EACH BOOK
//    FOR EACH book IN bookStore.books DO:
   
//       a. CREATE CONTAINER
//          - Create new <li> element
//          - Store in variable: bookContainer
      
//       b. CREATE TITLE ELEMENT
//          - Create new <h3> element
//          - Set textContent = book.title
//          - Store in variable: bookTitle
      
//       c. CREATE AUTHOR ELEMENT
//          - Create new <p> element
//          - Set textContent = book.author
//          - Store in variable: bookAuthor
      
//       d. CREATE IMAGE ELEMENT
//          - Create new <img> element
//          - Set src = book.imageUrl
//          - Set alt = book.title
//          - Store in variable: bookImage
      
//       e. BUILD THE BOOK CARD
//          - Append bookTitle TO bookContainer
//          - Append bookAuthor TO bookContainer
//          - Append bookImage TO bookContainer
      
//       f. ADD TO PAGE
//          - Append bookContainer TO bookList
   
//    END


// Task 1: Select and update the header element
const bookStoreTitle = document.getElementById('header');
bookStoreTitle.textContent = bookStore.name;

// Task 2: Get the book list container
const bookList = document.getElementById('book-list');

// Remove the example item if it exists
const deleteThis = document.getElementById('delete-this');
if (deleteThis) {
    deleteThis.remove();
}

// Task 3: Loop through each book and create DOM elements
bookStore.books.forEach(book => {
    // Create the container list item
    const bookContainer = document.createElement('li');
    
    // Create the title element
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    
    // Create the author element
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;
    
    // Create the image element
    const bookImage = document.createElement('img');
    bookImage.src = book.imageUrl;
    bookImage.alt = book.title;
    
    // Append title, author, and image to the container
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);
    
    // Append the container to the book list
    bookList.appendChild(bookContainer);
});