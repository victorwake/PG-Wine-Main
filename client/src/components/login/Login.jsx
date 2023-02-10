import "./login.css";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions";

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();       
       dispatch(loginUser(inputs));
         setInputs({
          email: "",
          password: "",
        });      
         
          navigate("/home");
 
           
};

// useEffect(() => {
//   dispatch(loginUser)
// }, [dispatch])


  return (
    <div className="login-container">
      <div><h1 className="h2">Login</h1></div>      
      <form className="form-log" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            required
            className="form-control me-2"
            type="email"
            name="email"
            value={inputs.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Password:
          <input
            required
            className="form-control me-2"
            type="password"
            name="password"
            value={inputs.password}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
        <input type="submit" className="btn btn-outline-success"/>
        </label>
      </form>
    </div>
  );
};
