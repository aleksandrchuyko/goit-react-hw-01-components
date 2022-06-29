import { ProfileCard } from './Profile/ProfileCard/ProfileCard';
import user from '../data/user.json';
import { Statistic } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
      }}
    >
      <ProfileCard user={user} />
      <Statistic title="upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </main>
  );
};
