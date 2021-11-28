import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return <ul className={s['friend-list']}>{friends.map(FriendListItem)}</ul>;
}
FriendList.prototype = {
  friends: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
