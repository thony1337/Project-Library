const myLibrary = [];

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
 })
 }
let book1 = addBookToLibrary('Mes confitures', 'Christine Ferber', '300');
let book2 = addBookToLibrary('Call of the ktchulu', 'H.P Lovecraft', '190');
let book3 = addBookToLibrary('Flordelis a pastora do diabo', 'Ulisses Campbell', '130');
let book4 = addBookToLibrary('Elize Matsunaga', 'Ulisses Campbell', '150');
let book5 = addBookToLibrary('Learning how to learn', 'Barbara Oakley', '200');
displayBook();