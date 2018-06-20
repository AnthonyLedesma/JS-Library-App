
let myLibrary = [];

let bookDiv = document.getElementById('books');

function Book(title, author, pages, hasBeenRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.beenRead = hasBeenRead ? "I have read this book." : "I have not read this book.";
    }

let WarAndPeace = new Book('War and Peace', 'Leo Tolstoy', 1225, true);

document.getElementById('submitBookForm').addEventListener('click',function() {
    myLibrary.push(WarAndPeace);
    console.log(myLibrary);
    render(myLibrary);
})

function addBookToLibrary() {
    
}

function render(myLibrary) {
    let p = document.createElement('p');
    myLibrary.forEach(function(element, index, arr){
        p.innerText= `${element.title}  by ${element.author}, with a length of ${element.pages} pages, ${element.beenRead}`;
        bookDiv.appendChild(p);
    })
}