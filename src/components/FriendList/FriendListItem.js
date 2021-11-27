import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li className={s.item} key={id}>
      {isOnline ? (
        <span className={s.status && s['status--online']}>{isOnline}</span>
      ) : (
        <span className={s.status && s['status--offline']}>{isOnline}</span>
      )}

      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
FriendListItem.prototype = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
