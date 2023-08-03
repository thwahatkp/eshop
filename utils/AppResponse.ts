class AppResponse {
  message: string | null;
  data: object | null;
  statusCode: number;
  constructor(message: string | null, data: object | null, statusCode: number) {
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }
}

export default AppResponse;
