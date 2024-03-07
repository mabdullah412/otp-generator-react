import './App.css';
import CreateUser from './components/CreateUser';
import GenerateOTP from './components/GenerateOTP';
import UsersTable from './components/UsersTable';

export default function App() {

  return (
    <div className="App">
        <UsersTable />
        <CreateUser />
        <GenerateOTP />
    </div>
  );
}
