





n = Number(prompt("Too ugnu uu"))
let s = 0;
let k = n;

while (n > 0) {
    let d = n % 10;
    s = s * 10 + d;
    //console.log(s);
    let n = n / 10;

}
if (k == s) {
    console.log("mun")
} else {
    console.log("bish")
}