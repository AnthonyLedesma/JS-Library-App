
let myLibrary = [];

//let bookDiv = document.getElementById('books');

let formTitle = document.getElementById('bookTitle');
let formAuthor = document.getElementById('bookAuthor');
let formPages = document.getElementById('bookPages');
let formBeenRead = document.getElementById('bookSelect');

let iterateSteps = 0;
let iterateDivs = 0;

let masterBooks = document.getElementById('masterBooks');

function Book(title, author, pages, hasBeenRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.beenRead = hasBeenRead ? "I have read this book." : "I have not read this book.";
    this.changeReadStatus = function changeReadStatus() {
        if (this.beenRead === "I have read this book.") {
            this.beenRead = "I have not read this book.";
         } else {
            this.beenRead = "I have read this book.";
         }  
    }
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
    let classForCardDivs = "uk-card uk-card-primary uk-card-hover uk-card-body uk-light uk-margin";
    let classForMasterDivs = "uk-grid-small uk-child-width-expand@s uk-text-center";


    iterateSteps = 0;
    iterateDivs = 0;
    //The following is descruction of DOM Nodes
    while (masterBooks.firstChild) {
        masterBooks.removeChild(masterBooks.firstChild);
    }
    let firstEmptyDiv = document.createElement('div');
    firstEmptyDiv.setAttribute('id', 0);
    firstEmptyDiv.setAttribute('style', 'display: flex;');
    firstEmptyDiv.setAttribute('class', classForMasterDivs);
    masterBooks.appendChild(firstEmptyDiv);

    //The following is creation of DOM Nodes
    myLibrary.forEach(function(element){
        if (iterateSteps >= 5) {
            iterateSteps = 0;
            iterateDivs++;
            let div = document.createElement('div');
            div.setAttribute('id', iterateDivs);
            div.setAttribute('style','display: flex;');
            div.setAttribute('class', classForMasterDivs);
            masterBooks.appendChild(div);
        } else {
            iterateSteps++;
        }

        let div = document.createElement('div');
        div.setAttribute('class', classForCardDivs);
        div.setAttribute('id', iterateDivs);

        let buttonBanner = document.createElement('div');
        buttonBanner.setAttribute('class', 'uk-card-badge uk-label');
        if (element.beenRead === "I have read this book.") {buttonBanner.innerText = "Read";} else {buttonBanner.innerText = "!Read";}
        buttonBanner.addEventListener('click', function() {
            element.changeReadStatus();
            if (element.beenRead === "I have read this book.") {buttonBanner.innerText = "Read";}  else {buttonBanner.innerText = "!Read";}
            p.innerText= `Written by ${element.author}, with a length of ${element.pages} pages, ${element.beenRead}`;
        })

        


        let h3 = document.createElement('h3');
        h3.setAttribute('class', 'uk-card-title');
        h3.innerText = `${element.title}`;

        let p = document.createElement('p');
        p.innerText= `Written by ${element.author}, with a length of ${element.pages} pages, ${element.beenRead}`;
        div.appendChild(h3);
        div.appendChild(buttonBanner);
        div.appendChild(p);

        let emptyDivWrapperForCards = document.createElement('div');
        emptyDivWrapperForCards.appendChild(div);
        document.getElementById(iterateDivs).appendChild(emptyDivWrapperForCards);
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


