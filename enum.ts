enum OperationType {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
  TRANSFER = "TRANSFER",
}

enum OperationCode {
  SUCCESS = 1001,
  FAILED = 1002,
}

function confirmOperation(
  operation: OperationType,
  cashierId: number,
  sendEmail: boolean = true
): OperationCode {
  return OperationCode.SUCCESS;
}

const result = confirmOperation(OperationType.DEPOSIT, 1, true);
console.log(`Result: ${result}`);
