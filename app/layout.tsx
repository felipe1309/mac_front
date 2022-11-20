import "./globals.css";
import { layout } from "../types/layout";
import Navbar from "../components/Navbar";
export default function RootLayout({ children }: layout) {
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
