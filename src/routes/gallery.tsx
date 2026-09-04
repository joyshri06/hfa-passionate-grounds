import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import g3 from "@/assets/gallery-3.jpg";

const title = "Gallery | Hosur Football & Fitness Academy";
const description =
  "Training nights, match days, events and facilities at Hosur Football & Fitness Academy — browse the HFA photo gallery.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        eyebrow="Gallery"
        title={
          <>
            Life at the <span className="text-flame">academy</span>
          </>
        }
        description="Training nights, match days and the moments in between. Tap any photo to view it full size."
        image={g3}
        accent="gold"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <GalleryGrid />
        </div>
      </section>

      <CtaBand
        title="Want to be in the next photo?"
        text="Join a session and start your own highlight reel with HFA."
        primary={{ to: "/registration", label: "Register Now" }}
        secondary={{ to: "/events", label: "See upcoming events" }}
      />
    </>
  );
}
