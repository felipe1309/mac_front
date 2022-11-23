import type { userDataLogUp } from "../../types/user";
import axios from "axios";
export const logUp = async (data: userDataLogUp) => {
  const post = await axios.post("http://localhost:4000/auth/logUp", data);
  return post.data
};
