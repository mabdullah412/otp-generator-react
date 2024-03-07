import { useState } from 'react';

export default function GenerateOTP() {

  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append('phoneNumber', phoneNumber);

    // convert to x-www-form-urlencoded
    formData = new URLSearchParams(formData);

    fetch('http://localhost:4000/api/users/generateOTP', {
      method: 'POST',
      body: formData
    })
    .then((res) => res.json())
    .then((res) => {
      let msg = res.message;
      if (res['id']) {
        msg += ' for user ' + res.id;
      }
      alert(msg);
    })
    .catch((err) => console.log(err.message));
  }

  return (
    <div>
        <h1>Generate OTP</h1>
        <p><span>Method & Action: </span>POST /users/generateOTP</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="phoneNumber" 
            placeholder='phoneNumber'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)} />

          <input type="submit" value="GENERATE" />
        </form>
    </div>
  );
}