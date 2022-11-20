import type { userDataLog } from "../../types/user";
import axios from "axios";
export const logUp = async (data: userDataLog) => {
  const post = await axios.post("http://localhost:4000/auth/logUp", data);
  return post.data
};
