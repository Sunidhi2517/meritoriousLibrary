import LoginForm from "../components/loginform";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
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
    const cookieValue = getCookie("MERITORIOUS_LIBRARY_LOGIN_STATUS@1616")
    if (cookieValue) {
      navigate('/admin')
     

    }
    ;
  }, [navigate]);
  return (
    <LoginForm />
  );
}

export default LoginPage;