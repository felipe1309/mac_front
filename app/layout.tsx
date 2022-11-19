import "./globals.css";
import { layout } from "../types/layout";
export default function RootLayout({ children }: layout) {
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
