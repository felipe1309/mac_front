import { useContext } from "react";
import { ContextStore } from "../app/(store)/layout";
export function useContextStore() {
  const { handdleClick, state } = useContext(ContextStore);
  return { handdleClick, state };
}
