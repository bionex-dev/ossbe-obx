import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { Interactions } from "@/components/ui/Interactions";
import { BackToTop } from "@/components/ui/BackToTop";
import { business } from "@/data/website-content";
import { seoDescription, seoTitle, siteUrl } from "@/lib/site";
import "./globals.scss";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", weight: ["500", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seoTitle, template: "%s | " + business.name },
  description: seoDescription,
  keywords: [business.category],
  applicationName: business.name,
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: business.name, title: seoTitle, description: seoDescription, url: "/", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: seoTitle, description: seoDescription },
  formatDetection: { telephone: true, email: true, address: false },
};

export const viewport: Viewport = { themeColor: "#0a1526", width: "device-width", initialScale: 1 };

// Adds .js before paint so reveal styles only apply when JS runs; falls back to visible content if hydration stalls.
const bootScript =
  "var d=document.documentElement;d.classList.add('js');setTimeout(function(){if(!window.__reveal)d.classList.remove('js')},4000);";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[manrope.variable, inter.variable].join(" ")} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <Interactions />
        <BackToTop />
      </body>
    </html>
  );
}
