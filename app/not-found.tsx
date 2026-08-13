import "./globals.css";
import LangNotFound from "@/components/LangNotFound";
import { fontVariables, inter } from "@/lib/fonts";

export default function RootNotFound() {
  return (
    <html lang="uk" className={fontVariables}>
      <body className={inter.className}>
        <LangNotFound />
      </body>
    </html>
  );
}
