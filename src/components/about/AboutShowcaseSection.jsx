import { FishSymbol, Factory, Snowflake, Waves } from 'lucide-react';

const REFERENCE_IMAGE = '/assets/images/about/about-reference.png';

const infrastructureTabs = [
  { label: 'Purchase Area', icon: FishSymbol, active: true },
  { label: 'Pre Processing Area', icon: Waves },
  { label: 'Production Area', icon: Factory },
  { label: 'Cold Storage', icon: Snowflake },
];

const infrastructureCards = [
  { id: 'infra-1', x: 0, y: 1930 },
  { id: 'infra-2', x: 362, y: 1930 },
  { id: 'infra-3', x: 724, y: 1930 },
  { id: 'infra-4', x: 1086, y: 1930 },
  { id: 'infra-5', x: 109, y: 2310 },
  { id: 'infra-6', x: 471, y: 2310 },
  { id: 'infra-7', x: 833, y: 2310 },
  { id: 'infra-8', x: 1195, y: 2310 },
];

const globalPresenceCards = [
  { id: 'global-1', x: 0, y: 3225 },
  { id: 'global-2', x: 362, y: 3225 },
  { id: 'global-3', x: 724, y: 3225 },
  { id: 'global-4', x: 1086, y: 3225 },
  { id: 'global-5', x: 109, y: 3607 },
  { id: 'global-6', x: 471, y: 3607 },
  { id: 'global-7', x: 833, y: 3607 },
  { id: 'global-8', x: 1195, y: 3607 },
];

function MarqueeRow({ cards, reverse = false, duration = 34 }) {
  const doubledCards = [...cards, ...cards];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-[10px] ${reverse ? 'animate-[marqueeReverse_var(--marquee-duration)_linear_infinite]' : 'animate-[marquee_var(--marquee-duration)_linear_infinite]'}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {doubledCards.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="h-[370.5px] w-[351.5px] flex-none overflow-hidden rounded-[22.52px] bg-white shadow-[0_10px_30px_rgba(17,17,17,0.05)] max-sm:h-[82vw] max-sm:w-[78vw]"
          >
            <div
              className="h-full w-full bg-no-repeat"
              style={{
                backgroundImage: `url(${REFERENCE_IMAGE})`,
                backgroundPosition: `-${card.x}px -${card.y}px`,
                backgroundSize: '1440px 5021px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionBadge({ children }) {
  return (
    <div className="inline-flex h-[37px] items-center justify-center rounded-full border border-[#202833] px-[18px]">
      <span className="text-[14px] font-medium uppercase tracking-[0.22em] text-[#202833]">
        {children}
      </span>
    </div>
  );
}

function InfrastructureTabs() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {infrastructureTabs.map(({ label, icon: Icon, active }) => (
        <button
          key={label}
          type="button"
          className={`inline-flex h-[62px] items-center gap-4 rounded-full px-8 text-[16px] transition ${
            active
              ? 'bg-[#0161FE] text-white shadow-[0_10px_24px_rgba(1,97,254,0.18)]'
              : 'bg-white text-[#0161FE]'
          }`}
        >
          <span
            className={`flex h-[38px] w-[38px] items-center justify-center rounded-full ${
              active ? 'bg-white/18' : 'bg-[#0161FE]'
            }`}
          >
            <Icon
              aria-hidden="true"
              size={18}
              strokeWidth={2}
              className={active ? 'text-white' : 'text-white'}
            />
          </span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export default function AboutShowcaseSection() {
  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-[20px] bg-[#F6F7F9] px-4 py-12 sm:px-6 lg:px-[8px] lg:py-[56px]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <SectionBadge>Our Infrastructure</SectionBadge>
          <h2 className="mt-6 max-w-[720px] text-[34px] font-normal leading-[1.08] text-[#111111] sm:text-[56px]">
            Our Advanced Seafood Processing Facilities in Kerala
          </h2>
        </div>

        <div className="mt-10 flex justify-center">
          <InfrastructureTabs />
        </div>

        <div className="mt-10 space-y-[10px]">
          <MarqueeRow cards={infrastructureCards.slice(0, 4)} duration={30} />
          <MarqueeRow cards={infrastructureCards.slice(4)} reverse duration={28} />
        </div>
      </div>

      <div className="overflow-hidden rounded-[20px] bg-[#F6F7F9] px-4 py-12 sm:px-6 lg:px-[8px] lg:py-[56px]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <SectionBadge>Global Presence</SectionBadge>
          <h2 className="mt-6 max-w-[760px] text-[34px] font-normal leading-[1.08] text-[#111111] sm:text-[56px]">
            Showcasing Our Seafood Excellence at Global Trade Events
          </h2>
        </div>

        <div className="mt-12 space-y-[10px]">
          <MarqueeRow cards={globalPresenceCards.slice(0, 4)} duration={32} />
          <MarqueeRow cards={globalPresenceCards.slice(4)} reverse duration={29} />
        </div>
      </div>
    </section>
  );
}
