import { Navigate, useParams } from 'react-router-dom';
import ProductDetailsContent from '../components/product-details/ProductDetailsContent';
import { findProductBySlug } from '../data/productDetails';

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const product = findProductBySlug(slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return <ProductDetailsContent product={product} />;
}
