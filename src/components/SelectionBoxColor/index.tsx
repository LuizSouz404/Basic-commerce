import { useState } from "react";
import { TitleSection } from "../../styles/Tokens";
import { ColorSelection, Container, Selector, WrapperSelector } from "./styles";

const color = [
  {
    id: "1",
    color: "Vermelho e rosa",
    hex: "linear-gradient(45deg, rgba(250,107,107,1) 0%, rgba(237,9,117,1) 100%)"
  },
  {
    id: "2",
    color: "Vermelho",
    hex: "#f73838"
  },
  {
    id: "3",
    color: "Roxo. vermelho e amarelo",
    hex: "linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
  },
  {
    id: "4",
    color: "Preto, Azul escuro e azul claro",
    hex: "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }
]

export function SelectionBoxColor() {
  const [selected, setSelected] = useState("");

  return (
    <Container>
      <TitleSection>Cor</TitleSection>

      <WrapperSelector>
        {color.map(data => (
          <Selector key={data.id} className={selected === data.id ? "active" : ""}  onClick={() => setSelected(data.id)}>
            <ColorSelection
              style={{background: data.hex}}/>
          </Selector>
        ))}
      </WrapperSelector>
    </Container>
  )
}
