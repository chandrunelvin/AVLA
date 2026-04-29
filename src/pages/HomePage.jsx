import AboutUsHomeSection from '../components/home/AboutUsHomeSection';
import ContactUsHomeSection from '../components/home/ContactUsHomeSection';
import FeedHomeComponent from '../components/home/FeedHomeComponent';
import HeroSection from '../components/home/HeroSection';
import ProjectsHomeSection from '../components/home/ProjectsHomeSection';
import ServiceCategoriesSection from '../components/home/ServiceCategoriesSection';

export default function HomePage() {
  return (
    <div id="home" className="px-3 pb-12 sm:px-4 lg:px-[10px] lg:pb-[50px]">
      <HeroSection />
      <AboutUsHomeSection />
      <ServiceCategoriesSection />
      <ProjectsHomeSection />
      <FeedHomeComponent />
      <ContactUsHomeSection />
    </div>
  );
}
