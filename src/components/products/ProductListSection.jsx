import { useNavigate } from 'react-router-dom';
import { fishProducts, otherProducts } from '../../data/productDetails';

const productsByCategory = {
  fish: fishProducts,
  cephalopods: otherProducts.filter((product) => ['squid', 'octopus'].includes(product.slug)),
  crustaceans: otherProducts.filter((product) => ['crab', 'shrimp'].includes(product.slug)),
  bivalve: otherProducts.filter((product) => ['clam', 'mussel'].includes(product.slug)),
};

export default function ProductListSection({ activeCategory }) {
  const navigate = useNavigate();
  const products = productsByCategory[activeCategory] || productsByCategory.fish;

  return (
    <section className="mt-[23px] w-full rounded-[15px] bg-[#F6F7F9]">

      {/* ── Mobile layout ── */}
      <div className="flex flex-col items-center px-0 pb-[36px] pt-[28px] text-center min-[800px]:hidden">

        <div className="flex h-[32px] w-[100px] items-center justify-center rounded-full border border-[#202833]">
          <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[1.5px] text-[#202833]">
            Products
          </span>
        </div>

        <h2 className="mt-[20px] text-[34px] font-normal leading-[1.2] text-[#111111]">
          Real Results. Real Impact.
          Our Success Stories.
        </h2>

        <p className="mt-[20px] max-w-[320px] text-[16px] font-normal leading-[1.6] text-[#6D6D6ECC]">
          Our seafood products are carefully processed, quality-tested, and prepared
          for global export with guaranteed freshness and compliance.
        </p>

        <div className="mt-[30px] flex flex-col gap-[30px]">
          {products.map((product) => (
            <article key={product.slug} className="flex flex-col items-center">
              <div className="flex w-[95%] items-center justify-center overflow-hidden rounded-[20px] bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-[25px] text-[24px] font-[500] leading-[1.3] text-[#4a4a4a]">
                {product.name}
              </h3>
              <button
                type="button"
                onClick={() => navigate(product.slug ? `/products/${product.slug}` : '/contact')}
                className="mt-[25px] flex h-[44px] w-[120px] items-center justify-center gap-[8px] rounded-full bg-[#0161FE] text-[14px] font-medium text-white"
              >
                Explore
                <img src="/assets/images/home/main-arrow.svg" alt="" aria-hidden="true" className="h-[16px] w-[16px]" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden min-[800px]:block min-[800px]:px-[42px] min-[800px]:pb-[60px] min-[800px]:pt-[52px]">

        {/* Header row */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex h-[39px] w-[127px] items-center justify-center rounded-full border border-[#202833]">
              <span className="whitespace-nowrap text-[14px] font-medium uppercase tracking-[1.8px] text-[#202833]">
                Products
              </span>
            </div>
            <h2 className="mt-[16px] text-[36px] font-normal leading-[46px] text-[#111111]">
              Real Results. Real Impact.
              <br />
              Our Success Stories.
            </h2>
          </div>
          <p className="mt-[78px] max-w-[542px] text-[16px] leading-[22px] text-[#8a8a8a]">
            Our seafood products are carefully processed, quality-tested, and prepared for
            global export with guaranteed freshness and compliance.
          </p>
        </div>

        {/* Product list */}
        <div className="mt-[60px] flex flex-col gap-[40px]">
          {products.map((product) => (
            <article key={product.name} className="flex items-center gap-[69px]">
              <div className="flex h-[436px] w-[581px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-[32px] font-normal leading-[40px] text-[#111111]">
                  {product.name}
                </h3>
                <button
                  type="button"
                  onClick={() => navigate(product.slug ? `/products/${product.slug}` : '/contact')}
                className="mt-[30px] flex h-[46px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium leading-[24px] text-white transition hover:brightness-105"
                >
                  Explore
                  <img src="/assets/images/home/main-arrow.svg" alt="" aria-hidden="true" className="h-[18px] w-[18px]" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
