import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/Community";

export function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help & Answers"
        title="Frequently Asked Questions"
        description="Got questions about trial sessions, fees, kit requirements, or location? Find answers here."
        breadcrumb="FAQ"
      />
      <FAQ isPreview={false} />
    </>
  );
}
