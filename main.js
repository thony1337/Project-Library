const myLibrary = [];
const mainDiv = document.querySelector(".main-div");

function book(name, author, pages) {
   this.name = name;
   this.author = author;
   this.pages = pages;
   this.id = crypto.randomUUID();
}  
function addBookToLibrary(name, author, pages){
  let a =  new book(name, author, pages);
  myLibrary.push(a);
  return a;
}
function displayBook() {
 myLibrary.forEach(item => {
   console.table(item);
   let mainContentDiv = document.querySelector('.main-div');
   let content = document.createElement('div');
   
   content.id = item.id;
   content.classList.add('book');
   mainContentDiv.appendChild(content);

   let bookName = document.createElement('div');
   content.appendChild(bookName);
   bookName.textContent = "Title: " + item.name;

   let bookAuthor = document.createElement('div');
   content.appendChild(bookAuthor);
   bookAuthor.textContent = "Author: " + item.author;

   let bookPages = document.createElement('div');
   content.appendChild(bookPages);
   bookPages.textContent = "Pages: " + item.pages;

   let removeBookButton = document.createElement('button');
   content.appendChild(removeBookButton);
   removeBookButton.textContent = "Remove Book";
   removeBookButton.addEventListener('click', () => {
   let itemId = item.id;
   const index = myLibrary.findIndex(itemToRemove => itemToRemove.id === itemId);
   myLibrary.splice(index, 1);
   const element = document.getElementById(itemId);
   if (element) {
        element.remove();
    }
   console.log(myLibrary);
   console.log(index);
   console.log(item.id);
   })
 })
 }
let book1 = addBookToLibrary('Mes confitures', 'Christine Ferber', '300');
let book2 = addBookToLibrary('Call of the ktchulu', 'H.P Lovecraft', '190');
let book3 = addBookToLibrary('Flordelis a pastora do diabo', 'Ulisses Campbell', '130');
let book4 = addBookToLibrary('Elize Matsunaga', 'Ulisses Campbell', '150');
let book5 = addBookToLibrary('Learning how to learn', 'Barbara Oakley', '200');
displayBook();

let dialog = document.querySelector('dialog');
const button = document.querySelector('.button');
const form = document.querySelector('form');
let nameInput = document.querySelector('.title-input');
let authorInput = document.querySelector('.author-input');
let pagesInput = document.querySelector('.pages-input');
let output = document.querySelector('.teste2');
const confirmBtn = document.querySelector('#confirmBtn');


button.addEventListener('click', () => {
  dialog.showModal();
  dialog
})
dialog.addEventListener('close', () => {
   myLibrary.length = 0;
   addBookToLibrary(nameInput.value, authorInput.value, pagesInput.value);
   displayBook();
   console.log(dialog.returnValue);
   console.log(myLibrary);
})
confirmBtn.addEventListener('click', (event) => {
   event.preventDefault();
   dialog.close();
})