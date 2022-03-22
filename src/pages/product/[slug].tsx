import { NextPage } from "next";
import { DetailProduct } from "../../components/DetailProduct";
import { Header } from "../../components/Header";

const Product: NextPage = () => {
  return (
    <>
      <Header />
      <DetailProduct />
    </>
  )
}

export default Product
