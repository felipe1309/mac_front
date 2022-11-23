import { useContext } from "react";
import { ContextStore } from "../app/(store)/layout";
export function useContextStore() {
  return useContext(ContextStore);

}
