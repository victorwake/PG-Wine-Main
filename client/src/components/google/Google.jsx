import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';



export default function Google() {
    const clientId = '931442579528-v11ccourc3v7m5bc6715t8evbga0minm.apps.googleusercontent.com'
useEffect(() => {
   const initClient = () => {
         gapi.client.init({
         clientId: clientId,
         scope: ''
       });
    };
    gapi.load('client:auth2', initClient);
});

const onSuccess = (res) => {
    console.log('success:', res);
};
const onFailure = (err) => {
    console.log('failed:', err);
};
  return (
    <div>
        <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
  />
    </div>
  )
}