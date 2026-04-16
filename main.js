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

