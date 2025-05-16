import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import type { CredentialResponse } from "@react-oauth/google";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GoogleSignIn = () => {
  const navigate = useNavigate();

  const handleSuccess = (response: CredentialResponse) => {
  console.log("Login Success:", response);
  sessionStorage.setItem("user", JSON.stringify(response));
  navigate("/profile");
};

  const handleFailure = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h2>Sign in with Google</h2>
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleSignIn;
