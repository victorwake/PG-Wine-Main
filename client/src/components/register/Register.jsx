import './register.css'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from '../../redux/actions';

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
    navigate("/perfil");
    }

     return (
    <div className="contenedor-register">
      <form className="form-register" onSubmit={handleSubmit}>
        <label>Nombre de usuario:
        <input 
          type="text" 
          name="userName" 
          value={inputs.usererName} 
          onChange={(e) => handleChange(e)} 
        />
        </label>
        <label>Email:
          <input 
            type="email" 
            name="email" 
            value={inputs.email} 
            onChange={(e) => handleChange(e)}
          />
          </label>
          <label>Nombre:
        <input 
          type="text" 
          name="firstName" 
          value={inputs.firstName} 
          onChange={(e) => handleChange(e)}
        />
        </label>
        <label>Apellido:
        <input 
          type="text" 
          name="lastName" 
          value={inputs.lastName} 
          onChange={(e) => handleChange(e)}
        />
        </label>
        <label>Password:
        <input 
          type="password" 
          name="password" 
          value={inputs.password} 
          onChange={(e) => handleChange(e)}
        />       
        </label>
        <input type="submit" />
      </form>
      </div>
    )

}

