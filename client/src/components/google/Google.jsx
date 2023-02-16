
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { clearMessage } from "../../redux/actions/message";
import { loginG } from "../../redux/actions/auth";

import  jwt_decode  from "jwt-decode";

export default function Google() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const message = useSelector((state) => state.message);

  const [usuario, setUsuario] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

function handleCallBackresponse ( response) {

var objUser = jwt_decode(response.credential);
var id_token = response.credential;
console.log(id_token, objUser);

const body = { id_token: id_token };
    fetch("http://localhost:3001/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        const usuario = res;
        console.log(usuario);
        setUsuario(usuario);
      })
      .catch(console.warn);
};

if (usuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));

    var promise = new Promise((resolve) => {
        resolve(dispatch(loginG(usuario)))
    })
        promise.then(() => {     
        window.location.reload();   
        navigate("/perfil");
       
    
    }).catch(console.warn);
}

useEffect( () => {
    /* global google */

    google.accounts.id.initialize({
        client_id: "931442579528-v11ccourc3v7m5bc6715t8evbga0minm.apps.googleusercontent.com",
        callback: handleCallBackresponse
    });
    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size:"large"}
    );

}, [])

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
}
