function fromScratch() {
  console.log("bye world");
  let firstName = "mahad";

  console.log(`Hello ${firstName}`);
  firstName = "Furina";
  console.log(`bye ${firstName}`);

  firstName = 4;
  firstName = 4.5;
  firstName = true;

  const random = [1, 2, "fisk", true, undefined, null, NaN, { name: "mahad" }];
  console.table(random);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // fjerne fra slutten
  numbers.pop();

  // lægge til i slutten
  numbers.push(11);

  // fjerne index 0
  numbers.shift();

  // lægge til index 0
  numbers.unshift(0);

  console.log(numbers);

  const object = { age: 21, isMarried: true };
  console.table(object);
  for (let i = 0; i < numbers.length; i++) {}
  for (const number of numbers) {
    console.log(`dette tal er ${number}`);
  }
}

function add(a, b) {
  return a + b;
}

//dont use this
const sub = function (a, b) {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

function calculateAverage(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum = sum + number;
  });
  const total = sum / numbers.length;
  return total;
}

export { fromScratch, calculateAverage };
