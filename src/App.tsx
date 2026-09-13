import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ProgramsPage } from "@/pages/ProgramsPage";
import { CoachesPage } from "@/pages/CoachesPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { AchievementsPage } from "@/pages/AchievementsPage";
import { EventsPage } from "@/pages/EventsPage";
import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import { FaqPage } from "@/pages/FaqPage";
import { ContactPage } from "@/pages/ContactPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsPage } from "@/pages/TermsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/coaches" element={<CoachesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
