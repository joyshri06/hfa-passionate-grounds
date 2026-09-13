import { PageHero } from "@/components/site/PageHero";
import { About, WhyChooseUs } from "@/components/site/Sections";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Since 2018"
        title={
          <>
            Built in Hosur.
            <br />
            <span className="text-flame">Built for the game.</span>
          </>
        }
        description="Hosur Football & Fitness Academy started with a handful of kids, two goalposts and one belief — that world-class football education belongs right here at home."
        breadcrumb="About"
      />
      <About isPreview={false} />
      <WhyChooseUs />
    </>
  );
}
