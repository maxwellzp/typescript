interface IBankInfo {
  bankName: string;
  IBAN: string;
}

interface IDeposit extends IBankInfo {
  amount: number;
  currency: string;
}

const deposit: IDeposit = {
  amount: 100,
  currency: "EUR",
  bankName: "PrivatBank",
  IBAN: "UA008214311263326375439180000",
};

const addDepositToQueue = function (depsoit: IDeposit) {
  console.log(
    `Deposit ${deposit.amount} ${deposit.currency} has been added to queue`
  );
};

addDepositToQueue(deposit);

//////////////////////////////////////////////////////////////////////////////////////

interface IEmployee {
  calculateBonus(): number;
  calculateSalaray(): number;
}

class Manager implements IEmployee {
  calculateBonus() {
    return 1;
  }
  calculateSalaray() {
    return 1;
  }
}

//////////////////////////////////////////////////////////////////////////////////////

interface Profile {
  [key: string]: string;
}

const profileInfo: Profile = {
  firstName: "John",
  lastName: "Wick",
};
