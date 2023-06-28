import { auth } from "@/lib/firebase";
import React from "react";
import { signOut } from "firebase/auth";

const SignOutButton = () => (
  <button onClick={() => signOut(auth)}>Se déconnecter</button>
);

export default SignOutButton;
