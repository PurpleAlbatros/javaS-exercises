"use strict";

import { fromScratch, calculateAverage } from "./js/fromScratch.js";

function main() {
  console.log("Hello World");
  //fromScratch();

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const average = calculateAverage(numbers);
  console.log(average);
  const chatAmICooked = true;

  const isHeCooked = chatAmICooked ? "beyond cooked" : "nah he good";

  console.log(isHeCooked);
  console.log("he needs some milk fr fr");
}
main();
