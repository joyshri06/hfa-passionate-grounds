import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";
import { galleryCategories, galleryImages } from "@/lib/site-data";

export function GalleryGrid({ filterable = true }: { filterable?: boolean }) {
  const [category, setCategory] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = galleryImages.filter(
    (image) => category === "All" || image.category === category,
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, items.length]);

  const current = active !== null ? items[active] : null;

  return (
    <div>
      {filterable ? (
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setCategory(item);
                  setActive(null);
                }}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.7rem] font-bold tracking-[0.16em] uppercase transition-colors",
                  category === item
                    ? "bg-flame text-white shadow-flame"
                    : "border border-border bg-card text-navy hover:border-orange/60",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </Reveal>
      ) : null}

      <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", filterable && "mt-8")}>
        {items.map((image, i) => (
          <Reveal key={image.src} delay={(i % 3) * 80} className={i % 5 === 0 ? "sm:row-span-2" : ""}>
            <button
              type="button"
              data-cursor="image"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${image.alt}`}
              className="group relative block h-full w-full overflow-hidden rounded-[1.75rem] shadow-lift"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                  i % 5 === 0 ? "h-72 sm:h-full sm:min-h-[30rem]" : "h-72",
                )}
              />
              <span className="absolute inset-0 grid place-items-center bg-navy-ink/0 text-white opacity-0 transition-all duration-400 group-hover:bg-navy-ink/45 group-hover:opacity-100">
                <Maximize2 className="size-6" aria-hidden="true" />
              </span>
              <span className="absolute bottom-3 left-3 rounded-full surface-glass-dark px-3 py-1 text-[0.62rem] font-bold tracking-[0.18em] text-gold uppercase">
                {image.category}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[90] grid place-items-center bg-navy-ink/92 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:text-gold"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <figure className="max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[72vh] w-full rounded-[2rem] object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">{current.alt}</figcaption>
          </figure>
          {items.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) => ((i ?? 0) - 1 + items.length) % items.length);
                }}
                className="absolute left-3 grid size-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:text-gold sm:left-8"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) => ((i ?? 0) + 1) % items.length);
                }}
                className="absolute right-3 grid size-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:text-gold sm:right-8"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
