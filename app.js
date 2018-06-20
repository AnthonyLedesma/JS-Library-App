
let myLibrary = [];

let bookDiv = document.getElementById('books');

let formTitle = document.getElementById('bookTitle');
let formAuthor = document.getElementById('bookAuthor');
let formPages = document.getElementById('bookPages');
let formBeenRead = document.getElementById('bookSelect');

function Book(title, author, pages, hasBeenRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.beenRead = hasBeenRead ? "I have read this book." : "I have not read this book.";
    }

let WarAndPeace = new Book('War and Peace', 'Leo Tolstoy', 1225, true);
myLibrary.push(WarAndPeace);

document.getElementById('submitBookForm').addEventListener('click',function() {
    addBookToLibrary();
})

document.getElementById('newBookButton').addEventListener('click', function() {
    $('#formHide').toggle();
    $('#newBookButton').hide();
})

function addBookToLibrary() {

    if (checkForm() === true) {
        let bookObj = new Book(formTitle.value, formAuthor.value, formPages.value, formBeenRead.value);
        myLibrary.push(bookObj);
        render(myLibrary);
        $('#newBookButton').show();
    } else {
        console.log(checkForm());
    }
}

function render(myLibrary) {
    myLibrary.forEach(function(element){
        let p = document.createElement('p');
        p.innerText= `${element.title}  by ${element.author}, with a length of ${element.pages} pages, ${element.beenRead}`;
        bookDiv.appendChild(p);
    })
    $('#formHide').toggle();
}

function checkForm() {
    if (typeof formTitle.value !== 'string') {return "Book Title Must Be String";}
    else if (formTitle.value === '') {return "Book Title Must Not Be Empty";}
    else if (typeof formAuthor.value !== 'string') {return "Book Author Must Be String";}
    else if (formAuthor.value === '') {return "Book Author Must Not Be Empty";}
    else if (formPages.value === '') {return "Book Pages Must be a Number";}
    else if (formBeenRead.value === 'default') {return "Must Select Book-Is-Read Status";}
    else {return true;}
}

// function checkObject(obj) {
//     console.log(obj.formTitle);
//     if (typeof obj.formTitle !== "string") return false;
//     if (typeof obj.formAuthor !== "String") return false;
//     if (typeof obj.formPages !== "Number") return false;
//     if (obj.formBeenRead === 'default') return false;
//     return true;
// }

