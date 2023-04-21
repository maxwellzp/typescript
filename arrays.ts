const countries: string[] = ["Ukraine", "Italy", "England"];
const currencies: string[] = ["UAH", "USD", "EUR"];
console.log(currencies, countries);

const nums: number[] = [10, 20, 30];
const numsGeneric: Array<number> = [10, 20, 30];
console.log(nums, numsGeneric);

const readOnlyArray: readonly string[] = ["A", "B", "C"];
// Index signature in type 'readonly string[]' only permits reading
// readOnlyArray[0] = "D";
