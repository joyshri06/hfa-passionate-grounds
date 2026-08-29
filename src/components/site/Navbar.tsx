import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/site-data";
import logo from "@/assets/hfa-logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <nav
          aria-label="Main"
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-4 py-2.5 transition-all duration-500 lg:grid-cols-[auto_1fr_auto] lg:px-5",
            scrolled
              ? "surface-glass-dark shadow-lift"
              : "border border-transparent bg-transparent",
          )}
        >
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="Hosur Football & Fitness Academy crest"
              width={44}
              height={44}
              className={cn(
                "shrink-0 drop-shadow-md transition-all duration-500",
                scrolled ? "h-9 w-9 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-11 sm:w-11",
              )}
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-base leading-none text-white sm:text-lg">
                Hosur Football
              </span>
              <span className="block truncate text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase">
                & Fitness Academy
              </span>
            </span>
          </Link>

          <ul className="hidden items-center justify-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "bg-white/10 text-gold" }}
                  className="rounded-full px-3 py-2 text-[0.7rem] font-bold tracking-[0.12em] text-white/80 uppercase transition-colors hover:bg-white/10 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 justify-self-end">
            <Button asChild variant="flame" size="pillSm" className="hidden sm:inline-flex">
              <Link to="/registration">Join Now</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:text-gold lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-menu"
        data-open={open}
        className="mobile-menu mx-4 mt-2 overflow-hidden rounded-3xl surface-glass-dark shadow-lift lg:hidden"
      >
        <div className="p-4">
          <ul className="flex flex-col">
            {[...NAV_LINKS, { to: "/testimonials", label: "Testimonials" }, { to: "/faq", label: "FAQ" }].map(
              (link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    activeProps={{ className: "text-gold" }}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-display text-lg text-white transition-colors hover:bg-white/10 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Button asChild variant="flame" size="pill" className="mt-3 w-full">
            <Link to="/registration" onClick={() => setOpen(false)}>
              Join Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
