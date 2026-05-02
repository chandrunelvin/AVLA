const features = [
  {
    title: 'EU Approved\n& Certified',
    description: 'HACCP, BRC (ISO\n22000), EU &\nMPEDA certified',
  },
  {
    title: '135+ Skilled\nWorkforce',
    description: 'Processing seafood\nin a pollution-free\nfacility',
  },
  {
    title: 'Near Major\nFishing Harbors',
    description: 'Fresh sourcing from\nNeendakara &\nSakthikulangara',
  },
];

export default function AboutFeaturesSection() {
  return (
    <section className="mx-auto mt-[10px] w-full rounded-[20px] bg-white px-6 py-[64px] sm:px-10 lg:px-[64px]">
      <div className="grid grid-cols-1 gap-[48px] sm:grid-cols-3 sm:gap-0">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col items-center text-center ${
              index < features.length - 1
                ? 'border-b border-[#E8E8E8] pb-[48px] sm:border-b-0 sm:border-r sm:pb-0'
                : ''
            }`}
          >
            <h3 className="whitespace-pre-line text-[30px] font-normal leading-[1.2] text-[#111111] sm:text-[34px] lg:text-[38px]">
              {feature.title}
            </h3>
            <p className="mt-[16px] whitespace-pre-line text-[13px] font-normal leading-[1.7] text-[#9A9A9A] sm:text-[14px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
