import { PageHero } from "@/components/site/PageHero";
import { Testimonials } from "@/components/site/Community";

export function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Parent & Player Reviews"
        title="Words from Our Families"
        description="Hear how Hosur Football & Fitness Academy has transformed young athletes on and off the field."
        breadcrumb="Testimonials"
      />
      <Testimonials isPreview={false} />
    </>
  );
}
