

// n = Number(prompt("too oruul"));

// let huwaagchid = 1 , k = 0;




// while (n > huwaagchid) {
//     if (n % huwaagchid== 0) {
//         k = k + 1;
//     }
//     huwaagchid = huwaagchid + 1 ;
// }
// if (k == 1) {
//     console.log("mun");
// } else {
//     console.log("bish");
// }
n = Number(prompt("Too ugnu uu"))
let s = 0;
let k = n;
while (n > 0) {
    let d = n % 10;
    s = s * 10 + d;
    console.log(s);
    n = Math.round(n / 10);

}
if (k == s) {
    console.log("mun")
} else {
    console.log("bish")
}


