import { TitleSection } from "../../styles/Tokens";
import { CardProduct } from "../CardProduct";
import { Container, WrapperProducts } from "./styles";

export function TableProducts() {
  return (
    <Container>
      <TitleSection>Product</TitleSection>

      <WrapperProducts>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </WrapperProducts>
    </Container>
  )
}