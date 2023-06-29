import { auth } from "@/lib/firebase";
import React from "react";
import { signOut } from "firebase/auth";

const SignOutButton = () => (
  <div className="p-2">
    <button
      onClick={() => signOut(auth)}
      className="px-4 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-700"
    >
      Se déconnecter
    </button>
  </div>
);

export default SignOutButton;
