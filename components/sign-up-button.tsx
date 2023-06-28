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
    <div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Mot de passe"
      />
      <button onClick={handleSignUp}>S inscrire</button>
    </div>
  );
};

export default SignUpButton;
