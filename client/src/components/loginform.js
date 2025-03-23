import React, { useState } from "react";
import "./form.css";
import "./buttons.css";
import logo from "./assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [cookieValue, setCookieValue] = useState("");

  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires}; path=/`;
    document.cookie = `${name}=${value}${expires}; path=/admin`;

    getCookie("MERITORIOUS_LIBRARY_LOGIN_STATUS@1616"); // Update state
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split("; ");
    for (let cookie of cookiesArray) {
      if (cookie.startsWith(nameEQ)) {
        return cookie.substring(nameEQ.length);
      }
    }
    return null; 
  };

  function login(event, Params) {
    event.preventDefault();
    let form = document.getElementById(Params);
    let children = form.querySelectorAll("input, textarea, select");

    let findEmpty = Array.from(children).find((element) => element.value.length < 1);
    if (findEmpty) {
      alert("Please fill all the fields");
      return;
    }

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "mylib@16") {
      console.log("Login successful");
      setCookie("MERITORIOUS_LIBRARY_LOGIN_STATUS@1616", "admin", 15);
      navigate("/admin");
    } else {
      alert("Incorrect username or password");
    }
  }

  return (
    <div className="form">
      <h1>
        <img src={logo} alt="logo" />
        Meritorious Library
      </h1>
      <p>The Self Study Point</p>
      <form id="loginform">
        <h2>Staff Login</h2>
        <div className="form__group field formItem">
          <input type="text" className="form__field" placeholder="Username" name="username" id="username" required />
          <label htmlFor="username" className="form__label">
            Username
          </label>
        </div>
        <div className="form__group field formItem">
          <input type="password" className="form__field" name="password" id="password" required />
          <label htmlFor="password" className="form__label">
            Password
          </label>
        </div>
        <div className="buttons">
          <button type="submit" className="loginbutton" onClick={(e) => login(e, "loginform")}>
            Login
          </button>
          <Link to="/admin">
            <button type="button" className="loginbutton">Home</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;