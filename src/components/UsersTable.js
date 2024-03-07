import './UsersTable.css';
import { useEffect, useState } from "react";

export default function UsersTable() {

    const [users, setUsers] = useState([]);

    function getUsers() {
      fetch('http://localhost:4000/api/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.users);
        setUsers(data.users);
      })
      .catch((err) => console.log(err.message));
    }
  
    useEffect(() => getUsers, []);

    return (
      <div>
        <h1>Users table</h1>
        <p><span>Query: </span>GET /users</p>
        <button onClick={getUsers}>Refresh</button>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>firstName</th>
              <th>phoneNumber</th>
              <th>otp</th>
              <th>otp_expiration_date</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.otp}</td>
                  <td>
                    {/* {user.otp_expiration_date.toDate()} */}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
}