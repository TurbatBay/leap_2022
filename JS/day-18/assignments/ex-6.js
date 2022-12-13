// function palindromic(input) {
//     // console.log(input.split(" "));

    
// }




function re(input) {
    let b=[]
    let hhe=[]
    let i=0;
    hhe=input.split();
    b=hhe
    a=hhe.reverse();
    if(a==b)
    return 1;
    return 0;
}


let num=[1,2,1]
console.log(re(num))   // x = 123 false buyu palindrom too bishee gej hewleh ystoi



// console.log(palindromic);
// // 
// //OR
// input = [123]

// input = 123 bawial console.log("palindrom bish")
// inpit = 121 baiwal console.log(""palindrom mun")
// what i need    indexOF , reverse methods, array.length-1 and array.length[0]
// and split method