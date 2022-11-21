"use client";
import "./globals.css";
import { layout } from "../types/layout";
import Navbar from "../components/Navbar";
import { createContext } from "react";
import { useAuthData } from "../hooks/useAuthData";
import { auth } from "../types/auth";
import { userDataContext } from "../types/user";
type contextGlobalUser = {
  authData: auth;
  logAuth: (token: string) => void;
  userState: userDataContext | null;
};
export const ContextGlobalUser = createContext<contextGlobalUser>(
  {} as contextGlobalUser
);
export default function RootLayout({ children }: layout) {
  const { authData, logAuth, userState } = useAuthData();
  const value: contextGlobalUser = { authData, logAuth, userState };
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ContextGlobalUser.Provider value={value}>
          <Navbar />
          <div className="Layout__globalp-pages">{children}</div>
        </ContextGlobalUser.Provider>
      </body>
    </html>
  );
}
