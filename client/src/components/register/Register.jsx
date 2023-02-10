import './register.css'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from '../../redux/actions';
import { NavBar } from '../navBar/NavBar';

export const Register = () => {

    const [inputs, setInputs] = useState({
        userName: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        rol: "USER_ROLE"
    });
    const navigate = useNavigate();
  const dispatch = useDispatch();
    

    const handleChange = (event) => {
      console.log(inputs)
      const name = event.target.name;
      const value = event.target.value;
      console.log(name, value);
      setInputs(values => ({...values, [name]: value}))
      }
  
    const handleSubmit = (event) => {
        console.log(inputs)
      event.preventDefault();
      dispatch(registerUser(inputs));
    alert('Usuario registrado con éxito');
    setInputs({
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      rol: "USER_ROL"
    });    
    navigate("/login");
    }

     return (
      <div>
      <NavBar/>
    <div className="login-container">      
      <div><h1 className="h2">Registro de usuario</h1></div>    
      <form className="form-log" onSubmit={handleSubmit}>
        <label>Nombre de usuario:
        <input
         required
          className="form-control me-2"
          type="text" 
          name="userName" 
          value={inputs.usererName} 
          onChange={(e) => handleChange(e)} 
        />
        </label>
        <label>Email:
          <input
          required
            className="form-control me-2"
            type="email" 
            name="email" 
            value={inputs.email} 
            onChange={(e) => handleChange(e)}
          />
          </label>
          <label>Nombre:
        <input
        required
          className="form-control me-2"
          type="text" 
          name="firstName" 
          value={inputs.firstName} 
          onChange={(e) => handleChange(e)}
        />
        </label>
        <label>Apellido:
        <input
        required
          className="form-control me-2"
          type="text" 
          name="lastName" 
          value={inputs.lastName} 
          onChange={(e) => handleChange(e)}
        />
        </label>
        <label>Password:
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
        <input className="btn btn-outline-success" type="submit" />
        </label>
      </form>
      </div>
      </div>
    )

}

