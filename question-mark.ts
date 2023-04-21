interface Transaction {
  readonly id: string;
  amount: number;
  currency: string;
  description?: string;
}

const payment1: Transaction = {
  id: "af421bdc-e069-11ed-b5ea-0242ac120002",
  amount: 100,
  currency: "USD",
  description: "Payment for the service",
};

const payment2: Transaction = {
  id: "ffa31a4a-e069-11ed-b5ea-0242ac120002",
  amount: 200,
  currency: "EUR",
};

console.log(payment1, payment2);
