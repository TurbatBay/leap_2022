let n = Number(prompt("n toog ugnu uu?"));

// 1245 % 10 = 5 Math.round
let s = 0; // suuliin ornuudiin niilber
let d = 0; // uldegdel
let k = 0;
while (0 != n) {
    d = n % 10; // d = 5
    s = s + d; //s = 5

    n = Math.round(n / 10)
}
console.log(s)
//123 / 10 = 12.3