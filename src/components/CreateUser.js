import './CreateUser.css';
import { useState } from 'react';

export default function CreateUser() {

  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('phoneNumber', phoneNumber);

    // convert to x-www-form-urlencoded
    formData = new URLSearchParams(formData);

    fetch('http://localhost:4000/api/users', {
      method: 'POST',
      body: formData
    })
    .then((res) => res.json())
    .then((res) => {handleResponse(res);})
    .catch((err) => console.log(err.message));
  }

  function handleResponse(data) {
    alert(data.message);
  }

  return (
    <div>
      <h1>Create User</h1>
      <p><span>Query: </span>POST /users</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="firstName" 
          placeholder='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />

        <input 
          type="text" 
          name="phoneNumber" 
          placeholder='phoneNumber'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)} />

        <input type="submit" value="CREATE" />
      </form>
    </div>
  );
}