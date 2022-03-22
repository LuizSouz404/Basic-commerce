import { TitleSection } from "../../styles/Tokens";
import { Container, Selector, SizeSelection, WrapperSelector } from "./styles";

export function SelectionBoxSize() {
  return (
    <Container>
      <TitleSection>Tamanho</TitleSection>

      <WrapperSelector>
        <Selector><SizeSelection>P</SizeSelection></Selector>
        <Selector><SizeSelection>M</SizeSelection></Selector>
        <Selector><SizeSelection>G</SizeSelection></Selector>
        <Selector><SizeSelection>GG</SizeSelection></Selector>
      </WrapperSelector>
    </Container>
  )
}
