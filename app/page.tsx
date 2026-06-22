import { Hero } from "@/components/evenzi/Hero";
import { FeatureTeasers } from "@/components/evenzi/FeatureTeasers";
import { Waitlist } from "@/components/evenzi/Waitlist";
import { Contact } from "@/components/evenzi/Contact";
import { SiteFooter } from "@/components/evenzi/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <FeatureTeasers />
      <Waitlist />
      <Contact />
      <SiteFooter />
      <Toaster />
    </main>
  );
}
