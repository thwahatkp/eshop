import multer from "multer";
import path from "path";
import fs from "fs";

export function isNull(field: any): boolean {
  return field === null || field === undefined || field === "" ||  field === "undefined";
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
