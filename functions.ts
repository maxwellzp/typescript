function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20);

function sendEmail(email: string, message: string, subject?: string): boolean {
  console.log(`email was sent successfully`);
  return true;
}
sendEmail("test@gmail.com", "TS content", "Attention");
sendEmail("test@gmail.com", "TS content");

function sendData(data: string | number | boolean): void {
  if (typeof data === "string") {
    console.log("STRING", data.toUpperCase());
  } else if (typeof data === "number") {
    console.log("NUMBER", data.toFixed(8));
  } else {
    console.log("UNION TYPE", data);
  }
}

sendData("test");
sendData(100);
sendData(true);

type LogLevel = "INFO" | "WARNING" | "ERROR" | "CRITICAL";

function createLog(message: string, logLevel: LogLevel = "INFO"): void {
  console.log(`[${logLevel}] ${message}`);
}
createLog("user id not found", "ERROR");
