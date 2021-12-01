let data = require("../data/data.js");
data = data.map((item) => parseInt(item));

solve_one = (data) => {
  let increases = 0;

  data.reduce((prev, current) => {
    if (prev < current) {
      increases += 1;
    }
    return current;
  });
  return increases;
};

solve_two = (data) => {
  let increases = 0;

  for (let i = 0, j = 3; j < data.length; i++, j++) {
    if (data[j] > data[i]) {
      increases += 1;
    }
  }
  return increases;
};

console.log(`Answer 1: ${solve_one(data)}`);
console.log(`Answer 2: ${solve_two(data)}`);
