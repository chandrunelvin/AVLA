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
    if (!email.trim()) return;
    console.log('Subscribed email:', email);
    setEmail('');
  }

  return (
    <div className="px-[10px] pb-[120px] min-[1000px]:pb-[10px]">
      <footer className="mx-auto mt-[0px] overflow-hidden rounded-[18px] bg-[#222222] min-[1000px]:rounded-[15px]">

        {/* ── Mobile layout (< 1000px) ── */}
        <div className="relative h-[930px] text-white min-[1000px]:hidden">
          <button
            type="button"
            aria-label="Go to home"
            onClick={() => navigate('/')}
            className="absolute left-1/2 top-[55px] h-[56px] w-[199px] -translate-x-1/2"
          >
            <img src="/assets/images/project/logo.png" alt="AVLA Nettos Exports" className="h-full w-full object-contain" />
          </button>

          <p className="absolute left-[23px] top-[177px] text-[22px] font-normal leading-[28px]">
            Subscribe to our news later
          </p>

          <div className="absolute left-[23px] top-[216px] flex w-[calc(100%-46px)] flex-col gap-[10px]">
            <input
              aria-label="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-[42px] w-full rounded-full border-0 bg-[#3A3A3A] px-[23px] text-[14px] text-white outline-none placeholder:text-white/45"
            />
            <button type="button" onClick={subscribe} className="h-[43px] w-full rounded-full bg-[#0161FE] text-[14px] font-medium text-white">
              Subscribe
            </button>
          </div>

          <nav className="absolute left-[23px] top-[348px] flex flex-col gap-[24px] text-[16px] font-normal leading-[22px] text-white/70">
            {primaryLinks.map((link) => (
              <button key={link.label} type="button" onClick={() => navigate(link.path)} className="text-left">{link.label}</button>
            ))}
          </nav>

          <div className="absolute left-[177px] top-[348px] flex flex-col gap-[24px] text-[16px] font-normal leading-[22px] text-white/70">
            {infrastructureLinks.map((link, i) => <p key={`${link}-${i}`}>{link}</p>)}
          </div>

          <div className="absolute left-[23px] top-[533px] flex flex-col gap-[24px] text-[16px] font-normal leading-[22px] text-white/70">
            {productLinks.map((link) => (
              <button key={link} type="button" onClick={() => { if (link === 'FAQ') navigate('/faq'); }}
                className={`text-left ${link === 'FAQ' ? 'font-semibold text-white' : ''}`}>
                {link}
              </button>
            ))}
          </div>

          <p className="absolute left-1/2 top-[862px] w-full -translate-x-1/2 text-center text-[14px] leading-[18px] text-white">
            © 2025 Temlis. All rights reserved.
          </p>

          <div className="absolute left-1/2 top-[727px] flex w-[240px] -translate-x-1/2 flex-wrap justify-center gap-x-[10px] gap-y-[14px]">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <img src={social.icon} alt={social.label} className="h-[36px] w-[36px] object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Desktop layout (≥ 1000px) — flex, scales with viewport ── */}
        <div className="hidden min-[1000px]:flex h-[361px] flex-col justify-between px-[50px] py-[50px] text-white">

          {/* Top row: Logo+Subscribe  |  Nav cols */}
          <div className="flex items-start justify-between">
            {/* Left */}
            <div className="flex flex-col gap-[16px]">
              <button type="button" aria-label="Go to home" onClick={() => navigate('/')} className="h-[70px] w-[220px]">
                <img src="/assets/images/project/logo.png" alt="AVLA Nettos Exports" className="h-full w-full object-contain object-left" />
              </button>
              <div className="flex flex-col gap-[8px]">
                <p className="text-[22px] font-normal leading-[28px]">Subscribe to our news later</p>
                <div className="flex items-center gap-[10px]">
                  <input
                    aria-label="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-[38px] w-[200px] rounded-full border-0 bg-white/10 px-[20px] text-[14px] text-white outline-none placeholder:text-white/45"
                  />
                  <button type="button" onClick={subscribe} className="h-[38px] w-[102px] rounded-full bg-[#0161FE] text-[14px] font-medium text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Nav cols */}
            <div className="flex gap-[54px] pr-[75px]">
              <nav className="flex flex-col gap-[28px] text-[16px] font-normal leading-[20px] text-white/70">
                {primaryLinks.map((link) => (
                  <button key={link.label} type="button" onClick={() => navigate(link.path)} className="text-left hover:text-white transition">{link.label}</button>
                ))}
              </nav>
              <div className="flex flex-col gap-[28px] text-[16px] font-normal leading-[20px] text-white/70">
                {infrastructureLinks.map((link, i) => <p key={`${link}-${i}`}>{link}</p>)}
              </div>
              <div className="flex flex-col gap-[28px] text-[16px] font-normal leading-[20px] text-white/70">
                {productLinks.map((link) => (
                  <button key={link} type="button" onClick={() => { if (link === 'FAQ') navigate('/faq'); }}
                    className={`text-left hover:text-white transition ${link === 'FAQ' ? 'font-bold text-white' : ''}`}>
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: Designed by | Copyright | Socials */}
          <div className="flex items-center justify-between">
            <p className="text-[14px] leading-[18px] text-white/70">Designed by Arunijone</p>
            <p className="text-[14px] leading-[18px] text-white/70">© 2025 Arunijone. All rights reserved.</p>
            <div className="flex items-center gap-[10px]">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className="flex  items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <img src={social.icon} alt={social.label} className="h-[38px] w-[38px] object-contain" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </footer>
    </div>
  );
}
