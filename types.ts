// Any type
let price: any = 10000;
console.log(price);
price = "10000";
console.log(price);
price = "xyz";
console.log(price);

// Never
function throwError(): never {
  throw new Error("New error");
}

// Type
type ID = string | number;
