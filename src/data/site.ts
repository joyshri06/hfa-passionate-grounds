import {
  Activity,
  Award,
  CalendarDays,
  Dumbbell,
  HeartPulse,
  Medal,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const WHATSAPP_NUMBER = "919876543210";
export const PHONE_DISPLAY = "+91 98765 43210";
export const EMAIL = "hello@hosurfootballacademy.in";
export const MAPS_QUERY = "Hosur+Football+Academy+Hosur+Tamil+Nadu";

export const SOCIALS = {
  instagram: "https://www.instagram.com/hosurfootballacademy",
  facebook: "https://www.facebook.com/hosurfootballacademy",
  youtube: "https://www.youtube.com/@hosurfootballacademy",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/coaches", label: "Coaches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/achievements", label: "Achievements" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export const galleryImages = [
  {
    src: g1,
    alt: "Academy players running a cone dribbling drill at sunset",
    category: "Training",
  },
  {
    src: g2,
    alt: "Coach briefing the squad in a huddle before training",
    category: "Coaching",
  },
  {
    src: g3,
    alt: "Junior team celebrating with a championship trophy",
    category: "Matches",
  },
  {
    src: g4,
    alt: "Close-up of a boot striking the ball under floodlights",
    category: "Facilities",
  },
];

export const galleryCategories = ["All", "Training", "Coaching", "Matches", "Facilities"];

export const programs = [
  {
    icon: Star,
    name: "Little Kickers",
    age: "Age 5 – 8",
    schedule: "Mon · Wed · Fri · 5:00 – 6:00 PM",
    fee: "Fee on request",
    text: "Fun-first introduction to football: coordination, balance, first touch and love for the ball.",
  },
  {
    icon: Activity,
    name: "Development Squad",
    age: "Age 9 – 13",
    schedule: "Mon · Wed · Fri · 6:00 – 7:30 PM",
    fee: "Fee on request",
    text: "Technical foundations, small-sided games and positional understanding with weekly match play.",
  },
  {
    icon: Trophy,
    name: "Elite Youth",
    age: "Age 14 – 18",
    schedule: "Tue · Thu · Sat · 6:00 – 8:00 PM",
    fee: "Fee on request",
    text: "High-performance training, tactical periodisation and scouting exposure for district & state trials.",
  },
  {
    icon: Dumbbell,
    name: "Strength & Fitness",
    age: "All ages",
    schedule: "Tue · Thu · 6:00 – 7:00 AM",
    fee: "Fee on request",
    text: "Sports-science-led conditioning, speed and agility, mobility and injury-prevention programming.",
  },
  {
    icon: ShieldCheck,
    name: "Goalkeeper Lab",
    age: "Age 10+",
    schedule: "Sat · 7:00 – 8:30 AM",
    fee: "Fee on request",
    text: "Specialist handling, shot-stopping, distribution and reflex work with a dedicated GK coach.",
  },
  {
    icon: HeartPulse,
    name: "Adult Fitness Football",
    age: "Age 18+",
    schedule: "Mon – Fri · 8:00 – 9:00 PM",
    fee: "Fee on request",
    text: "Evening sessions for working adults — cardio, conditioning and competitive 7-a-side.",
  },
];

export const pillars = [
  {
    icon: Users,
    title: "1 : 12 coach ratio",
    text: "Small groups mean every player gets corrected, coached and challenged in every session.",
  },
  {
    icon: Medal,
    title: "Licensed coaching staff",
    text: "AIFF-certified coaches with grassroots, youth and professional playing backgrounds.",
  },
  {
    icon: HeartPulse,
    title: "Fitness science built in",
    text: "Strength, mobility and recovery work integrated into the football curriculum, not bolted on.",
  },
  {
    icon: CalendarDays,
    title: "Year-round match play",
    text: "Inter-academy leagues, district tournaments and friendlies keep players competing all season.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, certified ground",
    text: "Well-maintained turf, first-aid trained staff and strict child-safeguarding protocols.",
  },
  {
    icon: Award,
    title: "A real pathway",
    text: "Trial exposure, highlight reels and references for state academies and college programmes.",
  },
];

export const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Develop complete athletes — skilled, fit, disciplined and confident on and off the pitch.",
  },
  {
    icon: Sparkles,
    title: "Our Vision",
    text: "Put Hosur on the national football map by producing players for state and pro academies.",
  },
];

export const coaches = [
  {
    name: "Arun Kumar",
    role: "Founder & Head Coach",
    initials: "AK",
    experience: "12+ years coaching",
    specialisation: "Elite youth pathway & tactics",
    bio: "AIFF D-Licence. Former district captain. Leads the elite youth pathway.",
  },
  {
    name: "Vignesh R.",
    role: "Technical Coach",
    initials: "VR",
    experience: "8 years coaching",
    specialisation: "Ball mastery & 1v1 development",
    bio: "Specialist in ball mastery and 1v1 development for the 9–13 age group.",
  },
  {
    name: "Sathish M.",
    role: "Strength & Conditioning",
    initials: "SM",
    experience: "6 years in sports science",
    specialisation: "Athletic development & rehab",
    bio: "Sports science graduate handling athletic development and rehab.",
  },
  {
    name: "Prakash D.",
    role: "Goalkeeping Coach",
    initials: "PD",
    experience: "10 years playing & coaching",
    specialisation: "Shot-stopping & distribution",
    bio: "Ex-state keeper running the dedicated Goalkeeper Lab sessions.",
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Players trained" },
  { value: 8, suffix: "", label: "Years since 2018" },
  { value: 25, suffix: "+", label: "Trophies won" },
  { value: 12, suffix: "", label: "Certified coaches" },
];

export const achievements = [
  { value: 25, suffix: "+", label: "Tournament trophies" },
  { value: 40, suffix: "+", label: "District selections" },
  { value: 9, suffix: "", label: "State-level players" },
  { value: 500, suffix: "+", label: "Academy alumni" },
];

export const honours = [
  { year: "2024", title: "Hosur District Youth League — Champions (U-15)" },
  { year: "2023", title: "Krishnagiri Inter-Academy Cup — Runners-up (U-13)" },
  { year: "2022", title: "TN Grassroots Festival — Best Academy Award" },
  { year: "2021", title: "Hosur Super Cup — Champions (U-17)" },
];

export const events = [
  {
    date: "24 Aug",
    title: "Open Trials — U-13 & U-15",
    location: "HFA Ground, Hosur",
    detail: "7:00 AM · Free entry, register in advance.",
  },
  {
    date: "07 Sep",
    title: "HFA Monsoon Cup 2026",
    location: "HFA Ground, Hosur",
    detail: "Two-day inter-academy tournament across four age categories.",
  },
  {
    date: "19 Oct",
    title: "Goalkeeper Masterclass",
    location: "HFA Ground, Hosur",
    detail: "Half-day specialist clinic with guest state-level keepers.",
  },
  {
    date: "15 Nov",
    title: "Parents' Match Day & Awards",
    location: "HFA Ground, Hosur",
    detail: "Season showcase, family 7s and the annual academy awards night.",
  },
];

export const faqs = [
  {
    q: "What age can my child start?",
    a: "We accept players from age five in our Little Kickers group. There is no upper limit — we run adult fitness football sessions in the evenings too.",
  },
  {
    q: "Is there a trial session?",
    a: "Yes. Every new player gets one free trial session so you and your child can experience the coaching before committing.",
  },
  {
    q: "What should players bring?",
    a: "Football boots, shin guards, a water bottle and comfortable training kit. Academy jerseys are provided after enrolment.",
  },
  {
    q: "How often are the sessions?",
    a: "Most groups train three days a week with weekend match play. Elite Youth adds an extra strength and conditioning slot.",
  },
  {
    q: "Do you help with district and state trials?",
    a: "Absolutely. We prepare players technically and physically, arrange highlight footage and refer them to district and state selectors.",
  },
  {
    q: "Where is the academy located?",
    a: "Our home ground is in Hosur, Tamil Nadu. Use the map on the contact page for directions, or message us on WhatsApp for the exact landmark.",
  },
];

export const branches = [
  {
    name: "HFA Main Ground",
    address: "HFA Ground, Hosur, Tamil Nadu 635109",
    hours: "Mon–Sat · 6:00–9:00 AM & 4:30–8:00 PM",
  },
];
