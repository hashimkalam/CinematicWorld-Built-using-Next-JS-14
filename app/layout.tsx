import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Cinematic World",
  description: "Personal Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a1c29]/40 dark:bg-[#1a1c29]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
