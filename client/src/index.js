import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';// importo el provider para poder usar el store
import { BrowserRouter } from 'react-router-dom'; // importo el BrowserRouter para poder usar las rutas
import store from './redux/store/index'; // importo el store
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    
    <BrowserRouter>
      <Auth0Provider
        domain="dev-5tj4w6k3npci44fb.us.auth0.com"
        clientId="1wbCyCYDrmHD5ohRjvrGbxerhZijWFuC"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
