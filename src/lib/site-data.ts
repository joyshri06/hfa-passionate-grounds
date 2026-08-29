import {
  Activity,
  Award,
  CalendarDays,
  Dumbbell,
  HeartPulse,
  Medal,
  ShieldCheck,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const WHATSAPP_NUMBER = "919876543210";
export const PHONE_DISPLAY = "+91 98765 43210";
export const PHONE_HREF = "+919876543210";
export const EMAIL = "hello@hosurfootballacademy.in";
export const MAPS_QUERY = "Hosur+Football+Academy+Hosur+Tamil+Nadu";
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/hosurfootballacademy/",
  facebook: "https://www.facebook.com/hosurfootballacademy/",
  youtube: "https://www.youtube.com/@hosurfootballacademy",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/coaches", label: "Coaches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/achievements", label: "Achievements" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export const heroStats = [
  { value: 500, suffix: "+", label: "Players trained" },
  { value: 8, suffix: "", label: "Years since 2018" },
  { value: 25, suffix: "+", label: "Trophies won" },
  { value: 12, suffix: "", label: "Certified coaches" },
];

export const programs = [
  {
    icon: Star,
    name: "Little Kickers",
    age: "Age 5 – 8",
    text: "Fun-first introduction to football: coordination, balance, first touch and love for the ball.",
    schedule: "Mon · Wed · Fri — 4:30–5:45 PM",
    fee: "₹1,200 / month",
  },
  {
    icon: Activity,
    name: "Development Squad",
    age: "Age 9 – 13",
    text: "Technical foundations, small-sided games and positional understanding with weekly match play.",
    schedule: "Mon · Wed · Fri — 5:45–7:15 PM",
    fee: "₹1,500 / month",
  },
  {
    icon: Trophy,
    name: "Elite Youth",
    age: "Age 14 – 18",
    text: "High-performance training, tactical periodisation and scouting exposure for district & state trials.",
    schedule: "Tue · Thu · Sat — 6:00–8:00 AM",
    fee: "₹2,000 / month",
  },
  {
    icon: Dumbbell,
    name: "Strength & Fitness",
    age: "All ages",
    text: "Sports-science-led conditioning, speed and agility, mobility and injury-prevention programming.",
    schedule: "Tue · Thu — 6:30–8:00 PM",
    fee: "₹1,500 / month",
  },
  {
    icon: ShieldCheck,
    name: "Goalkeeper Lab",
    age: "Age 10+",
    text: "Specialist handling, shot-stopping, distribution and reflex work with a dedicated GK coach.",
    schedule: "Sat — 7:00–8:30 AM",
    fee: "₹1,000 / month",
  },
  {
    icon: HeartPulse,
    name: "Adult Fitness Football",
    age: "Age 18+",
    text: "Evening sessions for working adults — cardio, conditioning and competitive 7-a-side.",
    schedule: "Wed · Sat — 8:00–9:30 PM",
    fee: "₹1,200 / month",
  },
];

export const programPillars = [
  {
    icon: Activity,
    title: "Football Training",
    text: "Technique, passing patterns, game intelligence and position-specific coaching in every session.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Conditioning",
    text: "Speed, agility, strength and mobility blocks built around each age group's development stage.",
  },
  {
    icon: Star,
    title: "Skill Development",
    text: "Ball mastery, 1v1 work, finishing and weak-foot programmes tracked through the season.",
  },
  {
    icon: Trophy,
    title: "Match Exposure",
    text: "Inter-academy leagues, district tournaments and friendlies so learning is tested under pressure.",
  },
];

export const reasons = [
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

export const coaches = [
  {
    name: "Arun Kumar",
    role: "Founder & Head Coach",
    initials: "AK",
    experience: "12+ years coaching",
    specialization: "Elite youth pathway · Tactical development",
    bio: "AIFF D-Licence. Former district captain. Leads the elite youth pathway and oversees the academy curriculum.",
  },
  {
    name: "Vignesh R.",
    role: "Technical Coach",
    initials: "VR",
    experience: "7 years coaching",
    specialization: "Ball mastery · 1v1 development",
    bio: "Specialist in ball mastery and 1v1 development for the 9–13 age group.",
  },
  {
    name: "Sathish M.",
    role: "Strength & Conditioning",
    initials: "SM",
    experience: "6 years in sports science",
    specialization: "Athletic development · Rehab",
    bio: "Sports science graduate handling athletic development, testing and return-to-play work.",
  },
  {
    name: "Prakash D.",
    role: "Goalkeeping Coach",
    initials: "PD",
    experience: "9 years coaching",
    specialization: "Shot-stopping · Distribution",
    bio: "Ex-state keeper running the dedicated Goalkeeper Lab sessions every weekend.",
  },
];

export const achievementStats = [
  { value: 25, suffix: "+", label: "Tournament trophies" },
  { value: 40, suffix: "+", label: "District selections" },
  { value: 9, suffix: "", label: "State-level players" },
  { value: 500, suffix: "+", label: "Academy alumni" },
];

export const honours = [
  {
    year: "2024",
    title: "Hosur District Youth League — Champions (U-15)",
    detail: "Unbeaten across the league phase with the tightest defence in the competition.",
  },
  {
    year: "2023",
    title: "Krishnagiri Inter-Academy Cup — Runners-up (U-13)",
    detail: "Reached the final in the academy's first appearance at the district cup.",
  },
  {
    year: "2022",
    title: "TN Grassroots Festival — Best Academy Award",
    detail: "Recognised for grassroots participation and coach education standards.",
  },
  {
    year: "2021",
    title: "Hosur Super Cup — Champions (U-17)",
    detail: "First senior youth title for HFA, won on home turf.",
  },
];

export const playerHonours = [
  "9 players selected for state-level squads since 2019",
  "40+ district team call-ups across U-13, U-15 and U-17",
  "3 alumni currently on college football scholarships",
];

export const events = [
  {
    date: "24 Aug",
    year: "2026",
    type: "Trials",
    title: "Open Trials — U-13 & U-15",
    location: "HFA Ground, Hosur",
    detail: "7:00 AM start. Free entry, register in advance. Bring boots, shin guards and water.",
  },
  {
    date: "07 Sep",
    year: "2026",
    type: "Tournament",
    title: "HFA Monsoon Cup 2026",
    location: "HFA Ground, Hosur",
    detail: "Two-day inter-academy tournament across four age categories.",
  },
  {
    date: "19 Oct",
    year: "2026",
    type: "Camp",
    title: "Goalkeeper Masterclass",
    location: "HFA Ground, Hosur",
    detail: "Half-day specialist clinic with guest state-level keepers. Limited to 20 places.",
  },
  {
    date: "15 Nov",
    year: "2026",
    type: "Academy Day",
    title: "Parents' Match Day & Awards",
    location: "HFA Ground, Hosur",
    detail: "Season showcase, family 7-a-side and the annual academy awards night.",
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
  {
    q: "How do I register?",
    a: "Fill in the registration form on this site and our team will confirm your trial slot on WhatsApp within a day.",
  },
];

export const branches = [
  {
    name: "HFA Main Ground",
    address: "HFA Ground, Hosur, Tamil Nadu 635109",
    timings: "Mon–Sat · 6:00–9:00 AM & 4:30–8:00 PM",
  },
  {
    name: "HFA Fitness Centre",
    address: "Hosur, Tamil Nadu 635109",
    timings: "Tue–Sat · 6:30–9:30 PM",
  },
];

export const galleryImages = [
  {
    src: g1,
    alt: "Academy players running a cone dribbling drill at sunset",
    category: "Training",
  },
  {
    src: g2,
    alt: "Coach briefing the squad in a huddle before training",
    category: "Training",
  },
  {
    src: g3,
    alt: "Junior team celebrating with a championship trophy",
    category: "Matchday",
  },
  {
    src: g4,
    alt: "Close-up of a boot striking the ball under floodlights",
    category: "Facilities",
  },
];

export const galleryCategories = ["All", "Training", "Matchday", "Facilities"] as const;
