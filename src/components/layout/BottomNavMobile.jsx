import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  {
    id: 'home',
    label: 'Home',
    icon: '/assets/images/home/home.svg',
    activeIcon: '/assets/images/home/home-active.svg',
    route: '/',
  },
  {
    id: 'about',
    label: 'About',
    icon: '/assets/images/home/about.svg',
    activeIcon: '/assets/images/home/about-active.svg',
    route: '/about',
  },
  {
    id: 'service',
    label: 'Product',
    icon: '/assets/images/home/product.svg',
    activeIcon: '/assets/images/home/protuct-active.svg',
    route: '/products',
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: '/assets/images/home/blog.svg',
    activeIcon: '/assets/images/home/blog-acive.svg',
    route: '/blog',
  },
];

export default function BottomNavMobile() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  let activePage = '';
  if (pathname === '/') activePage = 'home';
  else if (pathname.startsWith('/about')) activePage = 'about';
  else if (pathname.startsWith('/product') || pathname.startsWith('/portfolio')) activePage = 'service';
  else if (pathname.startsWith('/blog')) activePage = 'blog';

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] flex justify-center md:hidden pointer-events-none"
      style={{ paddingBottom: 'calc(15px + env(safe-area-inset-bottom))' }}
    >
      <div
        className="bg-white rounded-[72px] flex items-center justify-between px-[10px] pointer-events-auto"
        style={{
          width: 'calc(100% - 16px)',
          maxWidth: '254px',
          height: '60px',
          boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.25)',
        }}
      >
        {navItems.map((item) => {
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.route)}
              className={`flex items-center gap-[10px] transition-all duration-200 border-none outline-none h-[40px] ${
                isActive
                  ? 'bg-[#0161FE] rounded-[95px] px-[13.5px] py-[13.5px]'
                  : 'px-[10px] py-[17px]'
              }`}
            >
              <img
                src={isActive ? item.activeIcon : item.icon}
                alt={item.label}
                className="h-[16px] w-[16px] object-contain"
              />
              {isActive && (
                <span className="text-white font-bold text-[11px] leading-[28px] whitespace-nowrap capitalize">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
