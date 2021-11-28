import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={s['transaction-history']}>
      <thead className={s.head}>
        <tr>
          <th className={s['row-head']}>Type</th>
          <th className={s['row-head']}>Amount</th>
          <th className={s['row-head']}>Currency</th>
        </tr>
      </thead>

      <tbody>{transactions.map(TransactionItem)}</tbody>
    </table>
  );
}
TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
