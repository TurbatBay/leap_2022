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


// let phoneNumber;
// phoneNumber = prompt("Utasnii dugaaraa oruulna uu");
// const phoneChar = phoneNumber.substr(0, 1);
// // const phoneChar = console.log(phoneNumber.substr(0,1));
// const phoneNum = phoneNumber.substr(1, 3);
// const restNum = phoneNumber.substr(4, 11);
// console.log(phoneChar);
// console.log(phoneNum);
// console.log(restNum);


// //if ((!Number.isInteger(Number(phoneChar))) && Number.isInteger(Number(phoneNum)) && (Number.isInteger(Number(restNum)) && phoneNumber.length == 12 )) 


// if(phoneChar=="+" && phoneNum==976 && phoneNumber.length==12)
// {
//     console.log("Та монгол улсын утасны дугаарыг зөв орууллаа")

// } else {202
//     console.log("Та монгол улсын утасны дугаарыг буруу орууллаа")
// }



let on, sar, udur;

on = prompt("On oruulna uu")
sar = prompt("sar oruulna uu")
udur = prompt("udur oruulna uu")

if (sar < 12) {
    if (sar < 10) {
        sar = "0" + sar
    }
} else console.log("sar chin hudlaa bn")
if (sar == 2 && ((on % 4 == 0) && (on % 100 != 0) || (on % 400 == 0))) {
    if (udur <= 29) {
        if (udur < 10) {
            udur = "0" + udur
            console.log(on + " " + sar + " " + udur)
        } else console.log(on + " " + sar + " " + udur) 
    } else console.log("tiim udur bhgu")
        } else if (sar == 2 && ((on % 4 == 0) && (on % 100 != 0) && (on % 400 == 0))) {
            if (udur <= 28) {
                if (udur < 10) {
                    udur = "0" + udur
                    console.log(on + " " + sar + " " + udur)
                } else console.log(on + " " + sar + " " + udur)
    }
    else console.log("tiim udur bhgu")
    
}
else if(sar==1 && sar==3 && sar==5 && sar==7 && sar==8 && sar==10 && sar==12)
{ if(udur <= 31) {
    if (udur < 10) {
        udur = "0" + udur
        console.log(on + " " + sar + " " + udur)
    } else console.log(on + " " + sar + " " + udur)

} else console.log("udur chin hudlaa bn") }
else {if(udur <= 30) {
    if (udur < 10) {
        udur = "0" + udur
        console.log(on + " " + sar + " " + udur)
    }else console.log(on + " " + sar + " " + udur)
 } else console.log("tiim udur bhgu")
}




// const onNum = on.substr(0, 4);
// const sarNum = sar.substr(0, 2);
// const udurNum = udur.substr(0, 2);





