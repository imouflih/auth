import { auth } from "@/lib/firebase";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const EmailSignInButton = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-in
      })
      .catch((error) => {
        // Handle sign-in error
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
        onClick={handleSignInWithEmail}
        className="px-4 py-2 font-bold text-white rounded-lg bg-emerald-500 hover:bg-emerald-700"
      >
        Se connecter avec e-mail/mot de passe
      </button>
    </div>
  );
};

export default EmailSignInButton;
