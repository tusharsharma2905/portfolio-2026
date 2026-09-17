import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CosmicBackground } from "@/components/CosmicBackground";

export const metadata = {
  title: "Tushar Sharma | AI/ML Developer & Computer Science Engineer",
  description: "Portfolio of Tushar Sharma, AI/ML Developer, Full-Stack Engineer, and Computer Science student building intelligent web and cloud solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased bg-[#030014] text-white selection:bg-primary-500 selection:text-white`}>
        <CosmicBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
