console.log("========Task1=========");
let arr1 = [4, "apple", 7, 89, "banana", "cherry", 32];
let arr2 = [];
for (let index = 0; index < arr1.length; index++) {
  if (typeof arr1[index] === "string") {
    const element = arr1[index];
    console.log(element);
    res1 = arr2.push(element);
  }
}
console.log(`массив: ${arr1} `);
console.log(`массив: ${arr2}  res= ${res1}`);
