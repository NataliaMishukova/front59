/*a) Создайте несколько объектов-продуктов. В каждом объекте должно быть поле name (название), description(описание), price(цена), info (функция, которая формирует строку вида: товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...

b) создайте конструктор для создания объектов-товаров. Создайте несколько товаров

с) Создайте массив из товаров. Напишите функцию, которая выводит в консоль информацию о всех товарах в виде: */

console.log(" --------- Задача 1 ---------");
//Tовар 1
const item1 = {
  name: "notebook lenovo thinkpad",
  price: 1283,
  description: "cpu intel core7, ram:16gb",
  info: function () {
    return (
      "товар: " +
      this.name +
      "; цена: " +
      this.price +
      "; описание: " +
      this.description
    );
  },
};
//Tовар 2
const item2 = {
  name: "HONOR Pad 8 Wi-Fi 256 ГБ синий",
  price: 800,
  description: "2000x1200, IPS, 8x2.4 ГГц, 8 ГБ, 7250 мА*ч, Android 12.x",
  info: function () {
    return (
      "товар: " +
      this.name +
      "; цена: " +
      this.price +
      "; описание: " +
      this.description
    );
  },
};

console.log(item1);
console.log(item1.info());
console.log(item2.info());

//Создание объектов-товаров с помощью Конструктора
let item3 = new Article(
  "Смартфон Xiaomi Redmi A3x 64 ГБ белый",
  760,
  "ядер - 8x(1.8 ГГц), 3 ГБ, 2 SIM, IPS, 1650x720, камера 8+008 Мп, 4G, GPS, FM, 5000 мА*ч"
);
let item4 = new Article(
  "Фитнес-браслет HONOR Band 9",
  460,
  "корпус - серебристый, ремешок - голубой, 1.57" + ", AMOLED"
);
console.log(item3);
console.log(item4);

console.log(item3.info());
console.log(item4.info());

//Создайте массив из товаров

console.log(" --------- массив из товаров ---------");
const items = [];
items.push(item1);
items.push(item2);
items.push(item3);
items.push(item4);

console.log(items);
objectFields(item1);
//вызов функции, которая печатает массив;

console.log(printProductsInfo(items));

//Конструктор

function Article(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.info = function () {
    return (
      "товар: " +
      this.name +
      "; цена: " +
      this.price +
      "; описание: " +
      this.description
    );
  };
}
//-----------функция, которая печатает массив-------------
function printProductsInfo(items) {
  if (!Array.isArray(items)) {
    console.log("Ошибка: ожидается массив товаров");
    return;
  }
   items.forEach(obj)
   {
   console.log(objectFields(obj))}
    
}

//--------------- печать объекта массива-------------------
function objectFields(obj) {
  if (typeof obj !== "object") {
    return;
  }
  
  for (let key in obj) {
    if (typeof obj[key] === "function"){
    console.log(obj.info());  
    } 
    console.log(`field(${typeof (obj[key])}) : ${key} -> ${obj[key]} `);
  }
}

/*printProductsInfo(products);


function objectFields(items, obj){
    for (let obj of items){
    
   
    if(typeof(obj)!=="object"){
        return;
    }
   
    for (let key in obj){
           
        console.log(`${key}: ${obj[key]}  `)
    }
}} *?
/*
function ArrItems(items) {
  for (let el of items) {
      if(typeof(obj)!=="object"){
        return;
    }

    for (let key in obj){
        console.log(`field(${typeof(obj[key])}) : ${key} -> ${obj[key]}  `)
    }
  }
}*/
