import React, {  useState } from 'react';
import "./form.css";
import  "./buttons.css";
import logo from "./assets/logo.jpeg";
import { Link, useNavigate } from 'react-router-dom';


 



const LoginForm = () => {
const navigate = useNavigate();
const [cookieValue, setCookieValue] = useState("");

// Function to set a cookie
const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  console.log('yhannn')
  document.cookie = `${name}=${value}${expires}; path=/login`;
  document.cookie = `${name}=${value}${expires}; path=/admin`;

  getCookie("MERITORIOUS_LIBRARY_LOGIN_STATUS@1616"); // Update state
};

// Function to get a cookie value
const getCookie = (name) => {
  const nameEQ = name + "=";
  const cookiesArray = document.cookie.split("; ");
  for (let cookie of cookiesArray) {
    if (cookie.startsWith(nameEQ)) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null; // Cookie not found
};





  function login(event, Params) {
    {
  
      event.preventDefault();
      let form = document.getElementById(Params)
      let children = form.querySelectorAll('input, textarea, select');
      let findEmpty = Array.from(children).find((element) => {
        if (element.value.length < 1) { return true }
        return false
  
      });

      
      if (findEmpty) {
        alert("please fill all the fields");
      } else if(document.getElementById('password').value === 'mylib@16' && document.getElementById('Username').value === 'admin' ) {
        console.log('login')
        setCookie("MERITORIOUS_LIBRARY_LOGIN_STATUS@1616", "admin", 15)
        navigate('/admin')
      }else{
        alert("Incorrect username and password");
      }
    };
  };

  return (
    <div className='form' >
      <h1><img src={logo} alt='logo'></img>Meritorious Library</h1>
      <p>The Self study point</p>
      <form id='loginform'>
        <h2>Staff Login</h2>
        <div class="form__group field formItem">
              <input type='text' className="form__field" placeholder='Username' name='Username' id='Username' required={true} />
              <label for='Username' className="form__label">Username</label>
            </div><div className="form__group field formItem" >
              <input type='password' className="form__field"  name='password' id='password' required={true} />
              <label for='password' className="form__label">'Password'</label>
            </div>
    <div className='buttons'>
          <button type='submit' className='loginbutton' onClick={(e) => login(e, 'loginform')} value='login'>Login</button>
        <Link to='/'> <button type='submit' className='loginbutton' value='login'>Home</button></Link> 

        </div>
</form>
    </div>
  )
}



export default LoginForm;
