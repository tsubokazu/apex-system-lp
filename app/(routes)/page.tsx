import { HeroSection } from "@/components/pages/route/hero-section";
import { FeatureCards } from "@/components/pages/route/feature-cards";
import { ToolDownload } from "@/components/pages/route/tool-download";
import { PricingPlans } from "@/components/pages/route/pricing-plans";
import { NewsletterSignup } from "@/components/pages/route/newsletter-signup";
import { useAuth } from "@/hooks/useAuth";

export default function LandingPage() {
  const { user } = useAuth();

  if (!user) {
    return <div>ログインしていません</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <HeroSection />
      <main className="px-4 py-12">
        <FeatureCards />
        <ToolDownload />
        <PricingPlans />
        <NewsletterSignup />
      </main>
    </div>
  );
}
