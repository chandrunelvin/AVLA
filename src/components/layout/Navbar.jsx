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
    <header className=" inset-x-0 top-0 z-30 bg-white px-[10px] pt-[10px]">
      <div className="relative mx-auto flex h-[59px] w-full items-center justify-between rounded-[20px] bg-[#F6F7F9] px-[18px] md:h-[88px] md:px-[43px]">

        {/* Logo */}
        <button
          type="button"
          aria-label="Go to home"
          onClick={() => navigate('/')}
          className="h-[37px] w-[133px] flex-shrink-0 md:h-[55px] md:w-[193px]"
        >
          <img
            src="/assets/images/project/logo.png"
            alt="AVLA Nettos Exports"
            className="h-full w-full object-contain"
          />
        </button>

        {/* Desktop nav links */}
        <nav className="absolute left-1/2 top-[33px] hidden -translate-x-1/2 items-center gap-[72px] md:flex">
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

        {/* Contact button */}
        <button
          type="button"
          onClick={() => navigate('/contact')}
          className="flex h-[42px] w-[100px] flex-shrink-0 items-center justify-center rounded-full bg-[#0161FE] text-[15px] font-normal text-white md:h-[50px] md:w-[115px] md:text-[17px]"
        >
          Contact
        </button>

      </div>
    </header>
  );
}
