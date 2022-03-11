const myNum = [1, 2, 3, 4, 5, 6, 7];
const myFunc = (arr) => {
  return arr.map((x) => x + 3).filter((x) => x < 7);
};

console.log(myFunc(myNum));

let cons = true;
let def = false;
let acres = 100;

function sum(num1, num2 = 2, num3 = 3) {
  return num1 + num2 + num3;
}
let val = [1, 5];
let total = sum(4, ...val);

console.log(total);

const x = [1, 2];
const y = [5, 7];
const z = [...x, ...y];
console.log(z);
