import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatProvider } from "@/context/ChatContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini Developer",
  description: "Mini Developer is the best online friend of all developers",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ChatProvider>
            <ThemeProvider
              attribute="class"
              // @ts-ignore
              defaultTheme={
                typeof window != "undefined"
                  ? localStorage.getItem("theme")
                  : "system"
              }
              enableSystem
            >
              {children}
            </ThemeProvider>
          </ChatProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

export default RootLayout;
