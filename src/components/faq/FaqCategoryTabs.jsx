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
    <section className="relative mt-[23px] h-[204px] w-full overflow-hidden rounded-[15px] bg-[#F6F7F9]">
      <div className="absolute left-1/2 top-[22px] flex h-[25px] w-[113px] -translate-x-1/2 items-center justify-center rounded-full border border-[#202833]">
        <span className="whitespace-nowrap text-[9px] font-medium uppercase leading-[12px] tracking-[1.2px] text-[#202833]">
          Our Product
        </span>
      </div>

      <h2 className="absolute left-1/2 top-[64px] w-[390px] -translate-x-1/2 text-center text-[25px] font-normal leading-[28px] text-[#111111]">
        Explore a wide range of seafood families and species
      </h2>

      <div
        role="tablist"
        aria-label="FAQ product categories"
        className="absolute left-[43px] top-[111px] flex h-[93px] w-[1334px] gap-[14px]"
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
              className={`relative h-[93px] w-[324px] rounded-[10px] text-center transition ${
                isActive ? 'bg-[#0161FE]' : 'bg-white'
              }`}
            >
              <span
                className={`absolute left-1/2 top-[22px] flex h-[18px] w-[18px] -translate-x-1/2 items-center justify-center rounded-full ${
                  isActive ? 'bg-white/25' : 'bg-[#0161FE]'
                }`}
              >
                {category.icon.map((icon) => (
                  <img
                    key={icon}
                    src={icon}
                    alt=""
                    className="absolute max-h-[9px] max-w-[9px]"
                    loading="lazy"
                  />
                ))}
              </span>
              <span
                className={`absolute left-0 top-[48px] flex w-full items-center justify-center text-[11px] font-normal leading-[14px] ${
                  isActive ? 'text-white' : 'text-[#111111]'
                }`}
              >
                {category.title}
              </span>
              <span
                className={`absolute left-1/2 top-[66px] flex w-[150px] -translate-x-1/2 items-center justify-center text-center text-[9px] font-normal leading-[12px] ${
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
