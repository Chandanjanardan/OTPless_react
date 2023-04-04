
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './login.css';

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [waName, setWaName] = useState('');
  const [waNumber, setWaNumber] = useState('');

  useEffect(() => {
    window.otpless = (otplessUser) => {
      const name = otplessUser.waName;
      const number = otplessUser.waNumber;

      setIsAuthenticated(true);
      setWaName(name);
      setWaNumber(number);
    };
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');

  const handleLogin = (e,waName) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('OTP:', otp);
  };

  return (
    <section className='mainContainer'>
      <div id='main'>
        <div id='otplesslogin'>
          <h1 className='login-title-otpless'>Login With OTPless</h1>
          {isAuthenticated ? (
            <div>
               <Navbar waName={waName} />
              <h1 id="welcome">Hi {waName} ({waNumber})</h1>
              <button id='goto-app'>
                <Link to='/app'>Go to App</Link>
              </button>
            </div>
          ) : (
            <button id='otpless'>Authenticate with WhatsApp</button>
          )}
        </div>
      </div>

      <div className='login-container'>
        <h1 className='login-title'>Login With Hassle and OTP</h1>
        <form className='login-form' onSubmit={handleLogin}>
          <label className='login-label'>
            Username:
            <input
              className='login-input'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label className='login-label'>
            Password:
            <input
              className='login-input'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label className='login-label'>
            Email:
            <input
              className='login-input'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label className='login-label'>
            OTP:
            <input
              className='login-input'
              type='text'
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </label>
          <br />
          <button className='login-button' type='submit'>
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
