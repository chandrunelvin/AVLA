import AboutHeroSection from '../components/about/AboutHeroSection';
import AboutStatsSection from '../components/about/AboutStatsSection';
import AboutFeaturesSection from '../components/about/AboutFeaturesSection';
import AboutShowcaseSection from '../components/about/AboutShowcaseSection';
import OurProductsSection from '../components/shared/OurProductsSection';

export default function AboutPage() {
  return (
    <div className="space-y-[10px] px-3 pb-12 sm:px-4 lg:px-[10px] lg:pb-[50px]">
      <AboutHeroSection />
      <AboutStatsSection />
      <AboutFeaturesSection />
      <AboutShowcaseSection />
      <OurProductsSection />
    </div>
  );
}
