import { Products } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { DetailProduct } from "../../components/DetailProduct";
import { Header } from "../../components/Header";
import { prisma } from "../../lib/prisma";

type ProductProps = {
  product: Products
}

const Product = ({ product }: ProductProps) => {
  console.log(product)

  return (
    <>
      <Head>
        <title>Basics | {product.product_name.charAt(0).toUpperCase() + product.product_name.slice(1)}</title>
      </Head>
      <Header />
      <DetailProduct product={product}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const id = params?.slug as string;

  let products = await prisma.products.findUnique({
    where: {
      id
    }
  });

  const data = JSON.stringify(products)

  return {
    props: {
      product: JSON.parse(data)
    }
  }
}

export default Product
