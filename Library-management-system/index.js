// get element from the DOM
const bookName = document.querySelector('#book-name');
const bookAuthor = document.querySelector('#book-author');
const bookGenere = document.querySelector('#genere');
const btn = document.querySelector('#addBook');
const card = document.querySelector('.card');
const message = document.querySelector('.message');


const bookRef = function storeBook(bookname, bookauthor, bookgenere) {
   const books = [{
      name: `${bookname}`,
      author: `${bookauthor}`,
      genere: `${bookgenere}`,
      ISBN: Math.ceil(Math.random()*100 + 10)
   }]

   return books;
}

function addBook() {
   const book = bookName.value.trim();
   const author = bookAuthor.value.trim();
   const genere = bookGenere.value;


   // store books
   storeBook(book, author, genere);

   const h2= document.createElement('h2');
   const h4 = document.createElement('h4');
   const span = document.createElement('span');

   if (book === '' || author === '' || genere === 'default') {
      message.textContent = 'Please fill the input';
   }else{
      h2.textContent = `Book name: ${book}`;
      h4.textContent = `author: ${author}`;
      span.textContent = `genere: ${genere}`;
      card.appendChild(h2);
      card.appendChild(h4);
      card.appendChild(span);
   }
}

btn.addEventListener('click', ()=>{
   addBook();
   bookName.value = '';
   bookAuthor.value = '';
   bookGenere.value = 'default';
   message.style.display = 'none';
});