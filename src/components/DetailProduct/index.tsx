import { Products } from "@prisma/client";
import { useState } from "react";
import { BsHandbag, BsHeart } from 'react-icons/bs';
import { SelectionBoxColor } from "../SelectionBoxColor";
import { SelectionBoxSize } from "../SelectionBoxSize";
import { ActionButtonBuy, ActionButtonFav, ActionButtonSection, Container, DescriptionContent, DescriptionSection, ProductPrice, ProductTitle, SelectorWrapper, WrapperImage, WrapperProductInformation } from "./styles";

type DetailProductProps = {
  product: Products;
}

const data = [
  {
    id: 1,
    name: "jacket",
    image: "/images/jacket.png",
  },
  {
    id: 2,
    name: "dress",
    image: "/images/dress.png",
  },
  {
    id: 3,
    name: "pants",
    image: "/images/pants.png",
  },
  {
    id: 4,
    name: "shirt",
    image: "/images/shirt.png",
  },
  {
    id: 4,
    name: "sweater",
    image: "/images/sweater.png",
  }
]

export function DetailProduct({ product }: DetailProductProps) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Container>

      <WrapperImage>
        <div>
        {
          data.length > 1 && (
            data.map((image, index) => (
              <img key={image.id} src={image.image} alt={image.name} onClick={() => setCurrentImage(index)} />
            ))
            )
          }
        </div>
        <img src={data[currentImage].image} alt={data[currentImage].name} />
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
