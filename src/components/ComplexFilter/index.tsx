import Link from "next/link";
import { useRouter } from "next/router";
import { TitleSection } from "../../styles/Tokens";
import { CategoryName, Container, WrapperFilter } from "./styles";

export function ComplexFilter() {
  const router = useRouter();

  console.log(router.pathname.replace("/", ""))

  return (
    <Container>
      <TitleSection>Categories</TitleSection>

      <WrapperFilter gridNumber={5}>
        <Link href="/category/" passHref>
          <div style={{backgroundImage: `url(/images/all.png)`}}>
            <CategoryName>todos</CategoryName>
          </div>
        </Link>
        <Link href="/category/camisa" passHref>
          <div style={{backgroundImage: `url(/images/shirt.png)`}}>
            <CategoryName>camisa</CategoryName>
          </div>
        </Link>
        <Link href="/category/vestido" passHref>
          <div style={{backgroundImage: `url(/images/dress.png)`}}>
            <CategoryName>vestido</CategoryName>
          </div>
        </Link>
        <Link href="/category/calça" passHref>
          <div style={{backgroundImage: `url(/images/pants.png)`}}>
            <CategoryName>calça</CategoryName>
          </div>
        </Link>
        <Link href="/category/casaco" passHref>
          <div style={{backgroundImage: `url(/images/jacket.png)`}}>
            <CategoryName>casaco</CategoryName>
          </div>
        </Link>
      </WrapperFilter>
    </Container>
  )
}
