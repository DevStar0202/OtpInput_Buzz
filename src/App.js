import { useState } from 'react';
import './App.css';
import OtpInput from './Components/OtpInput';

export default function App() {
  const [otp, setOtp] = useState('');
  const onChange = (value) => setOtp(value);

  return (
    <div className='container'>
      <h1>React JavaScript OTP Input</h1>
      <a target="#" href="https://github.com/massimo1220">visit creator</a>
      <br/>
      <br/>
      <OtpInput value={otp} valueLength={6} onChange={onChange} />
      <br/>
      <br/>
      <h2>New features.</h2>
      <h3>1. autofocus</h3>
      <h3>2. delete key</h3>
      <h3>3. arrow right & left key</h3>
      <h3>4. select</h3>
      <h3>5. only delete when the next values is 'null'</h3>
      <h3>6. ctrl + c and ctrl + v</h3>
      <h3>7. only number</h3>
      <h3>8. change Length of numbers (now: 6)</h3>
    </div>
  );
}
