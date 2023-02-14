import React, { useState, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import './register.css';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Navigate } from 'react-router-dom';
import { clearMessage } from "../../redux/actions/message";
import { register } from "../../redux/actions/auth";
import { NavBar } from "../navBar/NavBar";
import { useNavigate, Link } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Campo requerido!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Formato no válido.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length === 0) {
    return (
      <div className="alert alert-danger" role="alert">
        Debes ingresar tu nombre.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 8) {
    return (
      <div className="alert alert-danger" role="alert">
        Entre 6 y 8 caracteres.
      </div>
    );
  }
};

const Register = () => {
  
  const form = useRef();
  const checkBtn = useRef();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("USER_ROLE");
  const [successful, setSuccessful] = useState(false);

  const  message  = useSelector(state => state.message);
  const  isLoggedIn  = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  let navigate = useNavigate();
 
  const onChangefirstName = (e) => {
    const firstName = e.target.value;
    setfirstName(firstName);
  };
  const onChangelastName = (e) => {
    const lastName = e.target.value;
    setlastName(lastName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);
    
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(email, firstName, lastName, password, rol))
        .then(() => {
          setSuccessful(true);                   
        })
        .then(() => {
          setTimeout(() => {
            dispatch(clearMessage(message));
        }, "2500")
         })
        .catch(() => {
          setSuccessful(false);
        });       
    }
  };

   if (isLoggedIn) {
    return <Navigate to="/perfil" />;
  }
 
  return (
    <div className="login-container">
      <NavBar/>
      <div className="card card-container">
      <div className="img-registro">
        </div>
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
               <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={firstName}
                  onChange={onChangefirstName}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <Input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={lastName}
                  onChange={onChangelastName}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-secondary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}           
              </div>
            </div>
          )}          
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        <div><p>Logueate <Link to ="../login">aquí</Link></p></div>
      </div>
      
    </div>
  );
};

export default Register;