import { Inter, Rubik_Glitch, Oswald } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const protest = Oswald({ subsets: ["cyrillic"]})
// const glitch = Rubik_Glitch({subsets: ["cyrillic"], weight: "400"})

export const metadata = {
  title: "Be my Val",
  description: "Ask your crush, loved one, or significant other to be your val using a stylish approach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch+Pop&display=swap" rel="stylesheet" /> */}
        <link rel="shortcut icon" href="./love.ico" />
      </Head>
      <body className={`${inter.className} ${protest.className}`}>{children}</body>
    </html>
  );
}
