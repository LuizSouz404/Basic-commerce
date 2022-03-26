import { Products } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Container, WrapperImage, WrapperInformation } from "./styles";

type CardProps = {
  product: Products;
}

export function CardProduct({product}: CardProps) {
  return (
    <Link href={`/product/${product.id}`} passHref>
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
    </Link>
  )
}
