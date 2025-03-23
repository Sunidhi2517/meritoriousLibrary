import React, { useState, useEffect } from "react";
import axios from "axios";
import "./queries.css";
import "./form.css";
import { Link } from "react-router-dom";

const Queries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get("https://librarymeritorious.onrender.com/api/queries")
      .then((response) => {
        setQueries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching queries:", error);
      });
  }, []);

  const resolveQuery = async (id) => {
      try {
        await axios.delete(`https://librarymeritorious.onrender.com/api/queries/${id}`);
  
        setQueries(queries.filter((query) => query._id !== id));
      } catch (error) {
        console.error("Error resolving query:", error);
      }
    };

  return (
    <div className="queries">
      

      <h2>Queries</h2>
        

      {
      // queries.length === 0 ? (
      //   <p>No queries available.</p>
      // ) : (
        queries.map((query) => (
        
          <div className="notification" key={query._id}>
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle">{query.name}</div>
            <div className="notibody">{query.query}</div>
            <div className="notititle">
              {query.email} | {query.contact}
              <div className="checkbox-container">
              <input
                type="checkbox"
                onChange={() => resolveQuery(query._id)}
              />
              <label>Resolved</label>
            </div> 
            </div>
                    </div>
        ))
      // )
      }
        <div className="buttons">
                  <Link to='/'> <button  >Home</button></Link> 
         </div>
    </div>
  );
};

export default Queries;
