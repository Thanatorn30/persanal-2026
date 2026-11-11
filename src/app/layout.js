import { Mona_Sans, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Thanatorn — Portfolio",
  description: "Fullstack Developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${monaSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
