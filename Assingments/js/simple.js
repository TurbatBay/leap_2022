//1-10 hurtelh natural toog hewleh

// let sum=1;

// while (sum <= 10 ) {

//     console.log(sum)
//     sum+=2;

// }
//for huwilbar
// for (let sum=1;sum <= 10;sum+=2) {
//     console.log(sum)
// }

// let sum = 1 , niilber = 0;
// while (sum <= 100 ) {
//     niilber = sum + niilber;
//     sum++;
// }
// console.log(niilber)

//  let niilber = 0
// for (let sum=1 ;sum <=100; sum++) {

//     niilber = niilber + sum

// }
// console.log(niilber);

// let niilber = 0;
// let n = Number(prompt("n toog oruul"));

// for (let sum = 1;sum <=n; sum++) {
//     console.log(sum);
//     niilber = niilber + sum

// }
// console.log(niilber);

//ANHNII TOO BODLOGO
// let n = Number(prompt("n toog oruul")); // n=6   1-1 2-1 3-1 4-0 5-0 6-1
// let huwaagchid =0 ;
// for (let sum = 1 ;n > sum; sum++) {
//     if (n % sum==0) {
//         huwaagchid++;
//         console.log(huwaagchid)
//     }
// }
// if (huwaagchid >= 2) {
//     console.log("anhnii too bish")
// } else {
//     console.log("anhnii too")
// }

//INTERWAL DAHI ANHNII TOOG HEWLEH

let a = Number(prompt("a too"));
let b = Number(prompt("b too"));
 // a=3 b=5
let s;
for (let sum = a; sum <= b; sum++) {
  //3 4 5
  let huwaagchid = 0;
  for (let s = 1; s<sum; s++) {
    if (sum % s == 0) {
      //sum=3
      huwaagchid++;
    }
  }
  if (huwaagchid <= 2) {
    console.log(sum);
  }
}
/*a=10 b=17 h=0
sum=13 s=1