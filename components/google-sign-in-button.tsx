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
    <div className="p-2">
      <button
        onClick={handleSignInWithGoogle}
        className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700"
      >
        Se connecter avec Google
      </button>
    </div>
  );
};

export default GoogleSignInButton;
