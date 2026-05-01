import { useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', page: 'home', route: '/' },
  { label: 'About', page: 'about', route: '/about' },
  { label: 'Products', page: 'products', route: '/products' },
  { label: 'Blogs', page: 'blogs', route: '/blog' },
];

export default function Navbar({ activePage }) {
  const navigate = useNavigate();

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-[10px] pt-[10px]">
      <div className="relative mx-auto h-[88px] w-full rounded-[20px] bg-[#F6F7F9]">
        <button
          type="button"
          aria-label="Go to home"
          onClick={() => navigate('/')}
          className="absolute left-[43px] top-[16px] h-[55px] w-[193px]"
        >
          <img
            src="/assets/logo.png"
            alt="AVLA Nettos Exports"
            className="h-full w-full object-contain"
          />
        </button>

        <nav className="absolute left-1/2 top-[39px] hidden -translate-x-1/2 items-center gap-[72px] md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.page;

            return (
              <button
                key={item.page}
                type="button"
                onClick={() => navigate(item.route)}
                className={`whitespace-nowrap text-[16px] font-normal leading-[20px] ${
                  isActive ? 'text-[#0161FE]' : 'text-[#111111]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => navigate('/contact')}
          className={`absolute right-[43px] top-[18px] flex h-[50px] w-[115px] items-center justify-center rounded-full bg-[#0161FE] text-[17px] font-normal leading-[22px] text-white ${
            activePage === 'contact' ? 'brightness-100' : ''
          }`}
        >
          Contact
        </button>
      </div>
    </header>
  );
}
