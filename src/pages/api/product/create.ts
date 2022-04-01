/* eslint-disable import/no-anonymous-default-export */
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from "next";
import nc from 'next-connect';
import { storage } from '../../../config/multer';
import { prisma } from '../../../lib/prisma';

export const config = {
  api: {bodyParser: false}
}

interface MulterRequest extends NextApiRequest {
  file: Express.Multer.File;
}

const handler = nc()
let upload = multer({storage: storage});
let uploadFile = upload.single("file");

handler.use(uploadFile)
handler.post(async (request: MulterRequest, response: NextApiResponse) => {
  const {product_name, product_price, product_stock, category} = request.body;

  const product = await prisma.products.create({
    data: {
      product_name: product_name,
      product_price: parseInt(product_price),
      product_stock: parseInt(product_stock),
      category: category,
      thumbnail: `/images/${request.file.filename}`
    }
  })

  return response.status(201).json(product);
})

export default handler;

