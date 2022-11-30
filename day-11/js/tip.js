let a = 3000,
    b = 27500,
    c = 100000;
// nemegdel = 1,( ((5000 <= a && a <= 30000) nemegdel = (a * 15) / 100; ?) nemegdel : 
// (((0 <= a && a <= 4999) || (30001 <= a && a <= 1000000000000) ) nemegdel = (a * 25) / 100;) nemegdel );


// ((5000 <= a && a <= 30000) ? nemegdel = (a * 15) / 100 : (0 <= b && b <= 4999) || (30001 <= b && b <= 1000000000000) , console.log(nemegdel) )


// nemegdel = (5000 <= a && a <= 30000) ? nemegdel = (a * 15) / 100  ? ((0 <= a && a <= 4999) || (30001 <= a && a <= 1000000000000) )




let tipResult = (5000 <= c && c <= 30000) ? c * 0.15 + c : c * 0.2 + c; 
console.log(tipResult)




// //if deer testlej uzew
// if (5000 <= a && a <= 30000) {
//     nemegdel = (a * 15) / 100;
//     console.log(nemegdel)
// }  else if ((0 <= a && a <= 4999) || (30001 <= a && a <= 1000000000000) ) {
//     nemegdel = (a * 25) / 100;
//     console.log(nemegdel)
// }


// //b

// if (5000 <= b && b <= 30000) {
//     nemegdel = (b * 15) / 100;
//     console.log(nemegdel)
// }  else if ((0 <= b && b <= 4999) || (30001 <= b && b <= 1000000000000) ) {
//     nemegdel = (b * 25) / 100;
//     console.log(nemegdel)
// }


// //c

// if (5000 <= c && c <= 30000) {
//     nemegdel = (c * 15) / 100;
//     console.log(nemegdel)
// }  else if ((0 <= c && c <= 4999) || (30001 <= c && c <= 1000000000000) ) {
//     nemegdel = (c * 25) / 100;
//     console.log(nemegdel)
// }