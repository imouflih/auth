import { auth } from "@/lib/firebase";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpButton = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-up
      })
      .catch((error) => {
        // Handle sign-up error
      });
  };

  return (
    <div className="flex p-2 space-x-1">
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        className="block p-1.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Mot de passe"
        className="block p-1.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
      />
      <button
        onClick={handleSignUp}
        className="px-4 py-2 font-bold text-white rounded-lg bg-emerald-500 hover:bg-emerald-700"
      >
        S inscrire
      </button>
    </div>
  );
};

export default SignUpButton;
