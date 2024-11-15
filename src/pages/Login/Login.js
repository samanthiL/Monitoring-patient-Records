import React, { useState } from 'react';
import './login.css';

const Login = () => {
  
  const [formData, setFormData] = useState({
    userName:'',
    password :''
});


  const submitForm =(e)=>{
    e.preventDefault();
console.log("formdata",formData)
  }

  const handleChange =(e)=>{
    const{ name,value} = e.target;
    setFormData({...formData,[name]:value})
  }
  return (

    <div>
            <h2> Patient Portal Login </h2>

   
    <div className="login">
      <div className="title"> 
         
         <h2> Login</h2> 
</div>
        <form className="forms" onSubmit={submitForm}>
        <div className="item"> 
        <label>User name</label> 
           <input type="text"  name="userName" value={formData.userName} onChange={handleChange}/>

        </div>
        <div className="item"> 
<label>Password</label>
           <input type="password"  name="password" value={formData.password}  onChange={handleChange}/>

  </div>   
  <div className="links">
    <a href="ss">Forgot password</a>
    <a href="dd">Doctor Login portal</a>

  </div>

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
        
        <button type="submit" className="submitBtn">Submit</button>

        </form>
    </div>
    </div>
  );
}

export default Login;