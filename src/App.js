import './App.css';
import user from './data/user.json';
import { Profile } from './components/Profile/Profile';
import { StatisticsTitle } from './components/Statistics/StatisticsTitle';
import { ProfileTitle } from './components/Profile/ProfileTitle';
import { StatisticsList } from './components/Statistics/StatisticsList';
import { FriendsTitle } from './components/FriendList/FriendTitle';
import { FriendsList } from './components/FriendList/FriendList';
import { TransactionHistoryTable } from './components/TransactionHistory/TransactionHistoryTable';
import { TransactionTitle } from './components/TransactionHistory/TransactionTitle';

function App() {
  return (
    <div className="App">
      <main>
        <ProfileTitle />
      <Profile {...user} />
      <StatisticsTitle />
      <StatisticsList />
      <FriendsTitle />
      <FriendsList />
      <TransactionTitle />
      <TransactionHistoryTable />
      </main>
    </div>
  );
}

export default App;
