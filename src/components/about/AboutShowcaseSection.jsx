import { useState } from 'react';
import { FishSymbol, Factory, Snowflake, Waves } from 'lucide-react';

const REFERENCE_IMAGE = '/assets/images/about/about-reference.png';

const infrastructureTabs = [
  { id: 'purchase', label: 'Purchase Area', icon: FishSymbol },
  { id: 'preprocessing', label: 'Pre Processing Area', icon: Waves },
  { id: 'production', label: 'Production Area', icon: Factory },
  { id: 'coldstorage', label: 'Cold Storage', icon: Snowflake },
];

const infraCardsByTab = {
  purchase: [
    { id: 'i1', x: 0, y: 1930 },
    { id: 'i2', x: 362, y: 1930 },
    { id: 'i3', x: 724, y: 1930 },
    { id: 'i4', x: 1086, y: 1930 },
  ],
  preprocessing: [
    { id: 'i5', x: 109, y: 2310 },
    { id: 'i6', x: 471, y: 2310 },
    { id: 'i7', x: 833, y: 2310 },
    { id: 'i8', x: 1195, y: 2310 },
  ],
  production: [
    { id: 'i1', x: 0, y: 1930 },
    { id: 'i3', x: 724, y: 1930 },
    { id: 'i5', x: 109, y: 2310 },
    { id: 'i7', x: 833, y: 2310 },
  ],
  coldstorage: [
    { id: 'i2', x: 362, y: 1930 },
    { id: 'i4', x: 1086, y: 1930 },
    { id: 'i6', x: 471, y: 2310 },
    { id: 'i8', x: 1195, y: 2310 },
  ],
};

const globalPresenceCards = [
  { id: 'g1', x: 0, y: 3225 },
  { id: 'g2', x: 362, y: 3225 },
  { id: 'g3', x: 724, y: 3225 },
  { id: 'g4', x: 1086, y: 3225 },
  { id: 'g5', x: 109, y: 3607 },
  { id: 'g6', x: 471, y: 3607 },
  { id: 'g7', x: 833, y: 3607 },
  { id: 'g8', x: 1195, y: 3607 },
];

const CARD_W = 351.5;
const CARD_H = 370.5;
const IMG_W = 1440;
const IMG_H = 5021;

function ImageCard({ card }) {
  return (
    <div className="relative h-[220px] w-[210px] flex-none overflow-hidden rounded-[16px] bg-white shadow-[0_8px_24px_rgba(17,17,17,0.08)] sm:h-[300px] sm:w-[280px] lg:h-[370px] lg:w-[350px]">
      <img
        src={REFERENCE_IMAGE}
        alt=""
        loading="lazy"
        style={{
          position: 'absolute',
          width: `${IMG_W}px`,
          height: `${IMG_H}px`,
          left: `-${card.x}px`,
          top: `-${card.y}px`,
          maxWidth: 'none',
        }}
      />
    </div>
  );
}

function MarqueeRow({ cards, reverse = false, duration = 34 }) {
  const doubled = [...cards, ...cards];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-[10px] ${reverse ? 'animate-[marqueeReverse_var(--dur)_linear_infinite]' : 'animate-[marquee_var(--dur)_linear_infinite]'}`}
        style={{ '--dur': `${duration}s` }}
      >
        {doubled.map((card, i) => (
          <ImageCard key={`${card.id}-${i}`} card={card} />
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

export default function AboutShowcaseSection() {
  const [activeTab, setActiveTab] = useState('purchase');
  const tabCards = infraCardsByTab[activeTab];

  return (
    <section className="space-y-6">
      {/* Infrastructure */}
      <div className="overflow-hidden rounded-[20px] bg-[#F6F7F9] px-4 py-12 sm:px-6 lg:px-[8px] lg:py-[56px]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <SectionBadge>Our Infrastructure</SectionBadge>
          <h2 className="mt-6 max-w-[720px] text-[34px] font-normal leading-[1.08] text-[#111111] sm:text-[56px]">
            Our Advanced Seafood Processing Facilities in Kerala
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {infrastructureTabs.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`inline-flex h-[56px] items-center gap-3 rounded-full px-6 text-[15px] font-medium transition ${
                  isActive
                    ? 'bg-[#0161FE] text-white shadow-[0_8px_20px_rgba(1,97,254,0.22)]'
                    : 'bg-white text-[#0161FE]'
                }`}
              >
                <span
                  className={`flex h-[34px] w-[34px] items-center justify-center rounded-full ${
                    isActive ? 'bg-white/20' : 'bg-[#0161FE]'
                  }`}
                >
                  <Icon aria-hidden="true" size={16} strokeWidth={2} className="text-white" />
                </span>
                {label}
              </button>
            );
          })}
        </div>

        {/* Cards marquee */}
        <div className="mt-10 space-y-[10px]">
          <MarqueeRow cards={tabCards} duration={30} />
          <MarqueeRow cards={[...tabCards].reverse()} reverse duration={28} />
        </div>
      </div>

      {/* Global Presence */}
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
