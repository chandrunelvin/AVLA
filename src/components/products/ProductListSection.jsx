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
    <section className="mt-[23px] w-full rounded-[15px] min-[800px]:bg-[#F6F7F9]">

      {/* ── Mobile layout ── */}
      <div className="min-[800px]:hidden pb-[32px] pt-[16px]">
        <div className="flex gap-[10px] overflow-x-auto px-[10px] pb-[4px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map((product) => (
            <button
              key={product.slug}
              type="button"
              onClick={() => navigate(product.slug ? `/products/${product.slug}` : '/contact')}
              className="relative h-[240px] min-w-[calc(50%-5px)] shrink-0 overflow-hidden rounded-[20px] bg-[#F6F7F9]"
            >
              <p className="absolute left-[16px] top-[16px] font-serif text-[32px] italic leading-none text-[#b8b8b8]/70">
                {product.scriptName}
              </p>
              <img
                src={product.image}
                alt={product.name}
                className="absolute bottom-[12px] left-1/2 h-[150px] w-[calc(100%-16px)] -translate-x-1/2 object-contain"
                loading="lazy"
              />
            </button>
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
