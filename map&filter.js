// Map:-- map mane eta arrayr protitu value uprot mathmatical calculation kori ek notun arrayt save kora.


// const newArr = arr.map(function(e){
//     return e + 2; //save return value in  a imaginary new array
// })
// console.log(newArr);

// Filter :- jetia ata arrayr protitu value loi goi tar jikunu kaitamn vale beleg ata notun arrayt vorabo logia hoi tetia ami Filter method use koru use koru.

// IMPORTANAT NOTE:-- Map & Filter method ot return key use koribo lagibo nohole e kam nokore

// const newarr = arr.filter(function(e){
    //     return e > 100;
    // });
    
// REDUCE METHOD :-- reduce method ot ami jikunu ata arrayk shrot kori ata value loi ahu 
    
let arr = [5, 4, 3, 2, 1];

const newarr = arr.reduce((acc, cv)=>{
    return acc +=cv;
}, 5);


console.log(newarr);

