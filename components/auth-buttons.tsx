"use client";

import { auth } from "@/lib/firebase";
import React from "react";
import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const SignInButton = () => (
  <button onClick={() => signInWithPopup(auth, provider)}>
    Se connecter avec Google
  </button>
);

const SignOutButton = () => (
  <button onClick={() => signOut(auth)}>Se déconnecter</button>
);

export const AuthButtons = () => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) =>
      setUser(user)
    );
    return () => unsubscribe();
  }, []);

  if (user) {
    return <SignOutButton />;
  } else {
    return <SignInButton />;
  }
};

export default AuthButtons;
