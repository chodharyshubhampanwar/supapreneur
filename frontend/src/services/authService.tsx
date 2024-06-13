// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../utils/firebase-config";

// const signInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     return result.user;
//   } catch (error) {
//     console.error("Error signing in with Google:", error);
//     throw error;
//   }
// };

// export { signInWithGoogle };

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase-config";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};
