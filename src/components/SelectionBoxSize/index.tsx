import { useState } from "react";
import { TitleSection } from "../../styles/Tokens";
import { Container, Selector, SizeSelection, WrapperSelector } from "./styles";

const sizes = [
  "P", "M", "G", "GG"
]

export function SelectionBoxSize() {
  const [selected, setSelected] = useState("");

  return (
    <Container>
      <TitleSection>Tamanho</TitleSection>

      <WrapperSelector>
        {sizes.map((size, index) => (
          <Selector
            key={index}

            onClick={() => setSelected(size)}
          >
            <SizeSelection className={selected === size ? "active" : ""}>{size}</SizeSelection>
          </Selector>
        ))}
      </WrapperSelector>
    </Container>
  )
}
