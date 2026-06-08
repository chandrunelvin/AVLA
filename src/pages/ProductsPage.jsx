import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FaqCategoryTabs from '../components/faq/FaqCategoryTabs';
import ProductHero from '../components/products/ProductHero';
import ProductListSection from '../components/products/ProductListSection';

const VALID_CATEGORIES = ['fish', 'cephalopods', 'crustaceans', 'bivalve'];

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramCategory = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(
    VALID_CATEGORIES.includes(paramCategory) ? paramCategory : 'fish',
  );

  function handleCategoryChange(category) {
    setActiveCategory(category);
    setSearchParams({ category }, { replace: true });
  }

  return (
    <div className="px-[10px] pb-[50px]">
      <ProductHero />
      <FaqCategoryTabs activeCategory={activeCategory} onChange={handleCategoryChange} />
      <ProductListSection activeCategory={activeCategory} />
    </div>
  );
}
