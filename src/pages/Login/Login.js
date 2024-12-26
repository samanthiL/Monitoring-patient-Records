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
      Navigate("/home")
    }
    else if (role === 'Admin') {
      Navigate("/Appointments")
    }
    else {
      Navigate("/userProfile")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleClick = (e,heading,newRole) => {
    e.preventDefault();
    setHeading(heading);
    setRole(newRole)
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

            {visible ? <a href="dd" onClick={(e) => handleClick(e,"Doctor Portal Login",'Doctor')}>Doctor Login portal</a> : null}
            {visible ? <a href="dd" onClick={(e) => handleClick(e,"Admin Portal Login",'Admin')}>Admin Login portal</a> : null}


          </div>

          <button type="submit" className="submitBtn">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default Login;
