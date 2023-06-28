"use client";

import { auth } from "@/lib/firebase";
import React from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import SignOutButton from "./sign-out-button";
import SignInButton from "./sign-in-button";
import SignUpButton from "./sign-up-button";

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
        <SignInButton />
        <SignUpButton />
      </div>
    );
  }
};

export default AuthButtons;
