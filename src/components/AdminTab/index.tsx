import { Container, NavLink, WrapperNav } from "./styles";

export function AdminTab() {
  return (
    <Container>
      <WrapperNav>
        <NavLink>
          Dashboard
        </NavLink>

        <NavLink>
          Products
        </NavLink>

        <NavLink>
          Finances
        </NavLink>
      </WrapperNav>
    </Container>
  )
}
