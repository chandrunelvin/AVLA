import { Navigate, useParams } from 'react-router-dom';
import FaqHero from '../components/faq/FaqHero';
import FaqListSection from '../components/faq/FaqListSection';
import OurProductsSection from '../components/shared/OurProductsSection';
import { findProductBySlug } from '../data/productDetails';

export default function FaqDetailsPage() {
  const { slug } = useParams();
  const product = findProductBySlug(slug);

  if (!product) {
    return <Navigate to="/faq" replace />;
  }

  return (
    <div className="px-[10px] pb-[50px]">
      <FaqHero />
      <FaqListSection productSlug={product.slug} />
      <OurProductsSection />
    </div>
  );
}
