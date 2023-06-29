import { auth } from "@/lib/firebase";
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const GoogleSignInButton = () => {
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // Handle successful sign-in
      })
      .catch((error) => {
        // Handle sign-in error
      });
  };

  return (
    <button onClick={handleSignInWithGoogle}>Se connecter avec Google</button>
  );
};

export default GoogleSignInButton;
