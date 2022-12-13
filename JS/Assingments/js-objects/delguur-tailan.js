// Дэлгүүрийн боруулалтын мэдэээл өгөгдсөн.
// productName, unitPrice, amount, price, casherId(Ajiltanii dugaar), date гэсэн мэдээлэл агуулна.
// Өгөгдлийг. өөрсдөө зохионо.  30 хүртэлх мөртэй.

// const data = [
//          {productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 500000  casherId:1, date: '2022-11-01'},
//          {productName:"Chocolate", unitPrice:3000, amount: 18, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
//          {.}
//          {.}
//          {.}
// ];
// Дараах даалгаварыг хийж гүйцэтгэнэ үү.
// 1. Нийт борлуулалтын дүнг тооцоолох.
// 2. Нийт борлуулагдсан барааны тоог тооцоолох.
// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
// 5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
// 7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
// 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.

// const data = [

//          {productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 500000,  casherId:1, date: '2022-11-01'},
//          {productName:"Chocolate", unitPrice:3000, amount: 18, totalPrice: 54.000, casherId:2, date: '2022-11-01'},
//         // //  {.}
//         // //  {.}
//         // //  {.}
// ];

const data = [];
// let count = data.push()

for (let i = 1; i <= 30; i++) {
  // console.log(i + "dahi dawtalt")
  let productname = "Bakery" + [i];
  // count = data.push(prodthuctName);
  // console.log();
  // console.table("product name  " + productName);
  uPrice = Math.round(Math.random() * (10000 - 100) + 100);
  // console.table("unit price   " + unitPrice);
  amount = Math.round(Math.random() * (300 - 10) + 10);
  // console.table("amount  " + amount);
  totalPrice = amount * uPrice;
  // console.log("total price  " + totalPrice);
  casherId = i;
  // console.log("casher id  " + casherId);
  date = "2021-11-11";

  let product = {
    productName: productname,
    unitPrice: uPrice,
    am: amount,
    tPrice: totalPrice,
    cId: casherId,
    ognoo: date,
  };

  data.push(product);
}
console.table(data);

// 1. Нийт борлуулалтын дүнг тооцоолох.

console.log("1. Нийт борлуулалтын дүнг тооцоолох.");

let sum = 0;
for (let j = 0; j < data.length; j++) {
  // console.log(data[0])
  sum = data[j].tPrice + sum;
}
console.log("tPrice niilber  " + sum);

// console.log(data[1].tPrice)

//niit ologch
// function sumFinder(data) {
//     let numberSelected = 0;
// for(let j = 0; j < data.length ; j++) {
//     sum = data[j].tPrice + sum;
// }

// 2. Нийт борлуулагдсан барааны тоог тооцоолох.

console.log("2. Нийт борлуулагдсан барааны тоог тооцоолох.");


let amountSum = 0;
for (let k = 0; k < data.length; k++) {
  amountSum = data[k].am + amountSum;
}

console.log(amountSum);



//3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.

console.log("3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.");

