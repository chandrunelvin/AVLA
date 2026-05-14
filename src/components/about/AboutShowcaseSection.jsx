import { useState } from 'react';
import { FishSymbol, Factory, Snowflake, Waves } from 'lucide-react';

const allInfraImages = [
  '/assets/images/about/Infrastructure2.webp',
  '/assets/images/about/Infrastructure3.webp',
  '/assets/images/about/Infrastructure4.webp',
  '/assets/images/about/Infrastructure5.JPG',
  '/assets/images/about/Infrastructure6.JPG',
  '/assets/images/about/Infrastructure7.jpg',
  '/assets/images/about/Infrastructure8.jpg',
  '/assets/images/about/Infrastructure9.JPG',
  '/assets/images/about/Infrastructure10.JPG',
  '/assets/images/about/Infrastructure11.JPG',
  '/assets/images/about/Infrastructure12.JPG',
  '/assets/images/about/Infrastructureq.webp',
];

const purchaseAreaImages = [
  '/assets/images/about/Purchase area1.jpeg',
  '/assets/images/about/Purchase area2.jpeg',
  '/assets/images/about/Purchase area3.jpeg',
  '/assets/images/about/Purchase area4.jpeg',
  '/assets/images/about/Purchase area5.jpeg',
  '/assets/images/about/Purchase area6.jpeg',
  '/assets/images/about/Purchase area7.jpeg',
  '/assets/images/about/Purchase area8.jpeg',
  '/assets/images/about/Purchase area9.jpeg',
  '/assets/images/about/Purchase area10.jpeg',
  '/assets/images/about/Purchase area11.jpeg',
];

const globalPresenceImages = [
  '/assets/images/about/Global Presence1.png',
  '/assets/images/about/Global Presence2.png',
  '/assets/images/about/Global Presence3.png',
  '/assets/images/about/Global Presence4.png',
  '/assets/images/about/Global Presence5.png',
  '/assets/images/about/Global Presence6.png',
  '/assets/images/about/Global Presence7.png',
  '/assets/images/about/Global Presence8.png',
  '/assets/images/about/Global Presence9.png',
];

const preprocessingAreaImages = allInfraImages.slice(0, 4);
const productionAreaImages = allInfraImages.slice(4, 8);
const coldStorageImages = allInfraImages.slice(8, 12);

const infrastructureTabs = [
  { id: 'purchase',       label: 'Purchase Area',       icon: FishSymbol },
  { id: 'preprocessing',  label: 'Pre Processing Area', icon: Waves },
  { id: 'production',     label: 'Production Area',     icon: Factory },
  { id: 'coldstorage',    label: 'Cold Storage',        icon: Snowflake },
];

const infraCardsByTab = {
  purchase: purchaseAreaImages,
  preprocessing: preprocessingAreaImages,
  production: productionAreaImages,
  coldstorage: coldStorageImages,
};

function ImageCard({ src }) {
  return (
    <div className="relative h-[220px] w-[210px] flex-none overflow-hidden rounded-[16px] bg-white shadow-[0_8px_24px_rgba(17,17,17,0.08)] sm:h-[300px] sm:w-[280px] lg:h-[370px] lg:w-[350px]">
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function MarqueeRow({ images, reverse = false, duration = 34 }) {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-[10px] ${reverse ? 'animate-[marqueeReverse_var(--dur)_linear_infinite]' : 'animate-[marquee_var(--dur)_linear_infinite]'}`}
        style={{ '--dur': `${duration}s` }}
      >
        {doubled.map((src, i) => (
          <ImageCard key={`${src}-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
}

function SectionBadge({ children }) {
  return (
    <div className="inline-flex h-[30px] items-center justify-center rounded-full border border-[#202833] px-[18px] sm:h-[38px]">
      <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#202833] sm:text-[14px]">
        {children}
      </span>
    </div>
  );
}

export default function AboutShowcaseSection() {
  const [activeTab, setActiveTab] = useState('purchase');
  const tabImages = infraCardsByTab[activeTab];
  const infrastructureDurations =
    activeTab === 'purchase'
      ? { forward: 42, reverse: 40 }
      : { forward: 30, reverse: 28 };

  return (
    <section className="space-y-6">
      {/* Infrastructure */}
      <div className="overflow-hidden rounded-[20px] bg-[#F6F7F9] px-4 py-12 sm:px-6 lg:px-[8px] lg:py-[56px]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <SectionBadge>Our Infrastructure</SectionBadge>
          <h2 className="mt-6 max-w-[540px] text-[34px] font-normal leading-[40px] text-[#111111] sm:text-[36px]">
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
                className={`inline-flex h-[56px] items-center gap-3 rounded-[15.39px] px-6 text-[15px] font-medium transition sm:rounded-[19.69px] ${
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
          <MarqueeRow images={tabImages} duration={infrastructureDurations.forward} />
          <MarqueeRow images={[...tabImages].reverse()} reverse duration={infrastructureDurations.reverse} />
        </div>
      </div>

      {/* Global Presence */}
      <div className="overflow-hidden rounded-[20px] bg-[#F6F7F9] px-4 py-12 sm:px-6 lg:px-[8px] lg:py-[56px]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <SectionBadge>Global Presence</SectionBadge>
          <h2 className="mt-6 max-w-[540px] text-[34px] font-normal leading-[40px] text-[#111111] sm:text-[36px]">
            Showcasing Our Seafood Excellence at Global Trade Events
          </h2>
        </div>

        <div className="mt-12 space-y-[10px]">
          <MarqueeRow images={globalPresenceImages.slice(0, 5)} duration={32} />
          <MarqueeRow images={globalPresenceImages.slice(5)} reverse duration={29} />
        </div>
      </div>
    </section>
  );
}
