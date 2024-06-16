import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { createUser } from "../api/api";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);

    const { email, uid } = result.user;
    if (email && uid) {
      const response = await createUser(email, uid, "founder");
      if (!response.user) {
        throw new Error("Failed to create or sign in user");
      }
    } else {
      throw new Error("Email or UID is null");
    }
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};
