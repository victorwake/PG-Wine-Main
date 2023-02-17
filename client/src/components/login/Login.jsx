import './login.css';
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { Link } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { clearMessage } from "../../redux/actions/message";

import { login } from "../../redux/actions/auth";
import { NavBar } from "../navBar/NavBar";

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
  const clase= useSelector(store => store.theme);
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const  isLoggedIn  = useSelector(state => state.isLoggedIn);
  const  message  = useSelector(state => state.message);

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

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearMessage(message));
  }, "2500")
  },[dispatch, message])

  if (isLoggedIn) {
    return <Navigate to="/perfil"/>;
  }
  return (
    <div className={"login-container-" + clase}>
      <NavBar />
      <div className={"card-container-login-" + clase}>
        <div className="img-registro">
        </div>

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
            <button className="btn btn-secondary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
            <div><p>Si aún no tienes cuenta, registrate <Link to ="../registrar">aquí</Link></p></div>
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