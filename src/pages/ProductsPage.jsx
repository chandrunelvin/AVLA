import { useState } from 'react';
import FaqCategoryTabs from '../components/faq/FaqCategoryTabs';
import ProductHero from '../components/products/ProductHero';
import ProductListSection from '../components/products/ProductListSection';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('fish');

  return (
    <div className="px-[10px] pb-[50px]">
      <ProductHero />
      <FaqCategoryTabs activeCategory={activeCategory} onChange={setActiveCategory} />
      <ProductListSection activeCategory={activeCategory} />
    </div>
  );
}
