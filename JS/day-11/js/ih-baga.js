// Ugugdsun toonuudiin hamgiin ih bolon hamgiin bagiig hewle

let a = 5, b = 5, c = 5;


if ((a <= b) && c <= b) {
    if (a <= c) {
        console.log("hamgiin ih n " + b + " mun hamgiin baga n " + a)
    } else {
        console.log("hamgiin ih n " + b + " mun hamgiin baga n " + c)
    }
} else if ((b <= a) && c <= a) {
    if (b <= c) {
        console.log("hamgiin ih n " + a + " mun hamgiin baga n " + b)
    } else {
        console.log("hamgiin ih n " + a + " mun hamgiin baga n " + c)
    }
} else if ((b <= c) && a <= c) {
    if (b <= a) {
        console.log("hamgiin ih n " + c + " mun hamgiin baga n " + b)
    } else {
        console.log("hamgiin ih n " + c + " mun hamgiin baga n " + a)
    }
}
