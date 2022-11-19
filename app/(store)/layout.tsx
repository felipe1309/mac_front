"use client";
import { useState } from "react";
import { layout } from "../../types/layout";
import { createContext } from "react";
type context = {
  state:number,
  handdleClick:()=>void
};
export const ContextStore = createContext<context>({} as context);
const layout = ({ children }: layout) => {
  const [state, setState] = useState(0);
  const handdleClick = () => {
    setState(state + 1);
  };
  return (
    <ContextStore.Provider value={{
      handdleClick,
      state
    }}>
      <span>{state}</span>
      <button onClick={handdleClick}>+</button>
      <h2>layout</h2>
      {children}
    </ContextStore.Provider>
  );
};

export default layout;
