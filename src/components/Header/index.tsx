import Image from "next/image";
import { Container, WrapperButton, WrapperLogo } from "./styles";

export function Header() {
  return (
    <Container>
      <WrapperButton>
        <Image src="/images/Menu.svg" layout="fill" alt="Menu Button"/>
      </WrapperButton>

      <WrapperLogo>
        <Image src="/images/basics.svg" layout="fill" alt="Logo"/>
      </WrapperLogo>


      <WrapperButton>
        <Image src="/images/Bag.svg" layout="fill" alt="Menu Button"/>
      </WrapperButton>
    </Container>
  )
}