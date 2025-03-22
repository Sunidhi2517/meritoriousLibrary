import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import "./buttons.css";
import logo from "./assets/logo.jpeg";
import { Link } from 'react-router-dom';

const query = [
  { id: 1, label: "Name", type: "text" },
  { id: 2, label: "Contact", type: "number" },
  { id: 3, label: "Email", type: "email" },
  { id: 4, label: "Query", type: "textarea" },
];

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const askquery = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.contact || !formData.email || !formData.query) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/submit", formData);
      alert(response.data.message);
      setFormData({ name: "", contact: "", email: "", query: "" }); // Reset form
    } catch (error) {
      alert("Error submitting query. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="form">
      <h1>
        <img src={logo} alt="logo" />
        Meritorious Library
      </h1>
      <p>The Self Study Point</p>
      <form id="queryform" onSubmit={askquery}>
        <h2>Library Membership Form</h2>
        {query.map((item) => (
          <div className="form__group field formItem" key={item.id}>
            {item.type === "textarea" ? (
              <textarea
                className="form__field"
                placeholder={item.label}
                name={item.label.toLowerCase()}
                id={item.label.toLowerCase()}
                value={formData[item.label.toLowerCase()]}
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type={item.type}
                className="form__field"
                placeholder={item.label}
                name={item.label.toLowerCase()}
                id={item.label.toLowerCase()}
                value={formData[item.label.toLowerCase()]}
                onChange={handleChange}
                required
              />
            )}
            <label htmlFor={item.label.toLowerCase()} className="form__label">
              {item.label}
            </label>
          </div>
        ))}
           <div className="buttons">
             <button type='submit' id='querybutton' onClick={(e)=>askquery(e,'queryform')} value='AskQuery'>Send the Query</button>
                  <Link to='/'> <button type='submit' className='loginbutton' value='login'>Home</button></Link> 
         </div>
      </form>
    </div>
  );
};

export default QueryForm;
