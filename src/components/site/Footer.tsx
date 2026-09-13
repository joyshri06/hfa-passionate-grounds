import { Link } from "react-router-dom";
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
    <footer className="bg-navy-ink py-16 text-white/70">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
          <div>
            <Link to="/" className="flex min-w-0 items-center gap-4">
              <img
                src={logo}
                alt="Hosur Football & Fitness Academy crest"
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 shrink-0"
              />
              <span className="min-w-0">
                <span className="block truncate font-display text-2xl text-white font-extrabold">
                  Hosur Football
                </span>
                <span className="block text-[0.68rem] font-extrabold tracking-[0.28em] text-gold uppercase">
                  & Fitness Academy
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/80 font-medium">
              One Hosur. One Passion. One Academy. Developing footballers and
              athletes in Hosur since 2018.
            </p>
            <div className="mt-8 flex gap-3.5">
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
                  className="grid size-12 place-items-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold hover:bg-white/10"
                >
                  <social.icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-display text-base tracking-[0.24em] text-white font-extrabold uppercase">Quick links</h2>
            <ul className="mt-5 space-y-3.5 text-base sm:text-lg">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-gold font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Programs">
            <h2 className="font-display text-base tracking-[0.24em] text-white font-extrabold uppercase">Programs</h2>
            <ul className="mt-5 space-y-3.5 text-base sm:text-lg">
              {programs.slice(0, 6).map((program) => (
                <li key={program.name}>
                  <Link to="/programs" className="transition-colors hover:text-gold font-medium">
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-base tracking-[0.24em] text-white font-extrabold uppercase">Visit us</h2>
            <address className="mt-5 space-y-3.5 text-base sm:text-lg not-italic">
              <p className="leading-relaxed">
                HFA Ground, Hosur,
                <br />
                Tamil Nadu 635109
              </p>
              <p>
                <a href={`tel:${PHONE_HREF}`} className="transition-colors hover:text-gold font-semibold">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all transition-colors hover:text-gold font-medium"
                >
                  {EMAIL}
                </a>
              </p>
              <p>
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold font-semibold text-gold"
                >
                  Chat on WhatsApp →
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 text-sm sm:text-base flex-wrap sm:flex-row sm:items-center sm:justify-between font-medium">
          <p>© {new Date().getFullYear()} Hosur Football & Fitness Academy. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-gold">
              Terms & Conditions
            </Link>
            <span className="text-white/50">Established 2018 · Hosur</span>
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
      className="fixed right-6 bottom-6 z-50 grid size-16 place-items-center rounded-full bg-[oklch(0.72_0.17_150)] text-white shadow-flame transition-transform duration-300 hover:scale-110 sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
