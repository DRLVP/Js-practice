const body = document.querySelector('body').innerHTML = `<h1>CALLBACK FUNCTIONS IN JAVASCRIPT</h1>`;


const calculator = (num1, num2, operation) => {
    return operation(num1, num2);
}


const add = calculator(5, 8, (num1, num2) => {
    return num1 + num2
});

// console.log(add);
//+++++++++++++++++++++ PIZZA MAKING PROCESS ++++++++++++++++++++


