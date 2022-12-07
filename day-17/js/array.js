console.log("arrays methods")


// array `at` function



// function findAt(arr, index) {
//     return arr[index];
    
// }
// const array1 = [1, 2, 3, 4, 5];
// console.log(findAt(array1, 0));
// console.log(findAt(array1, 4));

// console.log(array1.at(0));
// console.log(array1.at(2));

// array ``concat`` function


// arr1 = [1, 2, 3] arr2 = [4, 5, 6] => [1, 2, 3, 4, 5, 6]

function arrConcat(arr1 , arr2) {
    // arr.push()
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }
    return arr1;
}

let arrayC1 = [1, 2, 3]
let arrayC2 = [4, 5, 6]
console.log(arrConcat(arrayC1, arrayC2));


// array `includes` function

//bagshiin githubaas hicheelee nuhuj awaarai turuu
// array includes
console.log('array includes')
// arr1 = [2, 4, 5] => 5 -> true, 2 => true, 3 =>false

let arrayIncludes = function (arr, number){
    let found = false;
    for(let i = 0; i < arr.length; i++) {
        if(number === arr[i]){
            found = true;
            break;
        }
    }
    return found;
}
const arrayInc = [2, 4, 5]
console.log(arrayIncludes(arrayInc, 2)); // true
console.log(arrayIncludes(arrayInc, 5)); // true
console.log(arrayIncludes(arrayInc, 3)); // false

// array implicit function includes
console.log('array builtin method includes')
console.log(arrayInc.includes(2));
console.log(arrayInc.includes(5));
console.log(arrayInc.includes(3));

// 




// array `indexof` function
//tsaad algorithm n
let findIndex = function (arr, number) {
    let index = -1;
    for (let i = 0; i < arr.length;i++) {
        if(number === arr[i]){
            index = i;

        }
    }
    return index;

}
// console.log(findIndex.arrIndex(3)) // =>2
// console.log(findIndex.arrIndex(2)) // =>1
// console.log(findIndex.arrIndex(10)) // =>-1   //buruu
//odoo harin belen method
// console.log('now its time to test indexof method of array')
// console.log(arrIndex.indexOf(3)) // =>2
// console.log(arrIndex.indexOf(2)) // =>1
// console.log(arrIndex.indexOf(10)) // =>-1



// array `join` function
// algo n

// console.log("Join me function")

// // arr1 = [1, 2, 3] => 123

// let funcJoin = (arr) => {
//     let output = '';

//     for (let i = 0; i < arr.length;i++) {
//         output = output + arr[i];
//     }
//     return output;
// }

// const arraJoin = [1, 2, 3]
// console.log(funcJoin(arrayJoin, "+")) //=> 1+2+3+


// method n 

console.log("array join method")
const jiguurten = ['elee', 'heree', 'galuu'];
console.log(jiguurten.join()); // "elee,heree,galuu"
console.log(jiguurten.join('')); // "eleehereegaluu"
console.log(jiguurten.join('-')); // "elee-heree-galuu"