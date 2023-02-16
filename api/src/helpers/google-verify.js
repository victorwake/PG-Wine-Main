const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client( process.env.GOOGLE_CLIENT_ID );

const googleVerify = async(id_token) => {

  const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });

  const { name: firstName, 
          email: email,
          family_name: lastName,
          picture: profilePic,
            } = ticket.getPayload();
  
  return { firstName, lastName, email, profilePic  };

}


module.exports = {
    googleVerify
}