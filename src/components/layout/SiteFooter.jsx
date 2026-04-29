import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const primaryLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Service', path: '/products' },
  { label: 'Blog', path: '/blog' },
];

const infrastructureLinks = ['Our Infrastructure', 'Events', 'Galary', 'Development'];
const productLinks = ['Fish', 'Octoups', 'Crab', 'FAQ'];
const socials = ['◉', 'f', '◎', '♣', 'in', '▶', '◈', 'Bē'];

export default function SiteFooter() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  function subscribe() {
    if (!email.trim()) {
      return;
    }

    console.log('Subscribed email:', email);
    setEmail('');
  }

  return (
    <div className="px-[10px] pb-[50px]">
      <footer className="mx-auto mt-[50px] h-[361px] overflow-hidden rounded-[15px] bg-[#222222]">
        <div className="relative h-full w-full text-white">
        <button
          type="button"
          aria-label="Go to home"
          onClick={() => navigate('/')}
          className="absolute left-[50px] top-[50px] h-[58px] w-[200px]"
        >
          <img
            src="/assets/images/logo-avla-nettos.svg"
            alt="AVLA Nettos Exports"
            className="h-full w-full object-contain"
          />
        </button>

        <p className="absolute left-[51px] top-[141px] text-[22px] font-normal leading-[28px]">
          Subscribe to our news later
        </p>

        <div className="absolute left-[51px] top-[181px] flex h-[38px] items-center gap-[10px]">
          <input
            aria-label="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="h-[38px] w-[200px] rounded-full border-0 bg-white/10 px-[20px] text-[14px] text-white outline-none placeholder:text-white/45"
          />
          <button
            type="button"
            onClick={subscribe}
            className="h-[38px] w-[102px] rounded-full bg-[#0161FE] text-[14px] font-medium text-white"
          >
            Subscribe
          </button>
        </div>

        <nav className="absolute left-[930px] top-[65px] flex flex-col gap-[32px] text-[16px] leading-[20px] text-white/70">
          {primaryLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => navigate(link.path)}
              className="text-left"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="absolute left-[1063px] top-[65px] flex flex-col gap-[32px] text-[16px] leading-[20px] text-white/70">
          {infrastructureLinks.map((link) => (
            <p key={link}>{link}</p>
          ))}
        </div>

        <div className="absolute left-[1245px] top-[65px] flex flex-col gap-[32px] text-[16px] leading-[20px] text-white/70">
          {productLinks.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => {
                if (link === 'FAQ') {
                  navigate('/faq');
                }
              }}
              className={`text-left ${link === 'FAQ' ? 'font-semibold text-white' : ''}`}
            >
              {link}
            </button>
          ))}
        </div>

        <p className="absolute left-[51px] top-[295px] text-[14px] leading-[18px] text-white">
          Designed by Arunijone
        </p>
        <p className="absolute left-[610px] top-[295px] text-[14px] leading-[18px] text-white">
          © 2025 Arunijone. All rights reserved.
        </p>

        <div className="absolute right-[50px] top-[282px] flex h-[38px] items-center gap-[14px]">
          {socials.map((social) => (
            <span
              key={social}
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white/10 text-[15px] font-semibold text-white"
            >
              {social}
            </span>
          ))}
        </div>
        </div>
      </footer>
    </div>
  );
}
