import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
      <div className="flex flex-col items-center px-[5px] pb-[35px] pt-[24px] min-[800px]:hidden sm:px-[16px]">
        <div className="flex h-[20px] w-[70px] items-center justify-center rounded-full border border-[#202833]">
          <span className="whitespace-nowrap text-[9px] font-medium uppercase leading-[12px] tracking-[1.2px] text-[#202833]">
            Products
          </span>
        </div>

        <h2 className="mt-[18px] w-full max-w-[430px] text-center text-[35px] font-normal text-[#111111]">
          Real Results. Real Impact.
          <br />
          Our Success Stories.
        </h2>

        <p className="mt-[20px] w-full max-w-[330px] text-center text-[16px] font-normal text-[#6D6D6ECC]">
          Our seafood products are carefully processed, quality-tested, and prepared
          for global export with guaranteed freshness and compliance.
        </p>

        <div className="mt-[18px] flex w-full max-w-[590px] flex-col gap-[20px]">
          {products.map((product) => (
            <article key={product.name} className="flex flex-col items-center">
              <div className="flex aspect-[590/320] w-full items-center justify-center overflow-hidden rounded-[8px] bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="mt-[17px] flex w-full flex-col items-center text-center">
                <h3 className="text-[16px] font-normal leading-[22px] text-[#4a4a4a]">
                  {product.name}
                </h3>
                <button
                  type="button"
                  onClick={() => navigate(product.slug ? `/products/${product.slug}` : '/contact')}
                  className="mt-[14px] flex h-[46px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium leading-[24px] text-white transition hover:brightness-105"
                >
                  Explore
                  <ArrowRight aria-hidden="true" size={22} strokeWidth={1.8} />
                </button>
              </div>
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
          <p className="mt-[55px] max-w-[400px] text-[14px] leading-[22px] text-[#8a8a8a]">
            Our seafood products are carefully processed, quality-tested, and prepared for
            global export with guaranteed freshness and compliance.
          </p>
        </div>

        {/* Product list */}
        <div className="mt-[40px] flex flex-col gap-[16px]">
          {products.map((product) => (
            <article key={product.name} className="flex items-center gap-[40px]">
              <div className="flex h-[436px] w-[581px] shrink-0 items-center justify-center overflow-hidden rounded-[24px] bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-[20px]"
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
                  className="mt-[20px] flex h-[46px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium leading-[24px] text-white transition hover:brightness-105"
                >
                  Explore
                  <ArrowRight aria-hidden="true" size={22} strokeWidth={1.8} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
