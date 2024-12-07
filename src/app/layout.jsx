import { localFont } from "next/font/local";
import "./assets/globals.css";
import Header from "./components/header";

//googleFont tanımlama
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400"],
});

//Local font tanımlama
export const geistSans = localFont({
  src: "./assets/fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
});

export const jedi = localFont({
  src: "./assets/fonts/Starjedi.ttf",
  variable: "--font-jedi",
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
        style={poppins.style}
        className={`${poppins.className}  antialiased bg-black text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
