import Image from "next/image";
import Link from "next/link";
import { Container, WrapperButton, WrapperLogo } from "./styles";

export function Header() {
  return (
    <Container>
      <WrapperButton>
        <Image src="/images/Menu.svg" layout="fill" alt="Menu Button"/>
      </WrapperButton>

      <Link href="/" passHref>
        <WrapperLogo>
          <Image src="/images/basics.svg" layout="fill" alt="Logo"/>
        </WrapperLogo>
      </Link>


      <WrapperButton>
        <Image src="/images/Bag.svg" layout="fill" alt="Menu Button"/>
      </WrapperButton>
    </Container>
  )
}
