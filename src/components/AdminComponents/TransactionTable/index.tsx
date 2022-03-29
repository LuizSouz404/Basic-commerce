import { MiniThumbsProducts } from '../MiniThumbsProdcut';
import { Container } from './styles';

export const TransactionsTable = () => {
  let transactions = [{id: "1"}, {id: "2"}];

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Itens</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>Joãozin</td>
              <td><MiniThumbsProducts /></td>
              <td className="">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(150)}
              </td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(Date.now())
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
