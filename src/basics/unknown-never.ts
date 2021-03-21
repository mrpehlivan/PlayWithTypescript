//unknown type. unknown is better than any. Because at least it is checking the type/
let userInput: unknown;
let userName: string;

userInput = "5";
userInput = 5;

if (typeof userInput === "string") {
  userName = userInput;
}

//never type. Should not return never something.
function generateException(message: string, code: number): never {
  throw { message: message, errorCode: code };
}


generateException('An error occured!.',500);