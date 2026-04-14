import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const fraunces = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Plant 2 Plate — Grow & Nourish Charlotte",
  description: "A university leadership initiative addressing food insecurity in Charlotte, NC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${fraunces.variable} font-sans`}>
        {/* Navigation Bar */}
        <nav className="nav">
          <Link href="/" className="nav-logo">
            <span>🌱</span> Plant 2 Plate
          </Link>
          <div className="nav-links-wrap" id="navLinks">
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/grow">🌿 Grow Your Own</Link></li>
              <li><Link href="/find-food">🗺 Find Food</Link></li>
              <li><Link href="/about">👩‍🌾 About Us</Link></li>
            </ul>
          </div>
          <Link href="/find-food" className="nav-cta">Find Food Near Me</Link>
        </nav>

        {/* Dynamic Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer>
          <div className="footer-logo">🌱 Plant 2 Plate</div>
          <p>UNC Charlotte emerging leaders service learning project.</p>
          <div className="footer-note">
            Resource information is kept as up-to-date as possible. © 2026 Plant 2 Plate Initiative.
          </div>
        </footer>
      </body>
    </html>
  );
}