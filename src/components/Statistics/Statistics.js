import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randomColor from '../../helpers/randomColor';

export default function Statistics({ title, items, colors }) {
  return (
    <section className={s['Statistics']}>
      {title && <h2 className={s['Statistics__title']}>Upload stats</h2>}
      <ul className={s['Statistics__list']}>
        {items.map(item => (
          <li
            className={s['Statistics__item']}
            key={item.id}
            style={{
              backgroundColor: colors[randomColor(0, colors.length - 1)],
            }}
          >
            <span className={s['Statistics__label']}>{item.label}</span>
            <span className={s['Statistics__percentage']}>
              {item.percentage}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
