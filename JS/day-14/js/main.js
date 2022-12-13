console.log("Day-14")
console.log("find out even numbers from 1 to 10")

// const max = 10;
// let start = 1;
// let k = 1;

// while (start <= max) {
//     if (start % 2 == 0) {
//         console.log(start);
//         start = start + 1;
//     } else {
//        
//     }
// }
// console.log("FOR version")
// const max = 10;
// for (let start = 1; start <= max; start++) {
//     if (start % 2 == 0) {
//         console.log(start);
//     }
// }

// // console.log("find out odds numbers from 1 to 20")
// // const min = 20;
// // while (k <= min) {
// //     if (k % 2 != 0) {
// //         console.log(k);
// //         k = k + 1;
// //     } else {
// //         k = k + 1
// //     }
// // }
// console.log("FOR version")
// console.log("find out odds numbers from 1 to 20")
// let min = 20;

// for (k = 1; k <= 20; k++) {
//     if (k % 2 != 0) {
//         console.log(k);
//         k = k + 1;
//     }
// }


// Dooshoo tsuwargadag text
// let str = "life is beautfiul";
// let count = 0;
// while (count < str.length) {
//     console.log(str.charAt(count));
//     count = count + 1;
// }


// let str = "life is beautfiul";
// let count = 1;
// for (count < str.length) {
//     console.log(str.charAt(count));
//     count++;
// }

// tsifruudiin niilber

// let a = 123;
// let sum;

// x = 123 / 100;
// y = 123 % 100 ;
// y = y / 10;
// z = 123 % 10;
// console.log(x);
// console.log(y);
// console.log(z);
// sum = x + y + z;
// console.log(sum);

                // while ghdee stringeer bodson n
// let count = 0;
// let a = prompt("garaas a utga onoo")
// let sum = 0;
// while (count < a.length) {
//     console.log(a.charAt(count));
//     sum = sum + Number(a.charAt(count));
//     count++;
// }
// console.log(sum);


                // for ghdee numberaar
// let sum = 0 , rem = 0;
// let n = prompt("garaas n utga onoo")
// while (n > 0) {
//     rem = n % 10;
//     sum = sum + rem;
//     n = Math.floor(n / 10)
// }
// console.log(sum)

// let rem = 0 ,sum;
// let n = prompt("garaas a utga onoo");
// for (sum = 0 ; n > 0;  ) {
//     rem = n % 10;
//     sum = sum + rem;
//     n = Math.floor(n/10)
// }
// console.log(sum)



let rem = 0 , sum =0 ;
for (let n = prompt("garaas a utga onoo") ; n > 0; n = Math.floor(n/10)  ) {
    rem = n % 10;
    sum = sum + rem;
    
}
console.log(sum)