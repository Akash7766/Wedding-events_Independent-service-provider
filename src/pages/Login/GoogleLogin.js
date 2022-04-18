import React from "react";
import auth from "../../firebase.init";
import "./GoogleLogin.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user);
  console.log(error);

  const handleGoogleSingIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="mt-4 text-center mb-5">
      <h3>Signin with Google</h3>
      <i
        onClick={handleGoogleSingIn}
        className="fa-brands fa-google fs-1 my-3 text-danger pointer border p-4 rounded shadow"
      ></i>
    </div>
  );
};

export default GoogleLogin;
