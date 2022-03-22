import { TitleSection } from "../../styles/Tokens";
import { Container, Selector, ColorSelection, WrapperSelector } from "./styles";

export function SelectionBoxColor() {
  return (
    <Container>
      <TitleSection>Cor</TitleSection>

      <WrapperSelector>
        <Selector><ColorSelection style={{background: "linear-gradient(45deg, rgba(250,107,107,1) 0%, rgba(237,9,117,1) 100%)"}}/></Selector>
        <Selector><ColorSelection style={{background: "red"}}/></Selector>
        <Selector><ColorSelection style={{background: "linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"}}/></Selector>
        <Selector><ColorSelection style={{background: "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}/></Selector>
      </WrapperSelector>
    </Container>
  )
}
