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
    <div className="flex p-2 space-x-1">
      <input
        type="phone-number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Numéro de téléphone"
        className="block p-1.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
      />
      <button
        onClick={handleSignInWithPhoneNumber}
        className="px-4 py-2 font-bold text-white rounded-lg bg-sky-500 hover:bg-sky-700"
      >
        Se connecter avec numéro de téléphone
      </button>
    </div>
  );
};

export default PhoneNumberSignInButton;
