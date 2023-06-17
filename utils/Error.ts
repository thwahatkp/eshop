class CustomError extends Error {
    statusCode: number;
    code: string | number;
    path?:any
    keyValue?:any
    constructor(message: string | undefined, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default CustomError;