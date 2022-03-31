import Image from "next/image";
import { Container, WrapperActionButton, WrapperDeletedButton, WrapperEditButton, WrapperImage, WrapperProduct } from "./styles";

export function ProductItem() {
  return (
    <Container>
      <WrapperProduct>
        <WrapperImage>
          <Image src="/images/dress.png" layout="fill" alt="Vestido" />
        </WrapperImage>

        <strong>Vestido de bolinha</strong>

        <span>Estoque: 10 un.</span>

        <span>R$ 12,00</span>
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
