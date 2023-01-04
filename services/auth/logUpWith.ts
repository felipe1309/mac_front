import axios from "axios";
import type { auth } from "../../types/auth";
export const logUpWith = async (
  name: string,
  email: string,
  type: "facebook" | "google"
): Promise<auth> => {
    console.log(name,email)
  const dataLogUp = await axios.post("http://localhost:4000/auth/logUpWith", {
    aditionalData: {
      typeAuth: type,
    },
    name,
    email,
  });
  return dataLogUp.data as auth;
};
