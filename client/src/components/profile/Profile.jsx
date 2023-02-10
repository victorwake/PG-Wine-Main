import './profile.css';

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from '../login/LogoutBtn'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div><LogoutButton /> </div>
      </div>
    )
  );
};

export default Profile;