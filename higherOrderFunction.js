// Jodi ata functionot aru ata function parameter hisape dia hoi ba main function tut ru ata function return kora hoi tetia tak HIGHER ORDER FUNCTION buli kuwa hoi

// EXAMPLE:--

function higherOrder() {
    return function greet() {
        console.log('good morning');
    }
}

higherOrder();
// higherOrder(()=>{
//     let a = "Durlov";
// })