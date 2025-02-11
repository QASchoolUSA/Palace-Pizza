import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import 'typeface-lato';
import 'typeface-montserrat';
import { AudioProvider } from "@/contexts/AudioContext";
import AudioControlButton from "./components/AudioControlButton";

export const metadata = {
  icons: {
    icon: "/favicon.png", // Default icon
    apple: "/favicon-apple.png", // Apple devices
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AudioProvider>
        <Header />
        {children}
        <AudioControlButton />
        <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}
