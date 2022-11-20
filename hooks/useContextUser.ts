import { useContext } from "react";
import { ContextGlobalUser } from "../app/layout";
export const useContextUser = () => {
  return ({} = useContext(ContextGlobalUser));
};
