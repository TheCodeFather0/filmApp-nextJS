import { Inter } from "next/font/google";
import "@/styles/global.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
