// MAKE A FUNCTIOIN WHICH REMOVE DUPLICATE ELEMENT FROM ARRAY

// function removeDuplicate(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++)
//         if (!newArr[arr[i]]) {
//             newArr.push(arr[i]);
//         }
//     return console.log('The duplicate element is :', [...new Set([...arr])].join(', '));
// }

function removeDuplicateElement(arr) {
    let newArr = [];

    const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

    return uniqueArr;
}

const myArr = [1, 2, 3, 4, 55, 65, 1, 2, 2, 2, 3, 3, 3, 55, 55, 55];

console.log(removeDuplicateElement(myArr))

