import Navbar from "./Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Celebrity Clothes",
  description: "Look like your favourite celebrity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mt-16 md:mt-20 px-2 md:px-5 ">{children}</div>

        <footer className="w-full bg-[#1f1f1f] text-white h-36 flex flex-col justify-evenly text-center">
          <p>
            Website made by{" "}
            <a
              className="underline hover:text-blue-400 transition-all"
              href="https://crossguardagency.web.app"
            >
              Crossguard Agency
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
