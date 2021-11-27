import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr key={id} className={s['table-row']}>
      <td className={s['table-data']}>{type}</td>
      <td className={s['table-data']}>{amount}</td>
      <td className={s['table-data']}>{currency}</td>
    </tr>
  );
}
TransactionItem.prototype = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
