// ++++++++++++ SOLVING PROBLEM OF ARRAY ++++++++++++++++ // 

// **Sum of Array:**
/*
const arr = [2,4,3,5,5];

// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

function sum(arr) {
    let sum = 0;
    // arr.map((elem)=> sum+=elem)
    arr.forEach(element => {
        sum += element;
    });

    return sum;
}

// console.log(sum(arr));
// sum(arr);
*/


/*
// **Find Max and Min:**

const arr = [3,2,1,6,5];

// function findMinandMax(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
  
//   console.log("minimum value of the array:", min);
//   console.log("maximum value of the array:", max);
// }

function findMinandMax(arr) {
    let min = arr[0]
    let max = arr[0]

    arr.map((elem)=>{
        if (elem<min) {
            min= elem;
        }
        if (elem>max) {
            max = elem;
        }
    })
    console.log("minimum value of the array:", min);
    console.log("maximum value of the array:", max);
    
}
findMinandMax(arr);
*/


// **Remove Duplicates:**
/*
const arr = ["hello", "hello", true, false, true, 5,5,5,NaN,NaN, NaN, undefined, undefined];

function removeDuplicates(arr) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
       if (newArr.indexOf(arr[i])===-1) {
        newArr.push(arr[i])
       }
   }

   return newArr;
}

// function removeDuplicates(arr) {
//     return arr.filter((elem, i)=> arr.indexOf(elem)=== i);
// }

console.log(removeDuplicates(arr));
// removeDuplicates(arr)
*/

//**Reverse Array:**
/*
const arr = [2,4,1,5,6];

function reverseArray(arr) {
//    const newArr = [];
//    for (let i = arr.length-1; i >=0; i--) {
//     newArr.push(arr[i]);
//    }
//    return newArr;
    return arr.reverse();
}

console.log(reverseArray(arr));

*/


// **Array Rotation:**
const arr = [3,5,2,6,2,8];

function rotatedArr(arr) {
    
}