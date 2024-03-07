import { useState } from 'react';

export default function VerifyOTP() {

  const [userId, setUserId] = useState("");
  const [otp, setOtp] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:4000/api/users/' + userId + '/verifyOTP?otp=' + otp.toString())
    .then((res) => res.json())
    .then((res) => {alert(res.message);})
    .catch((err) => console.log(err.message));
  }

  return (
    <div>
        <h1>Verify OTP</h1>
        <p><span>Method & Action: </span>GET /users/:userId/verifyOTP?otp=</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="userId" 
            placeholder='userId'
            value={userId}
            onChange={(e) => setUserId(e.target.value)} />

          <input 
            type="number" 
            min={1000}
            max={9999}
            name="otp" 
            placeholder='otp'
            value={otp}
            onChange={(e) => setOtp(e.target.value)} />

          <input type="submit" value="VERIFY" />
        </form>
    </div>
  );
}