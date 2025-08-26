/*Создайте простейшую страницу, на которой будет 2 кнопки и какой-то текст. 
Сделайте так, чтобы по нажатию на первую кнопку текст становился большим, 
а по нажатию на вторую кнопку снова нормальным.

Если хотите чуть сложнее: кнопка одна и первое нажатие увеличивает текст. 
Второе уменьшает
*/

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let elements = document.getElementById("textVariant");
console.log(elements, elements.length);

btn1.onclick = function () {
  elements.style.fontSize = "40px";
 
};
btn2.onclick = function () {
  elements.style.fontSize = "16px";
};


