import { auth } from "@/lib/firebase";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const provider = new FacebookAuthProvider();

const FacebookSignInButton = () => {
  const handleSignInWithFacebook = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // Handle successful sign-in
      })
      .catch((error) => {
        // Handle sign-in error
      });
  };

  return (
    <div className="p-2">
      <button
        onClick={handleSignInWithFacebook}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Se connecter avec Facebook
      </button>
    </div>
  );
};

export default FacebookSignInButton;
