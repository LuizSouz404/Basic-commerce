import { Products } from "@prisma/client";
import { BsHandbag, BsHeart } from 'react-icons/bs';
import { SelectionBoxColor } from "../SelectionBoxColor";
import { SelectionBoxSize } from "../SelectionBoxSize";
import { ActionButtonBuy, ActionButtonFav, ActionButtonSection, Container, DescriptionContent, DescriptionSection, ProductPrice, ProductTitle, SelectorWrapper, WrapperImage, WrapperProductInformation } from "./styles";

type DetailProductProps = {
  product: Products;
}

export function DetailProduct({ product }: DetailProductProps) {
  return (
    <Container>

      <WrapperImage>
        <img src={product.thumbnail} alt={product.product_name} />
      </WrapperImage>

      <WrapperProductInformation>
        <ProductTitle>{product.product_name}</ProductTitle>

        <ProductPrice>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(product.product_price)}
        </ProductPrice>

        <div>
          <DescriptionSection>Description</DescriptionSection>
          <DescriptionContent>Straight cut shirt jacket in sturdy, washed denim. Features a pointed collar and buttons down the front. Dropped shoulders and long sleeves with button cuffs. Detachable tie belt at the waist and a rounded hem.</DescriptionContent>
        </div>

        <SelectorWrapper>
          <SelectionBoxColor/>
          <SelectionBoxSize/>
        </SelectorWrapper>

        <ActionButtonSection>
          <ActionButtonFav>
            <BsHeart size={20} />
            Adicionar a lista de desejo
          </ActionButtonFav>
          <ActionButtonBuy>
            <BsHandbag size={20} />
            Adicionar ao carrinho
          </ActionButtonBuy>
        </ActionButtonSection>
      </WrapperProductInformation>
    </Container>
  )
}
