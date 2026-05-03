import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SiteFooter from './components/layout/SiteFooter';
import BottomNavMobile from './components/layout/BottomNavMobile';
import ContactPage from './pages/ContactPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import BlogPage from './pages/BlogPage';
import FaqPage from './pages/FaqPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage';

function getActivePage(pathname) {
  if (pathname === '/about') {
    return 'about';
  }

  if (pathname === '/products' || pathname.startsWith('/products/')) {
    return 'products';
  }

  if (pathname === '/blog' || pathname.startsWith('/blog/')) {
    return 'blogs';
  }

  if (pathname === '/contact') {
    return 'contact';
  }

  if (pathname === '/faq') {
    return 'faq';
  }

  return 'home';
}

function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar activePage={getActivePage(location.pathname)} fullWidth />
      <main className="pt-[108px] pb-[110px] md:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <BottomNavMobile />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
