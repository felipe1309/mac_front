import { useState, useEffect } from "react";
import { getMeData } from "../services/user/getMeData";
import { auth } from "../types/auth";
import { userDataContext } from "../types/user";
export const useAuthData = () => {
  const [authData, setAuthData] = useState<auth>({
    auth: false,
    token: null,
  });
  const [userState, setUserState] = useState<userDataContext | null>(null);
  useEffect(() => {
    if (window.localStorage.getItem("x-acces-token")) {
      setAuthData({
        auth: true,
        token: window.localStorage.getItem("x-acces-token") as string,
      });
    }
  }, []);
  useEffect(() => {
    if (authData.auth) {
      getMeData(authData.token).then((data) => {
        setUserState(data);
      });
    }
  }, [authData]);
  const logAuth = (token: string) => {
    setAuthData({
      auth: true,
      token,
    });
  };
  return { authData, logAuth, userState };
};
