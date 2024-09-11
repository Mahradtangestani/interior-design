import localFont from "next/font/local";
import "./globals.css";

import Header from "../components/Header";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Interior Design",
  description: "Interior Design next JS app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider attribute="class" defaultTheme="light">
        <Header/>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
