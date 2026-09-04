import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./primitives";

export function CtaBand({
  title = "Ready to train with HFA?",
  text = "Book a free trial session and see the coaching for yourself. Slots fill fast every season.",
  primary = { to: "/registration", label: "Register Now" } as { to: string; label: string },
  secondary = { to: "/contact", label: "Contact Us" } as { to: string; label: string },
}) {
  return (
    <section className="relative overflow-hidden bg-pitch py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-orange/20 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-4xl leading-[0.95] text-white sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="flame" size="pill">
              <Link to={primary.to}>
                {primary.label} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="pill">
              <Link to={secondary.to}>{secondary.label}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
