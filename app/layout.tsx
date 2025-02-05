import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import 'typeface-lato';
import 'typeface-montserrat';

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
