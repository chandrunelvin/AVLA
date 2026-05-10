const categories = [
  {
    id: 'fish',
    title: 'Fish',
    description: 'Exploring diverse fish families and their unique species',
    icon: '/assets/images/home/ion_fish-sharp.svg',
  },
  {
    id: 'cephalopods',
    title: 'Cephalopods',
    description: 'Discovering cephalopod family species across world oceans',
    icon: '/assets/images/home/fe_squid.svg',
  },
  {
    id: 'crustaceans',
    title: 'Crustaceans',
    description: 'Understanding crustacean families and their species',
    icon: '/assets/images/home/fluent-emoji-high-contrast_lobster.svg',
  },
  {
    id: 'bivalve',
    title: 'Bivalve',
    description: 'Showcasing diverse bivalve family species globally',
    icon: '/assets/images/home/mynaui_shell-solid.svg',
  },
];

export default function FaqCategoryTabs({ activeCategory, onChange }) {
  function handleKey(event, id) {
    if (event.key === 'Enter' || event.key === ' ') {
      onChange(id);
    }
  }

  return (
    <section className="mt-[40px] w-full rounded-[20px] bg-[#F6F7F9] px-[8px] pb-[32px] pt-[36px] min-[800px]:mt-[50px] min-[800px]:px-[42px] min-[800px]:pb-[42px] min-[800px]:pt-[45px]">

      {/* Badge */}
      <div className="flex justify-center">
        <div className="flex h-[30px] items-center justify-center rounded-full border border-[#202833] px-[21px] min-[800px]:h-[39px]">
          <span className="whitespace-nowrap text-[12px] font-medium uppercase leading-[18px] tracking-[1.8px] text-[#202833] min-[800px]:text-[14px]">
            Our Product
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="mx-auto mt-[18px] max-w-[466px] text-center text-[28px] font-normal leading-[36px] text-[#111111] min-[800px]:text-[36px] min-[800px]:leading-[42px]">
        Explore a wide range of seafood families and species
      </h2>

      {/* ── Mobile cards (horizontal pill style) ── */}
      <div
        role="tablist"
        aria-label="FAQ product categories"
        className="mt-[24px] flex flex-wrap justify-center gap-[12px] min-[800px]:hidden"
      >
        {categories.map((category, index) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(category.id)}
              onKeyDown={(event) => handleKey(event, category.id)}
              className={`flex h-[58px] ${['w-[122.54px]', 'w-[172.54px]', 'w-[139.98px]', 'w-[148.98px]'][index] ?? 'w-fit'} items-center gap-[10px] overflow-hidden rounded-[16px] px-[12px] text-left transition ${
                isActive ? 'bg-[#0161FE]' : 'bg-white'
              }`}
            >
              <span
                className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full ${
                  isActive ? 'bg-white/20' : 'bg-[#0161FE]'
                }`}
              >
                <img
                  src={category.icon}
                  alt=""
                  className="h-[17px] w-[17px]"
                  loading="lazy"
                />
              </span>
              <span
                className={`min-w-0 truncate text-[13px] font-normal leading-[18px] ${
                  isActive ? 'text-white' : 'text-[#111111]'
                }`}
              >
                {category.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Desktop cards (tall square style) ── */}
      <div
        role="tablist"
        aria-label="FAQ product categories"
        className="mt-[24px] hidden grid-cols-4 gap-[14px] min-[800px]:grid"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(category.id)}
              onKeyDown={(event) => handleKey(event, category.id)}
              className={`relative h-[214px] w-full cursor-pointer rounded-[20px] text-center transition ${
                isActive ? 'bg-[#0161FE]' : 'bg-white'
              }`}
            >
              <span
                className={`absolute left-1/2 top-[44px] flex h-[38px] w-[38px] -translate-x-1/2 items-center justify-center rounded-full ${
                  isActive ? 'bg-white/25' : 'bg-[#0161FE]'
                }`}
              >
                <img
                  src={category.icon}
                  alt=""
                  className="h-[19px] w-[19px]"
                  loading="lazy"
                />
              </span>
              <span
                className={`absolute left-0 top-[108px] flex w-full items-center justify-center text-[18px] font-normal leading-[24px] ${
                  isActive ? 'text-white' : 'text-[#111111]'
                }`}
              >
                {category.title}
              </span>
              <span
                className={`absolute left-1/2 top-[147px] w-[80%] -translate-x-1/2 text-center text-[14px] font-normal leading-[20px] min-[800px]:text-[16px] min-[800px]:leading-[22px] ${
                  isActive ? 'text-white' : 'text-[#8a8a8a]'
                }`}
              >
                {category.description}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
