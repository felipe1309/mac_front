import { authFirebase } from "../../libs/firebase/client";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
export async function logUpWhitGoogle() {
  const googleProvider = new GoogleAuthProvider();
  return await signInWithPopup(authFirebase, googleProvider);
}
