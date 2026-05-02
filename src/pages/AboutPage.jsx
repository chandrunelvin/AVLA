import AboutShowcaseSection from '../components/about/AboutShowcaseSection';
import AboutUsHomeSection from '../components/home/AboutUsHomeSection';
import HeroSection from '../components/home/HeroSection';
import ProjectsHomeSection from '../components/home/ProjectsHomeSection';

export default function AboutPage() {
  return (
    <div className="px-3 pb-12 sm:px-4 lg:px-[10px] lg:pb-[50px]">
      <HeroSection />
      <AboutUsHomeSection />
      <AboutShowcaseSection />
      <ProjectsHomeSection />
    </div>
  );
}
