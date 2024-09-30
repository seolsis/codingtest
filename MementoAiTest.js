function solution(phone_number) {
  phone_number = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return phone_number;
}

const test1 = "01033334444";
const test2 = "027778888";

console.log(solution(test1));
console.log(solution(test2));
