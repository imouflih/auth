"use client";

import { auth } from "@/lib/firebase";
import React from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import SignOutButton from "./sign-out-button";
import SignUpButton from "./sign-up-button";
import EmailSignInButton from "./email-sign-in-button";
import GoogleSignInButton from "./google-sign-in-button";
import FacebookSignInButton from "./facebook-sign-in-button";
import PhoneNumberSignInButton from "./phone-number-sign-in-button";

const AuthButtons = () => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) =>
      setUser(user)
    );
    return () => unsubscribe();
  }, []);

  if (user) {
    return (
      <div>
        <SignOutButton />
      </div>
    );
  } else {
    return (
      <div>
        <EmailSignInButton />
        <SignUpButton />
        <GoogleSignInButton />
        <FacebookSignInButton />
        <PhoneNumberSignInButton />
      </div>
    );
  }
};

export default AuthButtons;
