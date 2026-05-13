const features = [
  {
    title: 'EU Approved & Certified',
    description: 'HACCP, BRC (ISO 22000), EU & MPEDA certified',
  },
  {
    title: '135+ Skilled Workforce',
    description: 'Processing seafood in a pollution-free facility',
  },
  {
    title: 'Near Major Fishing Harbors',
    description: 'Fresh sourcing from Neendakara & Sakthikulangara',
  },
];

export default function AboutFeaturesSection() {
  return (
    <section className="mx-auto mt-[10px] w-full rounded-[20px] bg-white sm:py-[72px] sm:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center px-[60px] py-[40px] text-center sm:py-0"
          >
            <h3 className="w-[186px] text-[25px] font-normal leading-[1.25] text-[#111111] sm:w-auto sm:text-[36px] lg:text-[40px]">
              {feature.title}
            </h3>
            <p className="mt-[18px] max-w-[186px] text-[14px] font-normal leading-[1.7] text-[#9A9A9A] sm:text-[16px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
