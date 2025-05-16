import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const userData = sessionStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/", { replace: true });
};

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>ID Token:</strong> {user.credential}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>No user data found. Please <a href="/">log in</a>.</p>
      )}
    </div>
  );
};

export default UserProfile;