import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Glance } from "@/components/sections/Glance";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Contact } from "@/components/sections/Contact";
import { Hours } from "@/components/sections/Hours";
import { canonical, localBusinessJsonLd } from "@/lib/site";

export const metadata: Metadata = { alternates: canonical("/") };

export default function Home() {
  return (
    <>
      <Hero />
      <Glance />
      <About />
      <Gallery />
      <Testimonials />
      <CtaBand />
      <Contact />
      <Hours />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </>
  );
}
