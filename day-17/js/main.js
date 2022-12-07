// function pow(number, exponent) {
//     let multiply = 1;
//     for (let i = 1; i <= exponent; i++) {
//         multiply = multiply * number;
//     }
//     return multiply;
// }

// let result = pow(2, 3);

// console.log(result)
// console.log(pow(2, 4));
// console.log(pow(5, 2));
// console.log(pow(4, 3));


//EXERCISES 

//Хоёр тооны утгыг хооронд харьцуулаад аль багыг нь хэвлээд true / false буцаадаг функц бичнэ үү. Функцын нэр  нь findMin
// ex.1
// function findMin(a, b) {
//     if (a>b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// findMin(2, 4);
// console.log(findMin(2, 4));

//ex.2
// function printArray(array) {
//     for(let i = 0; i < array.length;i++) {

//     }
    
// }

// let arr = [1,2,5,12,55]
// printArray(arr);
// console.log(arr)

//ex.3
// console.log('Ex 04 begins')
// let arr = [1,2,5,12,55]
// let findArrayMax = function (arr) {
//     let max = -1;
//     for(let i = 0; i < arr.length; i++) {
//         if (max <= arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;

// }

// console.log(findArrayMax(arr)) // => 6


//ex.4
let y = (arr) => {
    let sum = 0;
    for(let i = 0;i < arr.length;i++) {
        sum = sum + arr[i];
        
    }
    const average =(sum / arr.length);
    return average;
}
let arr = [1,2,3,4,5,6];
console.log(y(arr))
