import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//import "../app/styles/globals.scss";
import "../app/styles/main.scss";
import Navbar from '@/app/components/Navbar'
import { WorkoutsContextProvider } from "./context/workoutContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GYM Workout App",
  description: "A GYM Workout MVP Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <>
      <WorkoutsContextProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
          {children}
        </body>
      </WorkoutsContextProvider>
      </>
    </html>
  );
}
