import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Achievements,
  Coaches,
  Events,
  Gallery,
  Programs,
  WhyChooseUs,
} from "@/components/site/Sections";
import {
  Contact,
  FAQ,
  Footer,
  Social,
  Testimonials,
  WhatsAppButton,
} from "@/components/site/Community";

const title = "Hosur Football & Fitness Academy | Youth Football Coaching";
const description =
  "HFA — Hosur's premier football & fitness academy since 2018. Licensed coaches, age-group programs, strength training and a real pathway to district and state football.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "Hosur Football & Fitness Academy",
          description,
          foundingDate: "2018",
          telephone: "+91-98765-43210",
          email: "hello@hosurfootballacademy.in",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hosur",
            addressRegion: "Tamil Nadu",
            postalCode: "635109",
            addressCountry: "IN",
          },
          slogan: "One Hosur. One Passion. One Academy.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Coaches />
        <Gallery />
        <Achievements />
        <Events />
        <Testimonials />
        <Social />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
