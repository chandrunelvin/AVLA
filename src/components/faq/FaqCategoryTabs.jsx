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

export default function FaqCategoryTabs({ activeCategory, onChange }) {
  function handleKey(event, id) {
    if (event.key === 'Enter' || event.key === ' ') {
      onChange(id);
    }
  }

  return (
    <section className="relative mt-[23px] h-[465px] w-full overflow-hidden rounded-[20.41314125061035px] bg-[#F6F7F9]">
      <div className="absolute left-1/2 top-[45px] flex h-[39px] min-w-[158px] -translate-x-1/2 items-center justify-center rounded-full border border-[#202833] px-[21px]">
        <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[18px] tracking-[1.7862435579299927px] text-[#202833]">
          Our Product
        </span>
      </div>

      <h2 className="absolute left-1/2 top-[108px] w-[600px] -translate-x-1/2 text-center text-[36px] font-normal leading-[42px] text-[#111111]">
        Explore a wide range of seafood families and species
      </h2>

      <div
        role="tablist"
        aria-label="FAQ product categories"
        className="absolute left-[42px] top-[206px] flex h-[214px] w-[1338px] gap-[14px]"
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
              className={`relative h-[214px] w-[324px] rounded-[20.41314125061035px] text-center transition ${
                isActive ? 'bg-[#0161FE]' : 'bg-white'
              }`}
            >
              <span
                className={`absolute left-1/2 top-[44px] flex h-[38px] w-[38px] -translate-x-1/2 items-center justify-center rounded-full ${
                  isActive ? 'bg-white/25' : 'bg-[#0161FE]'
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
                className={`absolute left-0 top-[108px] flex w-full items-center justify-center text-[18px] font-normal leading-[24px] ${
                  isActive ? 'text-white' : 'text-[#111111]'
                }`}
              >
                {category.title}
              </span>
              <span
                className={`absolute left-1/2 top-[147px] flex w-[258px] -translate-x-1/2 items-center justify-center text-center text-[16px] font-normal leading-[22px] ${
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
