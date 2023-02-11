
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../../redux/actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          navigate("/perfil");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/perfil" />;
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
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
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
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

export default Login;

/*-----------------------------------------*/

// import "./login.css";

// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../redux/actions";
// import { NavBar } from '../navBar/NavBar';

// export const Login = () => {
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     console.log(name, value);
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();       
//        dispatch(loginUser(inputs));
//          setInputs({
//           email: "",
//           password: "",
//         });      
//           navigate("/home");
          
// };

// // useEffect(() => {
// //   dispatch(loginUser)
// // }, [dispatch])


//   return (
//     <div>
//     <NavBar/>
//      <div className="login-container">      
//       <div><h1 className="h2">Login</h1></div>      
//       <form className="form-log" onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             required
//             className="form-control me-2"
//             type="email"
//             name="email"
//             value={inputs.email}
//             onChange={(e) => handleChange(e)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             required
//             className="form-control me-2"
//             type="password"
//             name="password"
//             value={inputs.password}
//             onChange={(e) => handleChange(e)}
//           />
//         </label>
//         <label>
//         <input type="submit" className="btn btn-outline-success"/>
//         </label>
//       </form>
//     </div>
//     </div>
//   );
// };


