import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer, WhatsAppButton } from "@/components/site/Community";
import { PageTransition } from "@/components/site/PageTransition";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
