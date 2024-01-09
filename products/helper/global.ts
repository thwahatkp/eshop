import multer from "multer";
import path from "path";
import fs from "fs";
import model from "../model";
import { CounterType } from "../model/Counter";
import moment from "moment";

declare global {
  let isNull: (field: any) => boolean;
  let getNextSequenceValue: (field: string) => number | string;
}

export function isNull(field: any): boolean {
  return field === null || field === undefined || field === "" || field === "undefined";
}

export const multerUpload = (folder = "") => multer({ storage: storage(folder) });

export const storage = (folder: string) =>
  multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = `public/uploads/${folder}`;
      fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const fileExtension = path.extname(file.originalname);
      const originalFileName = path.basename(file.originalname, fileExtension);
      const fileName = originalFileName + "-" + uniqueSuffix + fileExtension;
      cb(null, fileName);
    },
  });

export class NextSequenceValue {
  private id: string;
  unique_id: string;
  private data: CounterType | null;
  constructor(counter: string) {
    this.id = counter;
  }

  async init() {
    this.data = (await model.Counter.findOne({ _id: this.id })) || { _id: null, value: 0 };
    this.data.value = Number(this.data.value) + 1;
    return this.data.value;
  }

  async uniqueId(start: string | number) {
    let count = await this.init();
    this.unique_id = `${moment().format("YYMMDD")}${start}${count.toString().padStart(5, "0")}`;
    return this.unique_id;
  }

  async save() {
    const result = await model.Counter.findOneAndUpdate({ _id: this.id }, { $inc: { value: 1 } }, { new: true, upsert: true });
    return result;
  }
}

export const getNextSequenceValue = async (counter: string) => {
  const result = await model.Counter.findOne({ _id: counter }, { $inc: { value: 1 } }, { new: true, upsert: true });
  return result.value;
};

(global as any).isNull = isNull;
(global as any).getNextSequenceValue = getNextSequenceValue;
