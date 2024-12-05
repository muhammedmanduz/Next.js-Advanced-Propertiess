import localFont from "next/font/local";
import "./assets/globals.css";
import Header
 from "./components/header";
const geistSans = localFont({
  src: "./assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dünyanın 7 harikası",
  description: "Next.js 'İn özelliklerini kullanarak pratik yapalım",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
