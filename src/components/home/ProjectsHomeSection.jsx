import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fishProducts, otherProducts } from '../../data/productDetails';

const productsByCategory = {
  fish: fishProducts,
  cephalopods: otherProducts.filter((p) => ['squid', 'octopus'].includes(p.slug)),
  crustaceans: otherProducts.filter((p) => ['crab', 'shrimp'].includes(p.slug)),
  bivalve: otherProducts.filter((p) => ['clam', 'mussel'].includes(p.slug)),
};

export default function ProjectsHomeSection({ activeCategory = 'fish' }) {
  const navigate = useNavigate();
  const products = productsByCategory[activeCategory] || productsByCategory.fish;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const clampedIndex = Math.min(selectedIndex, products.length - 1);
  const selectedProduct = products[clampedIndex];

  function selectProduct(index) {
    setSelectedIndex(index);
  }

  function selectPrevious() {
    setSelectedIndex((clampedIndex - 1 + products.length) % products.length);
  }

  function selectNext() {
    setSelectedIndex((clampedIndex + 1) % products.length);
  }

  function handleButtonKey(event, callback) {
    if (event.key === 'Enter' || event.key === ' ') callback();
  }

  return (
    <section className="relative mx-auto mt-[50px] h-[1070px] w-full overflow-hidden rounded-[20px] bg-[#F6F7F9]">
      <div className="absolute left-[42px] top-[52px] flex h-[39px] w-[127px] items-center justify-center rounded-full border border-[#202833]">
        <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[18px] tracking-[1.7862437963485718px] text-[#202833]">
          Products
        </span>
      </div>

      <h2 className="absolute left-[42px] top-[111px] w-[520px] text-[36px] font-normal leading-[38px] text-[#111111]">
        Export-Grade Seafood Products from Trusted Sources
      </h2>

      <button
        type="button"
        onClick={() => navigate('/products')}
        className="absolute right-[43px] top-[111px] flex h-[45px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium leading-[24px] text-white"
      >
        View All
        <span className="text-[28px] font-normal leading-none">&#8594;</span>
      </button>

      <div className="absolute left-[42px] top-[225px] h-[605px] w-[94%] overflow-hidden rounded-[23.686382293701172px] bg-white">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="absolute left-[112px] top-[860px] flex h-[96px] w-[1195px] items-center justify-start gap-[10px] rounded-[12px] bg-white px-[10px]">
        {products.map((product, index) => (
          <button
            key={product.slug}
            type="button"
            role="tab"
            aria-selected={clampedIndex === index}
            onClick={() => selectProduct(index)}
            className={`relative h-[74px] w-[139px] rounded-[6px] border bg-white transition ${
              clampedIndex === index ? 'border-[#0161FE]' : 'border-[#8e838333]'
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="absolute left-[10px] top-[7px] h-[60px] w-[119px] object-contain"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={selectPrevious}
        onKeyDown={(e) => handleButtonKey(e, selectPrevious)}
        className="absolute left-[660px] top-[989px] flex h-[47px] w-[47px] cursor-pointer items-center justify-center rounded-full border border-[#0161FE] bg-white text-[24px] leading-none text-[#0161FE] transition hover:bg-[#0161FE] hover:text-white"
      >
        &#8592;
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={selectNext}
        onKeyDown={(e) => handleButtonKey(e, selectNext)}
        className="absolute left-[715px] top-[989px] flex h-[47px] w-[47px] cursor-pointer items-center justify-center rounded-full border border-[#0161FE] bg-white text-[24px] leading-none text-[#0161FE] transition hover:bg-[#0161FE] hover:text-white"
      >
        &#8594;
      </div>
    </section>
  );
}
