import crypto from 'crypto';
import multer from 'multer';
import { extname, resolve } from 'path';

// eslint-disable-next-line import/no-anonymous-default-export
const storage =  multer.diskStorage({
  destination: resolve("public", "images"),
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, res) => {
      if (err) return cb(err, "error in encrypt name");
      return cb(null, res.toString('hex') + extname(file.originalname));
    });
  },
});


export { storage };

