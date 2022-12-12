let n = Number(prompt("n toog oruulna uu?"))
let s = 0;
while (0 != n) {
    d = n % 10;
    s = s * 10 + d;
    n = Math.round (n / 10);
}
console.log(s);