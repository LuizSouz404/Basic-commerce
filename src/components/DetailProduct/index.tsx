import Image from "next/image";
import { ActionButtonBuy, ActionButtonFav, ActionButtonSection, Container, DescriptionContent, DescriptionSection, ProductPrice, ProductTitle, WrapperImage, WrapperProductInformation } from "./styles";

export function DetailProduct() {
  return (
    <Container>

      <WrapperImage>
        <img src="/images/dress.png" alt="Vestido" />
      </WrapperImage>

      <WrapperProductInformation>
        <ProductTitle>Ribbed polo-Neck Jumper</ProductTitle>

        <ProductPrice>$39.90</ProductPrice>

        <div>
          <DescriptionSection>Description</DescriptionSection>
          <DescriptionContent>Straight cut shirt jacket in sturdy, washed denim. Features a pointed collar and buttons down the front. Dropped shoulders and long sleeves with button cuffs. Detachable tie belt at the waist and a rounded hem.</DescriptionContent>
        </div>

        <ActionButtonSection>
          <ActionButtonFav>
            {/* <BsHeart size={20} /> */}
            Adicionar a lista de desejo
          </ActionButtonFav>
          <ActionButtonBuy>
            {/* <BsHandbag size={20} /> */}
            Adicionar ao carrinho
          </ActionButtonBuy>
        </ActionButtonSection>
      </WrapperProductInformation>
    </Container>
  )
}
