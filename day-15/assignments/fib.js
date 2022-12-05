let f1 = 0;
let f2 = 1;
let n = 0;


for (let m = Number(prompt("Give me your range"));0 <= n <= m;n++) {
    let f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
}
