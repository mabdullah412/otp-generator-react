import './UsersTable.css';
import { useEffect, useState } from "react";
const moment = require("moment");

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
        <h1>Users Table</h1>
        <p><span>Method & Action: </span>GET /users</p>
        <button className='large-btn' onClick={getUsers}>Refresh</button>
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
                  <td>{user.otp_expiration_date && moment(user.otp_expiration_date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
}
