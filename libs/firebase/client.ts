import { initializeApp } from "@firebase/app";
import {getAuth} from "@firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyALcJWUogbyjxWcHLZPd9KN4NfpwcQ0-RI",
  authDomain: "maceccomer.firebaseapp.com",
  projectId: "maceccomer",
  storageBucket: "maceccomer.appspot.com",
  messagingSenderId: "570499828561",
  appId: "1:570499828561:web:113cf884507afba77fe170",
  measurementId: "G-67JQFR6KWN",
};
const appFirebase = initializeApp(firebaseConfig);
export const authFirebase = getAuth(appFirebase)