import axios from "axios";
import type { userDataLog } from "../../types/user";
type userDataLogIn = Omit<userDataLog, "name">;
export const logIn = async (data: userDataLogIn) => {
  const get = await axios.post("http://localhost:4000/auth/logIn", data);
  return get.data
};
