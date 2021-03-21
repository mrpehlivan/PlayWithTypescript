type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

//union type and literal type ('as-number' | 'as-string') and type alias
function combine(
  firstElement: Combinable,
  secondElement: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof firstElement === "number" && typeof secondElement === "number") ||
    resultConversion === "as-number"
  ) {
    result = +firstElement + +secondElement;
  } else {
    result = firstElement.toString() + secondElement.toString();
  }
  return result;
}

alert(combine(5, 6, "as-number"));
alert(combine("5", "6", "as-number"));
alert(combine("A", "B", "as-string"));
