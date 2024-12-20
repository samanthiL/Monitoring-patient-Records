import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const [heading, setHeading] = useState('Patient Portal Login');
  const [role, setRole] = useState('Patient')

  const [visible, setVisible] = useState(true)

  let Navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("role",role)

    console.log("formdata", formData)
    if (role === 'Doctor') {
      Navigate("/doctor")
    }
    else {
      Navigate("/patient")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleClick = (e) => {
    e.preventDefault();
    setHeading("Doctor Portal Login");
    setRole('Doctor')
    setVisible(false);
    console.log('The link was clicked.');
  };

  return (
    <div>
      <h2> {heading} </h2>
      <div className="login">
        <div className="title">
          <h2> Login</h2>
        </div>
        <form className="forms" onSubmit={submitForm}>
          <div className="item">
            <label>User name</label>
            <input type="text" name="userName" value={formData.userName} onChange={handleChange} />

          </div>
          <div className="item">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />

          </div>
          <div className="links">
            <a href="ss">Forgot password</a>
            {visible ? <a href="dd" onClick={handleClick}>Doctor Login portal</a> : null}


          </div>

          <button type="submit" className="submitBtn">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default Login;




{/* <div className="links">
          <a href="#">Forgot Password?</a>
          <a href="#">Portal Admin Login</a>
        </div>
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me?</label>
        </div>

        <button type="submit">Sign In</button> */}


{/*
        
        submit button  center
        <div className="btn">
        <button type="submit" className="submitBtn">Submit</button>

        
        </div> */}
