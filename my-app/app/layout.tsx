import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduFri",
  description: "An App to revolutionalise education in Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${font.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
