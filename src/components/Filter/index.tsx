import { Container, WrapperFilter } from "./styles";

export function Filter() {
  return (
    <Container>
      <WrapperFilter>
        <li>All</li>
        <li>Shirt</li>
        <li>Legs</li>
        <li>Jacket</li>
      </WrapperFilter>
    </Container>
  )
}