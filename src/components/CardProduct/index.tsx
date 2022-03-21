import Image from "next/image";
import { Container, WrapperImage, WrapperInformation } from "./styles";

export function CardProduct() {
  return (
    <Container>
      <WrapperImage>
        <Image src="/images/sweater.png" layout="fill" alt="Camisa Social"/>
      </WrapperImage>
      <WrapperInformation>
        <span>Camisa Social</span>
        <strong>$19,90</strong>
      </WrapperInformation>
    </Container>
  )
}