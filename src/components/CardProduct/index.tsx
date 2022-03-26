import { Products } from "@prisma/client";
import Image from "next/image";
import { Container, WrapperImage, WrapperInformation } from "./styles";

type CardProps = {
  product: Products;
}

export function CardProduct({product}: CardProps) {
  return (
    <Container>
      <WrapperImage>
        <Image src={product.thumbnail} layout="fill" alt={product.product_name}/>
      </WrapperImage>
      <WrapperInformation>
        <span>{product.product_name}</span>
        <strong>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(product.product_price)}</strong>
      </WrapperInformation>
    </Container>
  )
}
