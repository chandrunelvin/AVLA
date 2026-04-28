import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SiteFooter from './components/layout/SiteFooter';
import HomePage from './pages/HomePage';

function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar activePage="home" fullWidth />
      <main className="pt-28">
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
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
