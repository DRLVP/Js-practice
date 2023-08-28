// Q no 1: Write a program that prints the numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

/*
document.addEventListener('DOMContentLoaded', function () {
    const num = document.getElementById('numberInput');
    const checkBtn = document.getElementById('checkButton');
    const result = document.getElementById('result');

    checkBtn.addEventListener('click', function () {
        const enteredNum = Number.parseInt(num.value);
        if (enteredNum % 3 && enteredNum % 5 === 0) {
            result.innerHTML = `${enteredNum} is FizzBuzz`;
        }
        else if (enteredNum % 5 === 0) {
            result.innerHTML = `${enteredNum} is buzz`;
        }
        else if (enteredNum % 3 === 0) {
            result.innerHTML = `${enteredNum} is fizz`;
        }
        else {
            result.innerHTML = `${enteredNum} is not a fizzBuzz number`;
        }

    });
});
*/


// Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backward as forward), and false otherwise.

document.getElementById('checkButton').addEventListener('click', function () {
    const inputElement = document.getElementById('stringInput');
    const resultElement = document.getElementById('result');

    const inputText = inputElement.value;
    const isPalin = isPalindrome(inputText);

    resultElement.textContent = isPalin ? "It's a palindrome!" : "It's not a palindrome.";
});

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}