class Currency {
  public readonly decimalPlaces = 2;
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return `${this.name}`;
  }
}

const currency = new Currency("Euro");
console.log(currency.getName());
