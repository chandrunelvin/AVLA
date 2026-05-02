const categories = [
  {
    id: 'fish',
    title: 'Fish',
    description: 'Exploring diverse fish families and their unique species',
    icon: ['/assets/Home/images/vector_5.svg', '/assets/Home/images/vector_6.svg'],
  },
  {
    id: 'cephalopods',
    title: 'Cephalopods',
    description: 'Discovering cephalopod family species across world oceans',
    icon: ['/assets/Home/images/vector_7.svg'],
  },
  {
    id: 'crustaceans',
    title: 'Crustacenas',
    description: 'Understanding crustacean families and their species',
    icon: ['/assets/Home/images/vector_11.svg'],
  },
  {
    id: 'bivalve',
    title: 'Bivalve',
    description: 'Showcasing diverse bivalve family species globally',
    icon: ['/assets/Home/images/vector_16.svg'],
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
      className="mx-auto mt-[50px] w-full rounded-[20px] bg-[#F6F7F9] px-[42px] pb-[42px] pt-[45px]"
    >
      {/* Badge */}
      <div className="flex justify-center">
        <div className="flex h-[39px] items-center justify-center rounded-full border border-[#202833] px-[21px]">
          <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[18px] tracking-[1.8px] text-[#202833]">
            Our Product
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="mx-auto mt-[18px] max-w-[520px] text-center text-[36px] font-normal leading-[42px] text-[#111111]">
        Explore Our Seafood Export Product Categories
      </h2>

      {/* Category cards — equal padding both sides via grid */}
      <div
        role="tablist"
        aria-label="Seafood product categories"
        className="mt-[24px] grid grid-cols-2 gap-[14px] lg:grid-cols-4"
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
                {category.icon.map((icon) => (
                  <img
                    key={icon}
                    src={icon}
                    alt=""
                    className="absolute max-h-[19px] max-w-[19px]"
                    loading="lazy"
                  />
                ))}
              </span>

              <span
                className={`absolute left-0 top-[108px] flex w-full items-center justify-center text-center text-[18px] font-normal leading-[24px] ${
                  isActive ? 'text-white' : 'text-[#111111]'
                }`}
              >
                {category.title}
              </span>

              <span
                className={`absolute left-1/2 top-[147px] w-[80%] -translate-x-1/2 text-center text-[14px] font-normal leading-[20px] lg:text-[16px] lg:leading-[22px] ${
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
