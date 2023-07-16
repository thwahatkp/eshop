export type ApiResponse = { status: number; data?: object; message?: string };

export enum MongoID {
  "64b3a6edac403b27eed20d5c" = "MENU",
  MENU = "64b3a6edac403b27eed20d5c",
}

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}
