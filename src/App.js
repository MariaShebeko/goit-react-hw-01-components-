import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import stats from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import colors from './data/colors.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} items={stats} colors={colors} />
      <FriendList friends={friends} />,
      <TransactionHistory transactions={transactions} />,
    </div>
  );
}
