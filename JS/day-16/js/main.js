let arr1 = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9, 8];
console.log(arr1);

let s = 0;
for (let i = 0;arr1.length > i;i++) {
    if (arr1 [i] % 2 == 0) {
        s = s + i
    }
    
}
console.log(s)