import Image from "next/image";
import { Container, WrapperActionButton, WrapperImage, WrapperProduct } from "./styles";

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
        <button>
          edit
        </button>
        <button>
          deleted
        </button>
      </WrapperActionButton>
    </Container>
  )
}
