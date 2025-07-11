import {
  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  "./app.css";
import LoginPage from "./pages/login";
import AdminPage from "./pages/admin";
import QueryPage from "./pages/query";
import Home from "./pages/homepage";
import BookingPage from "./pages/booking";
import PrintPage from "./components/printpage";




function App() {
  return (
    <Router>
   <Routes>
   <Route path="/" element={<Home />}></Route>
     <Route path="/homepage" element={<Home />}></Route>
     <Route path="/login" element={<LoginPage />}></Route>
     <Route path="/admin" element={<AdminPage />}></Route>
     <Route path="/query" element={<QueryPage />}></Route>
     <Route path="/booking" element={<BookingPage />}></Route>
     <Route path="/printform" element={<PrintPage />}></Route>

   </Routes>
   </Router>
  );
}

export default App;
