import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SOCIAL,
  programs,
} from "@/lib/site-data";
import logo from "@/assets/hfa-logo.png";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/coaches", label: "Coaches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/achievements", label: "Achievements" },
  { to: "/events", label: "Events" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/registration", label: "Registration" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy-ink py-14 text-white/70">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
          <div>
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <img
                src={logo}
                alt="Hosur Football & Fitness Academy crest"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 shrink-0"
              />
              <span className="min-w-0">
                <span className="block truncate font-display text-lg text-white">
                  Hosur Football
                </span>
                <span className="block text-[0.6rem] font-bold tracking-[0.26em] text-gold uppercase">
                  & Fitness Academy
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              One Hosur. One Passion. One Academy. Developing footballers and
              athletes in Hosur since 2018.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { icon: Instagram, href: SOCIAL.instagram, label: "Instagram" },
                { icon: Facebook, href: SOCIAL.facebook, label: "Facebook" },
                { icon: Youtube, href: SOCIAL.youtube, label: "YouTube" },
                { icon: MessageCircle, href: SOCIAL.whatsapp, label: "WhatsApp" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
                >
                  <social.icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-display text-sm tracking-[0.2em] text-white">Quick links</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Programs">
            <h2 className="font-display text-sm tracking-[0.2em] text-white">Programs</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {programs.slice(0, 6).map((program) => (
                <li key={program.name}>
                  <Link to="/programs" className="transition-colors hover:text-gold">
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm tracking-[0.2em] text-white">Visit us</h2>
            <address className="mt-4 space-y-2.5 text-sm not-italic">
              <p>
                HFA Ground, Hosur,
                <br />
                Tamil Nadu 635109
              </p>
              <p>
                <a href={`tel:${PHONE_HREF}`} className="transition-colors hover:text-gold">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {EMAIL}
                </a>
              </p>
              <p>
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hosur Football & Fitness Academy. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-gold">
              Terms & Conditions
            </Link>
            <span>Established 2018 · Hosur</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={SOCIAL.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HFA on WhatsApp"
      className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-[oklch(0.72_0.17_150)] text-white shadow-flame transition-transform duration-300 hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
