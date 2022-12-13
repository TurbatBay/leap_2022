
console.log("2.Array доторх тоонуудын нийлбэрийг ол.")
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

let sum = 0;
for(let i = 0;i <arrayOfNumbers.length;i++) {
    // console.log(arrayOfNumbers[i]);
    sum = sum + arrayOfNumbers[i]
}
console.log("2.array dotorh toonuudiin niilber: " + sum);



console.log("3.Хамгийн их тоог ол.")


function largest(arrayOfNumbers) {
    
   
    // Initialize maximum element
    let max = arrayOfNumbers[0];

    // Traverse array elements 
    // from second and compare
    // every element with current max 
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > max)
            max = arrayOfNumbers[i];
    }
     
  return max;
}

largest[arrayOfNumbers];
console.log(max);