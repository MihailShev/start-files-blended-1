import CryptoTransactions from '../CryptoTransactions/CryptoTransactions';
import css from './CryptoHistory.module.css';

const CryptoHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>№</th>
          <th className={css.th}>PRICE</th>
          <th className={css.th}>AMOUNT</th>
          <th className={css.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        <CryptoTransactions transactions={items} />
      </tbody>
    </table>
  );
};

export default CryptoHistory;
