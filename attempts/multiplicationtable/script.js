let count = 0;
let result = "";

for (let i = 1; i <= 15; i++) {
  if (i > 8) {
    result += i + " ";
    count++;
  }
}

console.log(`Numbers greater than 8: ${result}`);
console.log(`Total count: ${count}`);
