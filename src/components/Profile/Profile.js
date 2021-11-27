import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s['Profile']}>
      <div className={s['Profile__description']}>
        <img src={avatar} alt={username} className={s['Profile__avatar']} />
        <p className={s['Profile__name']}>{username}</p>
        <p className={s['Profile__tag']}>@{tag}</p>
        <p className={s['Profile__location']}>{location}</p>
      </div>

      <ul className={s['stats']}>
        <li className={s['stats__item']}>
          <span className={s['stats__label']}>Followers</span>
          <span className={s['stats__quantity']}>{stats.followers}</span>
        </li>
        <li className={s['stats__item']}>
          <span className={s['stats__label']}>Views</span>
          <span className={s['stats__quantity']}>{stats.views}</span>
        </li>
        <li className={s['stats__item']}>
          <span className={s['stats__label']}>Likes</span>
          <span className={s['stats__quantity']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
