import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lista de compras",
  description: "Cria sua lista de compras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-[700px] mx-auto my-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
