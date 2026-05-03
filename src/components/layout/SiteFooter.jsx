import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const primaryLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Service', path: '/products' },
  { label: 'Blog', path: '/blog' },
];

const infrastructureLinks = ['Our Infrastructure', 'Events', 'Galary', 'Events'];
const productLinks = ['Fish', 'Octopus', 'Crab', 'FAQ'];

const socials = [
  { label: 'Facebook',  icon: '/assets/images/home/fb-icon.svg',       href: 'https://www.facebook.com' },
  { label: 'Instagram', icon: '/assets/images/home/insta-icon.svg',     href: 'https://www.instagram.com' },
  { label: 'X',         icon: '/assets/images/home/x-icon.svg',         href: 'https://www.x.com' },
  { label: 'LinkedIn',  icon: '/assets/images/home/linkdin.svg',         href: 'https://www.linkedin.com' },
  { label: 'WhatsApp',  icon: '/assets/images/home/whatsapp-icon.svg',  href: 'https://wa.me/919446017777' },
  { label: 'YouTube',   icon: '/assets/images/home/youtube.svg',         href: 'https://www.youtube.com' },
];

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
    <div className="px-[10px] pb-[120px] md:pb-[10px]">
      <footer className="mx-auto mt-[0px] h-[930px] overflow-hidden rounded-[18px] bg-[#222222] md:h-[361px] md:rounded-[15px]">
        <div className="relative h-full w-full text-white">
        <button
          type="button"
          aria-label="Go to home"
          onClick={() => navigate('/')}
          className="absolute left-1/2 top-[55px] h-[56px] w-[199px] -translate-x-1/2 md:left-[50px] md:top-[50px] md:h-[58px] md:w-[200px] md:translate-x-0"
        >
          <img
            src="/assets/images/project/logo.png"
            alt="AVLA Nettos Exports"
            className="h-full w-full object-contain"
          />
        </button>

        <p className="absolute left-[23px] top-[177px] text-[22px] font-normal leading-[28px] md:left-[51px] md:top-[141px]">
          Subscribe to our news later
        </p>

        <div className="absolute left-[23px] top-[216px] flex w-[calc(100%-46px)] flex-col gap-[10px] md:left-[51px] md:top-[181px] md:h-[38px] md:w-auto md:flex-row md:items-center">
          <input
            aria-label="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="h-[42px] w-full rounded-full border-0 bg-[#3A3A3A] px-[23px] text-[14px] text-white outline-none placeholder:text-white/45 md:h-[38px] md:w-[200px] md:bg-white/10 md:px-[20px]"
          />
          <button
            type="button"
            onClick={subscribe}
            className="h-[43px] w-full rounded-full bg-[#0161FE] text-[14px] font-medium text-white md:h-[38px] md:w-[102px]"
          >
            Subscribe
          </button>
        </div>

        <nav className="absolute left-[23px] top-[348px] flex flex-col gap-[24px] text-[16px] font-normal leading-[22px] text-white/70 md:left-[930px] md:top-[65px] md:gap-[32px] md:leading-[20px]">
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

        <div className="absolute left-[177px] top-[348px] flex flex-col gap-[24px] text-[16px] font-normal leading-[22px] text-white/70 md:left-[1063px] md:top-[65px] md:gap-[32px] md:leading-[20px]">
          {infrastructureLinks.map((link, index) => (
            <p key={`${link}-${index}`}>{link}</p>
          ))}
        </div>

        <div className="absolute left-[23px] top-[533px] flex flex-col gap-[24px] text-[16px] font-normal leading-[22px] text-white/70 md:left-[1245px] md:top-[65px] md:gap-[32px] md:leading-[20px]">
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

        <p className="absolute left-[51px] top-[295px] hidden text-[14px] leading-[18px] text-white md:block">
          Designed by Arunijone
        </p>
        <p className="absolute left-1/2 top-[862px] w-full -translate-x-1/2 text-center text-[14px] leading-[18px] text-white md:left-[610px] md:top-[295px] md:w-auto md:translate-x-0 md:text-left">
          <span className="md:hidden">© 2025 Temlis. All rights reserved.</span>
          <span className="hidden md:inline">© 2025 Arunijone. All rights reserved.</span>
        </p>

        <div className="absolute left-1/2 top-[727px] flex w-[240px] -translate-x-1/2 flex-wrap justify-center gap-x-[10px] gap-y-[14px] md:left-auto md:right-[50px] md:top-[282px] md:h-[38px] md:w-auto md:translate-x-0 md:flex-nowrap md:items-center md:justify-start md:gap-[14px]">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <img
                src={social.icon}
                alt={social.label}
                className="h-[36px] w-[36px] object-contain"
              />
            </a>
          ))}
        </div>
        </div>
      </footer>
    </div>
  );
}
