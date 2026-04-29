import { useState } from 'react';
import FaqCategoryTabs from '../components/faq/FaqCategoryTabs';
import FaqHero from '../components/faq/FaqHero';
import FaqListSection from '../components/faq/FaqListSection';

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('fish');

  return (
    <div className="px-[10px] pb-[50px]">
      <FaqHero />
      <FaqCategoryTabs activeCategory={activeCategory} onChange={setActiveCategory} />
      <FaqListSection activeCategory={activeCategory} />
    </div>
  );
}
