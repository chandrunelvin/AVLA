const stats = [
  {
    value: '95%+',
    description: 'Buyer satisfaction trusted by global seafood buyers',
  },
  {
    value: '15+',
    description: 'Years experience in seafood export operations',
  },
  {
    value: '₹116+',
    description: 'Crore export value with proven international trade success',
  },
  {
    value: '5K+',
    description: 'MT supplied via certified cold chain delivery',
  },
];

export default function AboutStatsSection() {
  return (
    <section className="mx-auto mt-[10px] w-full rounded-[20px] bg-white px-[8px] pt-[40px] pb-0 sm:py-[57px] sm:px-12">
      <div className="grid grid-cols-2 gap-x-[10px] gap-y-[20px] lg:grid-cols-4 lg:gap-y-0">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col items-center text-center">
            <span className="whitespace-nowrap bg-[rgba(17,17,17,1.00)] bg-clip-text text-transparent text-[38px] font-normal leading-[61.52px] sm:text-[51.25px]">
              {stat.value}
            </span>
            <span className="mt-[12px] max-w-[180px] bg-[rgba(109,109,110,0.80)] bg-clip-text text-transparent text-[14px] font-normal leading-[22px] sm:text-[16px]">
              {stat.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
