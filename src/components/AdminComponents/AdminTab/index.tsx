import Link from "next/link";
import { Container, NavLink, WrapperNav } from "./styles";

export function AdminTab() {
  return (
    <Container>
      <WrapperNav>
        <Link href="/admin/dashboard" passHref>
          <NavLink>
            Dashboard
          </NavLink>
        </Link>


        <Link href="/admin/products" passHref>
          <NavLink>
            Products
          </NavLink>
        </Link>

        <Link href="/admin/finances" passHref>
          <NavLink>
            Finances
          </NavLink>
        </Link>
      </WrapperNav>
    </Container>
  )
}
