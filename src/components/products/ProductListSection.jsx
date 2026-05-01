import { useNavigate } from 'react-router-dom';

const productsByCategory = {
  fish: [
    { name: 'Tuna Fish', image: '/assets/images/products/product-tuna-fish.png' },
    { name: 'Sardine', image: '/assets/images/products/product-Sardine-fish.png' },
    { name: 'Grouper', image: '/assets/images/products/product-Grouper-fish.png' },
    { name: 'Mackerel', image: '/assets/images/products/Mackerel-product-image.png' },
    { name: 'Anchovy', image: '/assets/images/products/Anchovy-product-image.png' },
    { name: 'Red Snapper', image: '/assets/images/products/Red-Snapper-product-image.png' },
    { name: 'Herring', image: '/assets/images/products/Herring-product-image.png' },
  ],
  cephalopods: [
    { name: 'Squid', image: '/assets/images/blog/blog-cephalopod.svg' },
    { name: 'Octopus', image: '/assets/images/blog/blog-octopus.svg' },
  ],
  crustaceans: [
    { name: 'Crab', image: '/assets/images/blog/blog-crab.svg' },
    { name: 'Shrimp', image: '/assets/images/blog/blog-shrimp.svg' },
  ],
  bivalve: [
    { name: 'Clam', image: '/assets/images/blog/blog-clam.svg' },
    { name: 'Mussel', image: '/assets/images/blog/blog-mussel.svg' },
  ],
};

export default function ProductListSection({ activeCategory }) {
  const navigate = useNavigate();
  const products = productsByCategory[activeCategory] || productsByCategory.fish;
  const listTop = 187;
  const rowHeight = 320;
  const rowGap = 46;
  const sectionBottom = 50;
  const sectionHeight =
    listTop + products.length * rowHeight + Math.max(products.length - 1, 0) * rowGap + sectionBottom;

  return (
    <section
      className="relative mt-[23px] w-full overflow-hidden rounded-[15px] bg-[#F6F7F9]"
      style={{ height: `${sectionHeight}px` }}
    >
      <div className="absolute left-[42px] top-[53px] flex h-[25px] w-[95px] items-center justify-center rounded-full border border-[#202833]">
        <span className="whitespace-nowrap text-[9px] font-medium uppercase leading-[12px] tracking-[1.2px] text-[#202833]">
          Products
        </span>
      </div>

      <h2 className="absolute left-[42px] top-[104px] w-[354px] text-[27px] font-normal leading-[28px] text-[#2b2b2b]">
        Real Results. Real Impact.
        <br />
        Our Success Stories.
      </h2>

      <p className="absolute left-[789px] top-[112px] w-[430px] text-[11px] font-normal leading-[16px] text-[#8a8a8a]">
        Our seafood products are carefully processed, quality-tested, and prepared
        for global export with guaranteed freshness and compliance.
      </p>

      <div className="absolute left-[42px] top-[187px] w-[1328px]">
        {products.map((product, index) => (
          <article
            key={product.name}
            className="relative h-[320px]"
            style={{ marginTop: index === 0 ? '0px' : '46px' }}
          >
            <div className="absolute left-0 top-0 flex h-[320px] w-[590px] items-center justify-center overflow-hidden rounded-[14px] bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute left-[674px] top-[119px]">
              <h3 className="text-[22px] font-normal leading-[28px] text-[#4a4a4a]">
                {product.name}
              </h3>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="mt-[21px] flex h-[32px] w-[87px] items-center justify-center gap-[7px] rounded-full bg-[#0161FE] text-[11px] font-semibold text-white"
              >
                Explore
                <span className="text-[16px] leading-none">&#8594;</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
