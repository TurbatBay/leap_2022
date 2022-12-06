





n = Number(prompt("Too ugnu uu"))
let s = 0;
let k = n;

while (n > 0) { //n = 123
    let d = n % 10;
    s = s * 10 + d;
    //console.log(s);
    let n = Math.round (n / 10);

}
if (k == s) {
    console.log("mun")
} else {
    console.log("bish")
}
// n = 321