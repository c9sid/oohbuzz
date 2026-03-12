import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: "OOHBUZZ",
  description: "India's Smartest Outdoor Ad Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
