import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  {
    id: 'home',
    label: 'Home',
    icon: '/assets/homemob/images/home.svg',
    route: '/',
  },
  {
    id: 'about',
    label: 'About',
    icon: '/assets/homemob/images/familiar_face_and_zone.svg',
    route: '/about',
  },
  {
    id: 'service',
    label: 'Service',
    icon: '/assets/homemob/images/draw.svg',
    route: '/products',
  },
  {
    id: 'blog',
    label: 'Blogs',
    icon: '/assets/homemob/images/article_person.svg',
    route: '/blog',
  },
];

export default function BottomNavMobile() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  let activePage = '';
  if (pathname === '/') activePage = 'home';
  else if (pathname.startsWith('/about') || pathname.startsWith('/contact')) activePage = 'about';
  else if (pathname.startsWith('/product') || pathname.startsWith('/portfolio')) activePage = 'service';
  else if (pathname.startsWith('/blog')) activePage = 'blog';

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] flex justify-center md:hidden pointer-events-none"
      style={{ paddingBottom: 'calc(15px + env(safe-area-inset-bottom))' }}
    >
      <div
        className="bg-white rounded-[72px] flex items-center justify-between px-[15px] pointer-events-auto"
        style={{
          width: 'calc(100% - 16px)',
          maxWidth: '430px',
          height: '89px',
          boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.25)',
        }}
      >
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          const iconFilter = isActive
            ? 'brightness(0) invert(1)'
            : 'invert(12%) sepia(96%) saturate(4000%) hue-rotate(190deg) brightness(95%) contrast(101%)';

          const renderIcon = () => {
            if (item.id === 'home') {
              const fill = isActive ? '#FFFFFF' : '#0161FE';
              return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" fill={fill} />
                </svg>
              );
            }
            return (
              <img
                src={item.icon}
                alt={item.label}
                className="w-[22px] h-[22px]"
                style={{ filter: iconFilter }}
              />
            );
          };

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.route)}
              className={`flex items-center gap-[10px] transition-all duration-200 border-none outline-none ${
                isActive
                  ? 'bg-[#0161FE] rounded-[95px] px-[20px] py-[17px]'
                  : 'px-[10px] py-[17px]'
              }`}
            >
              {renderIcon()}
              {isActive && (
                <span className="text-white font-bold text-[16px] leading-[28px] whitespace-nowrap capitalize">
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
