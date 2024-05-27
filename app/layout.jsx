import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import "../styles/home.css";
import "../styles/products.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/productscategories.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { fetchData } from "@/utils/tools";

const font = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "ISO",
  description: "ISO PANELS",
};

export default async function RootLayout ({ children }) {
  const data = await fetchData();

  console.log(data);  
  return (
    <html lang="en">
      <body className={font.className}>
        <div class="navbar-main">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
