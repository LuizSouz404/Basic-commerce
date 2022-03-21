import Image from "next/image";
import { Container, WrapperImage, WrapperInformation } from "./styles";

export function CardItem() {
  return (
    <Container>
      <WrapperImage>
        <Image src="/images/sweater.png" layout="fill" alt="Camisa Social"/>
      </WrapperImage>
      <WrapperInformation>
        <strong>Camisa Social</strong>
        <span>$19,90</span>
      </WrapperInformation>
    </Container>
  )
}