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

export default function ServiceCategoriesSection({ activeCategory, onChange }) {
  function handleKey(event, id) {
    if (event.key === 'Enter' || event.key === ' ') {
      onChange(id);
    }
  }

  return (
    <section
      id="service-categories-section"
      className="mx-auto mt-[50px] w-full rounded-[20px] bg-[#F6F7F9] px-[10px] pb-[32px] pt-[36px] lg:px-[42px] lg:pb-[42px] lg:pt-[45px]"
    >
      {/* Badge */}
      <div className="flex justify-center">
        <div className="flex h-[30px] items-center justify-center gap-[8px] rounded-full border border-[#202833] px-[21px] lg:h-[38px]">
          
          <span className="whitespace-nowrap text-[12px] font-medium uppercase leading-[18px] tracking-[1.8px] text-[#202833] lg:text-[14px]">
            Our Product
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="mx-auto mt-[18px] max-w-[520px] text-center text-[37px] font-normal leading-[38px] text-[#111111] lg:text-[36px] lg:leading-[42px]">
        <span className="lg:hidden">Solutions designed to power your business</span>
        <span className="hidden lg:inline">Explore Our Seafood Export Product Categories</span>
      </h2>

      {/* ── Mobile cards (horizontal pill style) ── */}
      <div
        role="tablist"
        aria-label="Seafood product categories"
        className="mt-[24px] flex flex-wrap justify-center gap-[12px] lg:hidden"
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
              className={`flex min-h-[58px] ${['w-[122.54px]', 'w-[172.54px]', 'w-[150.98px]', 'w-[148.98px]'][index] ?? 'w-fit'} items-center gap-[10px] rounded-[16px] px-[18px] text-left transition ${
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
                className={`flex-1 text-center text-[13px] font-normal leading-[18px] ${
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
        aria-label="Seafood product categories"
        className="mt-[24px] hidden grid-cols-4 gap-[14px] lg:grid"
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
              className={`relative h-[214px] w-full cursor-pointer rounded-[20px] border border-[rgba(142,131,131,0.12)] text-center transition ${
                isActive ? 'bg-[#0161FE]' : 'bg-white'
              }`}
            >
              <span
                className={`absolute left-1/2 top-[44px] flex h-[38px] w-[38px] -translate-x-1/2 items-center justify-center rounded-full ${
                  isActive ? 'bg-white/20' : 'bg-[#0161FE]'
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
                className={`absolute left-0 top-[108px] flex w-full items-center justify-center text-center text-[18px] font-normal leading-[24px] ${
                  isActive ? 'text-white' : 'text-[#111111]'
                }`}
              >
                {category.title}
              </span>
              <span
                className={`absolute left-1/2 top-[147px] w-[80%] -translate-x-1/2 text-center text-[16px] font-normal leading-[22px] ${
                  isActive ? 'text-white' : 'text-[#6d6d6ecc]'
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
