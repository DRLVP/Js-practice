// No-1: Check if a number is odd or even in JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("numberInput");
    const checkButton = document.getElementById("checkButton");
    const resultDiv = document.getElementById("result");

    checkButton.addEventListener('click', () => {
        const enteredNumber = parseInt(numberInput.value);
        if (enteredNumber % 2 === 0) {
            resultDiv.innerHTML = `${enteredNumber} is even number`

        } else if (numberInput % 2 !== 0) {
            resultDiv.innerHTML = `${enteredNumber} is odd number`

        } else {
            alert(`Please enter the valid number`);
        }
    })

});


// No-2: Find the largest of three number;
/*
const findLargestNum = () => {
    let num1 = parseInt(prompt("Enter First Number"));
    let num2 = parseInt(prompt("Enter First Number"));
    let num3 = parseInt(prompt("Enter First Number"));

    if (num1 > num2 && num1 > num3) {
        alert(`${num1} is the largest number`);
    } else if (num2 > num3) {
        alert(`${num2} is the largest number`);
    } else {
        alert(`${num3} is the largest number`);
    }

}

findLargestNum();
*/

// No-3: Perform arithmetic operations on two numbers and check the result is even or odd;
/*
const sumOfTwoNum = () => {
    const num1 = parseInt(prompt(`Please enter your first number`));
    const num2 = parseInt(prompt(`Please enter your second number`));

    if ((num1 + num2) % 2 === 0) {
        alert(`the sum of ${num1} and ${num2} result is ${num1 + num2} even number`);
    } else {
        alert(`The sum of ${num1} and ${num2} result is ${num1 + num2} odd number`);
    }

}

sumOfTwoNum();

*/

// No-4: Find check if a year is leap year or not;
/*
const checkLeapYear = () => {
    const year = Number.parseInt(prompt(`enter a year`));
    if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
        alert(`${year} is leap year`);
    } else {
        alert(`${year} isn't leap year`)
    }
}

checkLeapYear();
*/

// No-5:Find the grade for your input marks;
/*
const findGrade = () => {
    const mark = Number.parseInt && Number.parseFloat(prompt('enter your mark'));
    if ((mark >= 90) && (mark <= 100)) {
        alert(`your grade is A++`);
    } else if ((mark >= 80) && (mark <= 90)) {
        alert(`Your Grade is A`);
    } else if ((mark >= 70) && (mark <= 80)) {
        alert('Your Grade is B');
    } else if ((mark >= 60) && (mark <= 70)) {
        alert('Your Grade is C');
    } else if ((mark >= 50) && (mark <= 60)) {
        alert("Your Grade is D");
    } else if ((mark >= 40) && (mark <= 50)) {
        alert("Your Grade is E");
    } else {
        alert("You are Fail");
    }
}

findGrade();
*/

// No-6: