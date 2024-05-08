class AppError extends Error {
  message: string | null;
  code: any;
  keyValue?: any;
  path: string;
  data: object;

  constructor(code: number, message: string | null, data?: object) {
    super(message);
    this.code = code;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
