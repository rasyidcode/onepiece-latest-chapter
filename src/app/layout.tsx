import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Piece Latest Manga",
  description: "Read one piece latest manga online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        {/* TODO: header */}

        {/* Content */}
        <main>
          {children}
        </main>

        {/* TODO: footer */}
      </body>
    </html>
  );
}
