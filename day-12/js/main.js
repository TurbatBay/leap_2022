// let a = 10;
// let b = "10";
// console.log(a == b);
// console.log(a === b);


// let e = true;
// let f = false;

// console.log(e < f);
// console.log(e > f);

// // TERNARY 
// let result = 10;
// // if (result > 10) {
// //     console.log("more than 10");
// // } else {
// //     console.log("less than 10")
// // }


// // Tiptei bodlogo ternary zuw huwilbar
// let tipResult = (5000 <= c && c <= 30000) ? c * 0.15 + c : c * 0.2 + c;
// console.log(tipResult)


// const str = "Life the universe and everything.";
// console.log(str.length); //34    //counted characters even empty spaces


// let registerNumber;
// registerNumber = prompt("registeriin dugaaraa oruul");
// console.log(length);
// if (registerNumber .length != 10) {
//     console.log("buruu")
// } else  console.log("zuw bn ")

// console.log(registerNumber.charAt(0));
// console.log(registerNumber.charAt(1));
// console.log(registerNumber[0]);
// console.log(registerNumber[1]);

// .charAt(index) str[index]


// const str = "Life the universe and everything.";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// console.log(str.charAt(0));
// console.log(str[1]);




// .concat() & str1 + str2


// let firstName = 'John';
// let fullName = firstName.concat(' ','Smith')
// console.log(fullName);
// console.log(firstName);


// let firstName = 'John';
// let fullName = firstName + ' ' +'Smith';
// console.log(fullName);


// substr  like limit in math x-> 



// let registerNumber;
// registerNumber = prompt("registeriin dugaaraa oruul");
// const registerChar = console.log(registerNumber.substr(0, 2));

// const registerNum = console.log(registerNumber.substr(2, 10));

// if (!Number.isInteger (Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10 ) {
//     alert("correct")
// } else {
//     alert("WROOOONG!")
// }


let phoneNumber;
const phoneNumNemeh = console.log(phoneNumber.substr(0, 1));
const phoneNum1 = console.log(phoneNumber.substr(1, 4));
const phoneNum2 = console.log(phoneNumber.substr(2, 10));


phoneNumber = prompt("Utasnii dugaaraa oruulna uu")

if (Number.isInteger(Number(phoneNum2)) && phoneNumNemeh == "+" && phoneNumber.length == 12 ) {
    console.log("Та монгол улсын утасны дугаарыг зөв орууллаа")

} else {
    console.log("Та монгол улсын утасны дугаарыг буруу орууллаа")
}
//=976 shalgahiin tuld str[0] == (+)   str[1] == 9  gj check hiineeee