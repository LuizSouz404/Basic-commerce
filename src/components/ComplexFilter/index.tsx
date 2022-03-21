import { CategoryName, Container, WrapperFilter } from "./styles";

export function ComplexFilter() {
  return (
    <Container>
      <strong>Categories</strong>
      <WrapperFilter gridNumber={4}>
        <div style={{backgroundImage: `url(/images/shirt.png)`}}>
          <CategoryName>camisa</CategoryName>
        </div>
        <div style={{backgroundImage: `url(/images/dress.png)`}}>
          <CategoryName>vestido</CategoryName>
        </div>
        <div style={{backgroundImage: `url(/images/pants.png)`}}>
          <CategoryName>calça</CategoryName>
        </div>
        <div style={{backgroundImage: `url(/images/jacket.png)`}}>
          <CategoryName>casaco</CategoryName>
        </div>
      </WrapperFilter>
    </Container>
  )
}