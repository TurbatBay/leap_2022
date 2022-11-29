// let first = "Baby Shark, ", second = "doo-doo ";
// console.log(first + second + second);
// console.log(first + second + second);
// console.log(first + second + second);
// console.log(first + second + second);
// console.log(first + second + second);
// console.log(first + second + second);

// let nullVariable = null;
// let undify;
// let myDecision = true;


// // type of 

// console.log(typeof 1);
// console.log(typeof "hello");
// console.log(typeof undify);


// console.log(typeof nullVariable);
// console.log(typeof myDecision);


/*
* alert gargana
* x^2 + y^2



*/




// let x = window.prompt('x');
// let y = window.prompt('y');
// let z = window.prompt('z');

// console.log(((x*x) + (y*y) - (z*z*z))/(240*175));


// console.log(36%19);


// let result = "30" - 10;
// console.log(result);


// // toirgiin urt   circleLenght 

// const pi = 3.14;
// let r = 6;
// let urt = (pi * 2* r);
// console.log(urt);


// // trapezoid

// let a = prompt ("Enter a: ");
// let b = prompt ("Enter b: ");
// let h = prompt ("Enter c: ");

// let A = ((a+b)/2)*h ;
// alert(A);
// console.log(A);


//NaN= not a number



//   JS CONDITIONS


//BOOLEAN 
// let a = prompt ("enter a");
// let b = prompt ("enter b");
// if(a > b) {
//     console.log("it's true");
// } else {
//     console.log("it's false");
// }


// let yearOfBirth = prompt ("Tursun jilee bichne uu")
// const currentYear = 2022;
// let old = (currentYear-yearOfBirth);
// console.log(old)
// if ( 0 <= old && old <= 1) {
//     console.log("Infant")
// } else if (1 < old && old <= 3) {
//     console.log("Toddler")
// } else if (3 < old && old <= 5) {
//     console.log("Preschool")
// } else if (5 < old && old <= 12) {
//     console.log("Gradeschooler")
// } else if (12 < old && old <= 18) {
//     console.log("Teen")
// } else if (18 < old && old <= 21) {
//     console.log("Young Adult")
// } else {
//     console.log("Adult")
// }

//tegsh sondgoi oloh


// let a = prompt ("Garaas too oruulna uu");
// if (a % 2 == 0) {
//     console.log("tegsh too")
// } else {
//     console.log("sondgoi")
// }

// let a = prompt("Eyreg too oruulna uu");
// if (a % 3 == 0 || a % 7 == 0) {
//     console.log("urjwer mun bn")
// } else {
//     console.log("huwaagdahgui")
// }


// BMI 5

// let weight = prompt("jingee oruul")
// let height = prompt ("unduruu oruul in meter For example: 176cm = 1.76m")

// let hariu; 
// hariu = (weight/(height*height));
// console.log(hariu)

// if (18.5 > hariu ) {
//     console.log("Under weight")
// } else if (18.5 <= hariu && hariu < 24.9) {
//     console.log("Normal")
// } else if (25 <= hariu && hariu < 29.9) {
//     console.log("Over Weight")
// } else if (30<= hariu && hariu < 34.9) {
//     console.log("Obesity (Class 1)")
// } else if (35<= hariu && hariu < 39.9) {
//     console.log("Obesity (Class 2)")
// } else {
//     console.log("Extreme Obesity")
// }



//Switch//


// let day = prompt("Odroo oruul")
// console.log(typeof day)
// let dayName;
// let dayNumber = Number(day);   //end day-iig Number bolgoj huwirgaj bn
// console.log(typeof dayNumber)

// switch (dayNumber) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "InvalidDate";


// }
// console.log(dayName);



// 4.
let n = prompt ("garaas too oruulna uu")
if (n<0) {
    console.log("Surug")
} else if (n==0) {
    console.log("0 tei tentsuu")
} else {
    console.log("eyreg")
}