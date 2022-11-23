import { authFirebase } from "../../libs/firebase/client";
import { FacebookAuthProvider, signInWithPopup } from "@firebase/auth";
export async function logUpWhitFacebook() {
  const facebookProvider = new FacebookAuthProvider();
  return await signInWithPopup(authFirebase, facebookProvider);
}
