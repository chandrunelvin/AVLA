import AboutUsHomeSection from '../components/home/AboutUsHomeSection';
import FeedHomeComponent from '../components/home/FeedHomeComponent';
import HeroSection from '../components/home/HeroSection';
import ServiceCategoriesSection from '../components/home/ServiceCategoriesSection';

export default function HomePage() {
  return (
    <div id="home" className="px-3 pb-12 sm:px-4">
      <HeroSection />
      <AboutUsHomeSection />
      <ServiceCategoriesSection />
      <FeedHomeComponent />
    </div>
  );
}
