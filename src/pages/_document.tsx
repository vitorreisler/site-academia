import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <header className="mb-5">
          <Navbar />
        </header>
        <Main />
        <NextScript />
        <footer className="mt-5">
          <Footer />
        </footer>
        <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js" defer />

      </body>
    </Html>
  );
}
