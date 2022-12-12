let queueLine = [
  "Бат",
  "Дорж",
  "Пунцаг",
  "Готов",
  "Баяраа",
  "Болд",
  "Навчаа",
  "Гончигсумлай",
  "Цэцгээ",
  "Нэргүй",
  "Бальбийгомбо",
  "Баатар",
];
console.log(queueLine.indexOf("Гончигсумлай"));
let egch1 = queueLine.indexOf("Гончигсумлай") - 1;
let egch2 = queueLine.indexOf("Гончигсумлай") + 0;
queueLine.splice(egch1, 1);
queueLine.splice(egch2, 1);
console.log(queueLine);
