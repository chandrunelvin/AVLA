import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SiteFooter from './components/layout/SiteFooter';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import HomePage from './pages/HomePage';

function getActivePage(pathname) {
  if (pathname === '/about') {
    return 'about';
  }

  if (pathname === '/products') {
    return 'products';
  }

  if (pathname === '/blog') {
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
      <main className="pt-[108px]">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/blog" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
