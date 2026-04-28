import { useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', page: 'home', route: '/', width: 'w-[44px]' },
  { label: 'About', page: 'about', route: '/', width: 'w-[41px]' },
  { label: 'Service', page: 'service', route: '/', width: 'w-[51px]' },
  { label: 'Blogs', page: 'blogs', route: '/', width: 'w-[38px]' },
];

export default function Navbar({ activePage, fullWidth = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isContactPage = location.pathname === '/';

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-3 pt-3 sm:px-4">
      <div
        className={
          fullWidth
            ? 'mx-auto w-full max-w-[1440px] rounded-[22.355138778686523px] bg-[#F6F7F9]'
            : 'mx-auto w-full max-w-[1420px] rounded-[22.355138778686523px] bg-[#F6F7F9]'
        }
      >
        <div className="relative rounded-[22.355138778686523px] bg-[#F6F7F9] px-4 py-3 shadow-[0_20px_60px_rgba(2,8,23,0.08)] sm:px-8">
          <div className="flex min-h-16 items-center justify-between gap-4">
            <button
              type="button"
              aria-label="Go to home"
              onClick={() => navigate('/')}
              className="h-16 w-[67px] shrink-0 rounded-[500px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/assets/images/home/home-hero.svg)',
              }}
            />

            <nav className="hidden items-center gap-8 px-4 md:flex lg:gap-[72px]">
              {NAV_ITEMS.map(({ label, page, route, width }) => {
                const isActive = activePage === page;

                return (
                  <button
                    key={page}
                    type="button"
                    className={`relative flex h-[23px] ${width} items-center justify-center`}
                    onClick={() => navigate(route)}
                  >
                    <span
                      className={`whitespace-nowrap bg-clip-text text-[16px] font-normal leading-[22.35px] text-transparent ${
                        isActive
                          ? 'bg-[rgba(1,97,254,1)]'
                          : 'bg-[rgba(17,17,17,1)]'
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </nav>

            <button
              type="button"
              className={`flex h-[53px] min-w-[115px] items-center justify-center rounded-[111.78555297851562px] px-[26px] py-[15px] transition ${
                isContactPage
                  ? 'bg-slate-900'
                  : 'bg-[rgba(1,97,254,1)] hover:brightness-110'
              }`}
              onClick={() => navigate('/')}
            >
              <span
                className="whitespace-nowrap text-[15.777778625488281px] font-medium leading-[22.47px] tracking-[-0.07888888567686081px] text-white"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Contact
              </span>
            </button>
          </div>

          <nav className="mt-4 flex flex-wrap items-center justify-center gap-4 px-2 md:hidden">
            {NAV_ITEMS.map(({ label, page, route }) => {
              const isActive = activePage === page;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => navigate(route)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? 'bg-[rgba(1,97,254,1)] text-white'
                      : 'bg-slate-200 text-slate-900'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
