// Declare singleton object ||| singleton Object Declare korile ami parameter hisape null  dibo lagibo nohole error ahibo

// const myObj = Object.create(null);
// myObj.name = 'Durlov';
// myObj.id = 1;
// myObj.isLoggedIn = true;

// console.log(myObj);


const books = [{
    name:"Dohon",
    genere:"drama, college",
    author: "Ranju Hazarika",
    ISBN:'SSS3850'
},
{
    name:"Akhimot jar heral hima",
    genere:"historic",
    author: "Kanchan baruah",
    ISBN:'SSS3851'
},
{
    name:"Bhoot Bhoutik Bhoi",
    genere:"suspence",
    author: "Ranju Hazarika",
    ISBN:'SSS3852'
},
{
    name:"Nahoror Niribili sa",
    genere:"Darama",
    author: "Anuradha sharma pujari",
    ISBN:'SSS3853'
}
]


const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    const input = document.querySelector('input')
    const bookName = input.value.trim();
    if (bookName === books.filter((book)=>book.name)) {
        console.log("your book is available", bookName);
    }
});

// function searchBook(bookName) {
//     const book = books.filter(book=> book.name);
//     if (bookName === book) {
//         console.log(bookName);
//     }
// }

// searchBook("Dohon");

// console.log(Object.entries(books));