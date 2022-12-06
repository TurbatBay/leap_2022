let randomNumber = 1;

randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

let n = Number(prompt("n toog oruulna uu"));

if (n < randomNumber) {
  for (let i = 0; i <= 100; i++) {
    if (n == i) {
      console.log("taalaa");
    }
  }
} else {
    console.log("n too randomNumberaas ih bn")
}
