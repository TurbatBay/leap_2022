console.log("Array methods")

//shift-popiin esreg


// arr1 = [1, 2, 3] => //shift(arr1) => [2, 3]


// let shiftArr = (arr) => {
//     let tempArray = []
//     for(let i = 0; i <arr.length; i++) {
//         if (i != 0) {
//             tempArray.push(arr[i])
//         }
//     }

//     return tempArray;
// }

// let arr1 = [1, 2, 3]


// console.log(shiftArr(arr1)); //[2, 3]

// console.log("array shift method");

// const arr = [1, 2, 3];
// const firstElement = arr.shift();
// console.log(arr) // [2, 3]
// console.log(firstElement);




//UNSHIFT 

// console.log("Unshift array algorithm ");
// let unshiftArray = function (arr, number) {

//     let tempArray = [];
//     tempArray.push(number);

//     for (let i = 0; i <arr.length;i++) {
//         tempArray.push(arr[i])
//     }
//     return tempArray;
// }


// console.log('array unshift method');

// let arr2 = [5, 6, 7]
// const array1 = [1, 2, 3];
// console.log(unshiftArray(arr2, 6)); // [1, 5, 6, 7];
// console.log((array1.unshift(4))); //5
// console.log(array1);



// function sortingAlgo(arr) {
//     let swap = false;
//     if (i >= 0 && i < n) {
//         swap = false;
        
//     }
//     for(let i = 0; i < arr.length;i++){

//     }
// }
// console.log(sortingAlgo(sortArray)) // [-1, 1, 2, 7, 8, 10]





//REVERSE


// function arrayReverse(arr) {

    
// }
// let arrayReverse = [4, 5, 1, 8]
// console.log(arrayReverse(arrReverse)); //[8, 1, 5, 4]


function nameSlice (arr, index) {
    let tempArray = []
    for (i = index; i < arr.length;i++) {
        tempArray.push (arr[i])
    }
    return tempArray;
}   
arr = [1, 2, 3, 4, 5]
console.log(nameSlice([1, 2, 3, 4, 5] , 2)) // [3, 4, 5]




//SPLICE

const spliceNames = ['davaa', 'lhagva', 'purew', 'byamba']

spliceNames.splice(3, 0, "baasan");
console.log(spliceNames)