// MAKE A FUNCTIOIN WHICH REMOVE DUPLICATE ELEMENT FROM ARRAY

// function removeDuplicate(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++)
//         if (!newArr[arr[i]]) {
//             newArr.push(arr[i]);
//         }
//     return console.log('The duplicate element is :', [...new Set([...arr])].join(', '));
// }

// function removeDuplicateElement(arr) {
//     let newArr = [];

//     const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

//     return uniqueArr;
// }

// const myArr = [1, 2, 3, 4, 55, 65, 1, 2, 2, 2, 3, 3, 3, 55, 55, 55];

// console.log(removeDuplicateElement(myArr))

// const removeDuplicate = (arr) => {

//     const returnArr = arr.filter((elem, i) => arr.indexOf(elem) === i
//     )
//     return returnArr;

// };

// const removeDuplicate = (arr) => {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr[arr[i]]) {
//             newArr.push(arr[i])
//         }

//     }

//     return [...new Set([...arr])];
// }



// const myArr = ["hello", "hello", "guys", "good", "guys"];
// // const myArr = [1, 1, 1, 3, 3, 3, 4, 5, 6, 6, 6];
// console.log(removeDuplicate(myArr));

const removeDuplicate = function (arr) {
    let newArr = [];

    arr.forEach((element) => {
        if (!newArr.includes(element)) {
            return newArr.push(element)
        }
    });
    return newArr;
}
const myArr = ["hello", "hello", "guys", "good", "guys"];
// const myArr = [1, 1, 1, 3, 3, 3, 4, 5, 6, 6, 6];
console.log(removeDuplicate(myArr));