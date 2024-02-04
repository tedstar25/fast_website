import type { Metadata } from "next";

import "./globals.css";


// will be applied to all folders and files in root folder 



export const metadata: Metadata = {
  title: "Fast website",
  description: "A very fast application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
