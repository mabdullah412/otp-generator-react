import './App.css';
import Header from './components/Header';
import CreateUser from './components/CreateUser';
import GenerateOTP from './components/GenerateOTP';
import VerifyOTP from './components/VerifyOTP';
import UsersTable from './components/UsersTable';

export default function App() {

  return (
    <div className='app'>
      <Header />
      <div className="app__content">
        <CreateUser />
        <GenerateOTP />
        <VerifyOTP />
        <UsersTable />
      </div>
    </div>
  );
}
