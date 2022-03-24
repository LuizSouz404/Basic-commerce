import Image from "next/image";
import { Container, WrapperActionButton, WrapperEditButton, WrapperDeletedButton, WrapperImage, WrapperProduct } from "./styles";

export function ProductItem() {
  return (
    <Container>
      <WrapperProduct>
        <WrapperImage>
          <Image src="/images/dress.png" layout="fill" alt="Vestido" />
        </WrapperImage>

        <strong>Vestido de bolinha</strong>

        <span>Estoque: 10 un.</span>
      </WrapperProduct>

      <WrapperActionButton>
        <WrapperEditButton>
          edit
        </WrapperEditButton>
        <WrapperDeletedButton>
          deleted
        </WrapperDeletedButton>
      </WrapperActionButton>
    </Container>
  )
}
