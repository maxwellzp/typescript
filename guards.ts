class HttpError {
  statusCode: number;
  statusCodeTxt: string;
}

class AppError {
  message: string;
  level: string;
}

function handle(err: HttpError | AppError) {
  if (err instanceof HttpError) {
    return console.log(`${err.statusCode}: ${err.statusCodeTxt}`);
  }
  console.log(`${err.level}: ${err.message}`);
}

type UserType = "admin" | "regular" | "manager";

function createUser(email: string, password: string, type: UserType): boolean {
  return true;
}
createUser("test@gmail.com", "qwerty", "manager");
