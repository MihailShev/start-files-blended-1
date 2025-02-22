import css from './CryptoTransactions.module.css';
import { format } from 'date-fns';

function CryptoTransactions({ transactions }) {
  return (
    <>
      {transactions.map(transaction => (
        <tr key={transaction.id} className={css.tr}>
          <td className={css.td}>{transaction.id}</td>
          <td className={css.td}>{transaction.price}</td>
          <td className={css.td}>{transaction.amount}</td>
          <td className={css.td}>{format(transaction.date, 'Pp')}</td>
        </tr>
      ))}
    </>
  );
}

export default CryptoTransactions;
