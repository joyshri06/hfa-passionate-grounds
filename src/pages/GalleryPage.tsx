import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { galleryImages, galleryCategories } from "@/data/site";
import { Reveal } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Media & Moments"
        title="Life at the Academy"
        description="Training nights, match days and the moments in between on our Hosur grounds."
        breadcrumb="Gallery"
      />
      <section className="py-24 bg-background">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-extrabold uppercase transition-all duration-300",
                  activeCategory === cat
                    ? "bg-flame text-white shadow-flame"
                    : "bg-secondary text-navy hover:bg-white/10 hover:text-gold border border-border",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((image, i) => (
              <Reveal key={`${image.category}-${i}`} delay={i * 80}>
                <figure className="group relative overflow-hidden rounded-[2.5rem] shadow-lift bg-card border border-border">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-ink/90 via-navy-ink/50 to-transparent p-6 pt-12 text-white">
                    <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <p className="mt-2 text-base font-semibold text-white/90">{image.alt}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
