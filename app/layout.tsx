import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coming Soon Template",
  description: "Created by @JRausell",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:text-slate-50
  // gradients doens't work with transition
  return (
    <html lang="en">
      <body
        className={`${inter.className} from-slate-50 dark:text-slate-50 dark:bg-slate-900 transition-colors duration-1000`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
