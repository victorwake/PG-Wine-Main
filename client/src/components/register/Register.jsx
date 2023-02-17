import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../redux/actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [userName, setUsername] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangefirstName = (e) => {
    const firstName = e.target.value;
    setfirstName(firstName);
  };
  const onChangelastName = (e) => {
    const lastName = e.target.value;
    setlastName(lastName);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
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
      dispatch(register(userName, email, firstName, lastName, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={userName}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

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
                <button className="btn btn-primary btn-block">Sign Up</button>
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
      </div>
    </div>
  );
};

export default Register;


/*-------------------------*/
// import './register.css'
// import { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from '../../redux/actions';
// import { NavBar } from '../navBar/NavBar';

// export const Register = () => {

//     const [inputs, setInputs] = useState({
//         userName: "",
//         email: "",
//         firstName: "",
//         lastName: "",
//         password: "",
//         rol: "USER_ROLE"
//     });
//     const navigate = useNavigate();
//   const dispatch = useDispatch();
    

//     const handleChange = (event) => {
//       console.log(inputs)
//       const name = event.target.name;
//       const value = event.target.value;
//       console.log(name, value);
//       setInputs(values => ({...values, [name]: value}))
//       }
  
//     const handleSubmit = (event) => {
//         console.log(inputs)
//       event.preventDefault();
//       dispatch(registerUser(inputs));
//     alert('Usuario registrado con éxito');
//     setInputs({
//       userName: "",
//       email: "",
//       firstName: "",
//       lastName: "",
//       password: "",
//       rol: "USER_ROL"
//     });    
//     navigate("/login");
//     }

//      return (
//       <div>
//       <NavBar/>
//     <div className="login-container">      
//       <div><h1 className="h2">Registro de usuario</h1></div>    
//       <form className="form-log" onSubmit={handleSubmit}>
//         <label>Nombre de usuario:
//         <input
//          required
//           className="form-control me-2"
//           type="text" 
//           name="userName" 
//           value={inputs.usererName} 
//           onChange={(e) => handleChange(e)} 
//         />
//         </label>
//         <label>Email:
//           <input
//           required
//             className="form-control me-2"
//             type="email" 
//             name="email" 
//             value={inputs.email} 
//             onChange={(e) => handleChange(e)}
//           />
//           </label>
//           <label>Nombre:
//         <input
//         required
//           className="form-control me-2"
//           type="text" 
//           name="firstName" 
//           value={inputs.firstName} 
//           onChange={(e) => handleChange(e)}
//         />
//         </label>
//         <label>Apellido:
//         <input
//         required
//           className="form-control me-2"
//           type="text" 
//           name="lastName" 
//           value={inputs.lastName} 
//           onChange={(e) => handleChange(e)}
//         />
//         </label>
//         <label>Password:
//         <input
//         required
//           className="form-control me-2"
//           type="password" 
//           name="password" 
//           value={inputs.password} 
//           onChange={(e) => handleChange(e)}
//         />       
//         </label>
//         <label>
//         <input className="btn btn-outline-success" type="submit" />
//         </label>
//       </form>
//       </div>
//       </div>
//     )

// }

