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
  Social,
  Testimonials,
} from "@/components/site/Community";

export function HomePage() {
  return (
    <>
      <Hero />
      <About isPreview={true} />
      <Programs isPreview={true} />
      <WhyChooseUs />
      <Coaches isPreview={true} />
      <Gallery isPreview={true} />
      <Achievements isPreview={true} />
      <Events isPreview={true} />
      <Testimonials isPreview={true} />
      <Social />
      <FAQ isPreview={true} />
      <Contact isPreview={true} />
    </>
  );
}
