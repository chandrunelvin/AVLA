const stats = [
  {
    value: '95%+',
    description: 'Client Satisfaction\nTrusted by global\nseafood buyers',
  },
  {
    value: '15+',
    description: 'Years Experience\nExpertise in seafood export\noperations',
  },
  {
    value: '₹116+',
    description: 'Crore Export Value\nProven international\ntrade success',
  },
  {
    value: '5K+',
    description: 'MT Supplied\nHandled via\ncertified cold chain',
  },
];

export default function AboutStatsSection() {
  return (
    <section className="mx-auto mt-[10px] w-full rounded-[20px] bg-white px-6 py-[56px] sm:px-10 lg:px-[64px]">
      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[48px] lg:grid-cols-4 lg:gap-y-0">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-[48px] font-normal leading-[1.05] text-[#111111] sm:text-[56px] lg:text-[64px]">
              {stat.value}
            </p>
            <p className="mt-[12px] whitespace-pre-line text-[13px] font-normal leading-[1.65] text-[#9A9A9A] sm:text-[14px]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
