import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F1D26",
};

export const metadata: Metadata = {
  title: "Muhamed Hussein — AI & Machine Learning Engineer",
  description:
    "Portfolio of Muhamed Hussein, an AI & Machine Learning Engineer specializing in Machine Learning, Deep Learning, Computer Vision, NLP, and AI Automation.",
  keywords: [
    "Muhamed Hussein",
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Transformers",
    "TensorFlow",
    "PyTorch",
    "n8n",
  ],
  authors: [{ name: "Muhamed Hussein Abd El-Azim" }],
  openGraph: {
    title: "Muhamed Hussein — AI & Machine Learning Engineer",
    description:
      "Portfolio of Muhamed Hussein, an AI & Machine Learning Engineer specializing in Machine Learning, Deep Learning, Computer Vision, NLP, and AI Automation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased selection:bg-cyan-500/20 selection:text-white min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen flex flex-col bg-grid-pattern transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
