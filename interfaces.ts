interface IDeposit {
  amount: number;
  currency: string;
  bank: string;
}

const deposit: IDeposit = {
  amount: 100,
  currency: "EUR",
  bank: "PrivatBank",
};

const addDepositToQueue = function (depsoit: IDeposit) {
  console.log(
    `Deposit ${deposit.amount} ${deposit.currency} has been added to queue`
  );
};

addDepositToQueue(deposit);
