
import LoginForm from "../components/loginform";
import { useEffect,useNavigate } from "react";

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
      return null; // Cookie not found
    };
    const cookieValue = getCookie("MERITORIOUS_LIBRARY_LOGIN_STATUS@1616")
    if (cookieValue) {
      navigate('/admin')
     

    }
    ;
  }, []);
  return (
    <LoginForm />
  );
}

export default LoginPage;


