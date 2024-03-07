import './App.css';
import CreateUser from './components/CreateUser';
import UsersTable from './components/UsersTable';

export default function App() {

  return (
    <div className="App">
        <UsersTable />
        <CreateUser />
    </div>
  );
}
