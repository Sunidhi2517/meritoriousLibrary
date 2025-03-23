import Queries from "../components/queries";
import '../components/header.css';
import logo from '../components/assets/logo.jpeg';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const getCookie = (name) => {
  const nameEQ = name + "=";
  const cookiesArray = document.cookie.split("; ");
  for (let cookie of cookiesArray) {
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null; 
};

function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const value = getCookie("MERITORIOUS_LIBRARY_LOGIN_STATUS@1616");
    if (!value) {
      navigate('/');
    }
  }, [navigate]);

  const LogOut = () => {
    document.cookie = `MERITORIOUS_LIBRARY_LOGIN_STATUS@1616=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `MERITORIOUS_LIBRARY_LOGIN_STATUS@1616=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/admin;`;
    window.location.href = '/';
  };

  return (
    <>
      <header className='header'>
        <img src={logo} alt='logo' />
        <button onClick={LogOut}>LogOut</button> 
      </header>
      <Queries backendURL="https://meritoriouslibrary.onrender.com/api" />
    </>
  );
}

export default AdminPage;