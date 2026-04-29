import { useState } from 'react';
import BlogCaseStudies from '../components/blog/BlogCaseStudies';
import BlogHero from '../components/blog/BlogHero';
import FaqCategoryTabs from '../components/faq/FaqCategoryTabs';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('fish');

  return (
    <div className="px-[10px] pb-[50px]">
      <BlogHero />
      <FaqCategoryTabs activeCategory={activeCategory} onChange={setActiveCategory} />
      <BlogCaseStudies activeCategory={activeCategory} />
    </div>
  );
}
