let m = Number(prompt("n toog oruuna uu?"));
let a, b, c, d;
let n = 0;
while (0 != m) {
    d = m % 10;
    n = n * 10 + d;
    m = Math.round (m / 10);
}
while (n != 0) {
    c = n % 10;
    if (c == 1) {
        console.log("neg")
    } else if (c == 2) {
        console.log("hoyr")
    } else if (c == 3) {
        console.log("guraw")
    } else if (c == 4) {
        console.log("duruw")
    } else if (c == 5) {
        console.log("taw")
    } else if (c == 6) {
        console.log("zurgaa")
    } else if (c == 7) {
        console.log("doloo")
    } else if (c == 8) {
        console.log("naim")
    } else if (c == 9) {
        console.log("ys")
    } else if (c == 0) {
        console.log("teg")
    }
    n = Math.round(n / 10);
    
    
}

//n = 123 
//n = 123/10  n=3 