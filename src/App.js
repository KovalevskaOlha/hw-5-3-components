import './App.css';
import user from './data/user.json';
import { Profile } from './components/Profile/Profile';
import { StatisticsTitle } from './components/Statistics/StatisticsTitle';
import { ProfileTitle } from './components/Profile/ProfileTitle';
import { StatisticsList } from './components/Statistics/StatisticsList';


function App() {
  return (
    <div className="App">
      <main>
        <ProfileTitle />
      <Profile {...user} />
      <StatisticsTitle />
      <StatisticsList />
      </main>
    </div>
  );
}

export default App;
