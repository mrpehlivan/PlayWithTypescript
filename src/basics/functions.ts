//Function return types

//number
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// if you try to return something for void functions, you will get undefined result.
function printResult(result: number): void {
  alert("Result is : " + result);
}

// undefined
function returnUndefined(): undefined {
  return;
}

printResult(add(5, 0.8));

//Define parameter and callback function types and return types
function addAndHandle(n1: number, n2: number, cb: (handle: number) => void) {
  let result = n1 + n2;
  cb(result);
}


addAndHandle(10,12,printResult)