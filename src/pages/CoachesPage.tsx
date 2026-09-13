import { PageHero } from "@/components/site/PageHero";
import { Coaches } from "@/components/site/Sections";

export function CoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching Staff"
        title="The People on the Touchline"
        description="Licensed, experienced and genuinely invested in every player who walks through the gate."
        breadcrumb="Coaches"
      />
      <Coaches isPreview={false} />
    </>
  );
}
