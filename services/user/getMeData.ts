import axios from "axios";
import { userDataContext } from "../../types/user";

export const getMeData = async (token: string): Promise<userDataContext> => {
  const data = await axios.get("http://localhost:4000/users/getMeData", {
    headers: {
      token,
    },
  });
  return data.data as userDataContext;
};
