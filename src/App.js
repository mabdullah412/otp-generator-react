import './App.css';
import CreateUser from './components/CreateUser';
import GenerateOTP from './components/GenerateOTP';
import UsersTable from './components/UsersTable';
import VerifyOTP from './components/VerifyOTP';

export default function App() {

  return (
    <div className="App">
        <UsersTable />
        <CreateUser />
        <GenerateOTP />
        <VerifyOTP />
    </div>
  );
}
