class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
