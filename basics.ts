//number, boolean, string example
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    alert(`${phrase} ${n1 + n2}`);
  } else {
    return n1 + n2;
  }
}

const num1 = 5.8;
const num2 = 5;
let showResult = true;
let printResult = "Result is :";

add(num1, num2, showResult, printResult);
