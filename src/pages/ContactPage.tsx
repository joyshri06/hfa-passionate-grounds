import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Community";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Hosur Football Academy"
        description="Our ground team is available Monday through Saturday. Message us on WhatsApp or visit the pitch."
        breadcrumb="Contact"
      />
      <Contact isPreview={false} />
    </>
  );
}
