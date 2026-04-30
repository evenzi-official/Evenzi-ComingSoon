import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Hero } from "@/components/evenzi/Hero";
import { FeatureTeasers } from "@/components/evenzi/FeatureTeasers";
import { Waitlist } from "@/components/evenzi/Waitlist";
import { SiteFooter } from "@/components/evenzi/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <FeatureTeasers />
      <Waitlist />
      <SiteFooter /> 
      <Toaster />
    </main>
  );
}
