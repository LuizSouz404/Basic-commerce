import { Products } from "@prisma/client";
import { TitleSection } from "../../styles/Tokens";
import { CardProduct } from "../CardProduct";
import { Container, WrapperProducts } from "./styles";

type ProductsProps = {
  products: Products[]
}

export function TableProducts({products}: ProductsProps) {
  return (
    <Container>
      <TitleSection>Product</TitleSection>

      <WrapperProducts>
        {products.map(product => (
          <CardProduct key={product.id} product={product}/>
        ))}
      </WrapperProducts>
    </Container>
  )
}
