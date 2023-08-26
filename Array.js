const myArr = [2, 5, 6, 12, 25];
// // console.log(typeof myArr, myArr);
// // console.log(myArr.slice(-1));
// // console.log(myArr);
// // console.log(myArr.splice(1, 3));
// // console.log(myArr);

// const arr = new Array('god', 'oh', 'my');
// const newArr = arr.concat(myArr);
// console.log(newArr);
// console.log(myArr);
// myArr.push(5, 9, 3, 1, ['hello', 'wooo']);
// console.log(myArr);
const arr = new Array(5, 9, 3, 1, ['hello', 'wooo']);
const newArr = [...myArr, ...arr.flat(Infinity)];
// console.log(newArr);

// console.log(Array.toString({ name: "drlv" }));

const marks = {
    student: "Jhon",
    subject: ["Maths", "English"],
    mark: [80, 74],
}

const mark = Object.values(marks);
const newMark = mark.flat(Infinity);
// console.log(newMark);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

