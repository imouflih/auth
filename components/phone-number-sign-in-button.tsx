import { auth } from "@/lib/firebase";
import { signInWithPhoneNumber } from "firebase/auth";
import React from "react";

declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

const appVerifier = window.recaptchaVerifier;

const PhoneNumberSignInButton = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleSignInWithPhoneNumber = () => {
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((userCredential) => {
        // Handle successful sign-in
      })
      .catch((error) => {
        // Handle sign-in error
      });
  };

  return (
    <div>
      <input
        type="phone-number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Numéro de téléphone"
      />
      <button onClick={handleSignInWithPhoneNumber}>
        Se connecter avec numéro de téléphone
      </button>
    </div>
  );
};

export default PhoneNumberSignInButton;
