import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Navbar from "@/components/shared/Navbar";
import Foooter from "@/components/footer/Foooter";
import { TimelineProvider } from "@/context/TimelineContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "KeenKeeper — Keep Your Friendships Alivie",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <TimelineProvider>

          {/* NAVBAR (ALL PAGES) */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="flex-1">
            {children}
          </main>

          {/* FOOTER (ALL PAGES) */}
          <Foooter/>

          <ToastContainer />

        </TimelineProvider>

      </body>
    </html>
  );
}