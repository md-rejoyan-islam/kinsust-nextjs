"use client";
import { ThemeProvider } from "next-themes";

export default function ThemeWrapperProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
