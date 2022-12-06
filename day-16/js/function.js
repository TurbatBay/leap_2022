//day 16 function ehlel

//function decleration
function f() {
    console.log("Hello functions") 
}

// function call

f();

//1.

function f1 (x,y) {
    console.log(Math.pow(x,2) + Math.pow(y,2));
}
f1(2,2);
f1(2,3);


function f2(x,y) {
    console.log(Math.pow((x + y),2));    
}
f2(2,3);


// function e(m, c) {
//     const c = 300000; 
//     console.log(m * Math.pow(c, 2) );
    
    
// }
// e(2, c);


//4. factorial f(x) = x!
function factorial(x) {
    let multiplication = 1;
    for (let i = 1; i <= x;i++) {
        multiplication = multiplication * i;
    }
    console.log(multiplication)
}

factorial(5);


//5 f(x,y) = cos(x) - sin(x)


function f4(x,y) {
    console.log(Math.cos(x) - Math.sin(x))
    
}
f4(3,5);



//6 f(x) = x^3 + x^2 + 5x + 12

function f5(x) {
    console.log(Math.pow(x ,3) + Math.pow(x ,2) + 5*x + 12);
    
}
f5 (3);


//7 f(x) = x^2

function f6(x) {
    console.log(Math.pow(x ,2));
    
}
f6(10);