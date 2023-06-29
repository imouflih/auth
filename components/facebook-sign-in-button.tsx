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
    <button onClick={handleSignInWithFacebook}>
      Se connecter avec Facebook
    </button>
  );
};

export default FacebookSignInButton;
