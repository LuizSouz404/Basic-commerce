import { Container } from "./styles";

import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import { MdAttachMoney } from 'react-icons/md';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <FiArrowUpCircle color="#5EEB5B" size={24}/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(17.00)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <FiArrowDownCircle color="#ED1C24" size={24}/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(12.00)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <MdAttachMoney size={24}/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(5.00)}
        </strong>
      </div>
    </Container>
  )
}
