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
  const listTop = 187;
  const rowHeight = 320;
  const rowGap = 46;
  const sectionBottom = 50;
  const sectionHeight =
    listTop + products.length * rowHeight + Math.max(products.length - 1, 0) * rowGap + sectionBottom;

  return (
    <section
      className="relative mt-[23px] w-full overflow-hidden rounded-[15px] bg-[#F6F7F9] px-[5px] pb-[35px] pt-[24px] sm:px-[16px] min-[800px]:h-[var(--section-height)] min-[800px]:px-0 min-[800px]:pb-0 min-[800px]:pt-0"
      style={{ '--section-height': `${sectionHeight}px` }}
    >
      <div className="mx-auto flex h-[20px] w-[70px] items-center justify-center rounded-full border border-[#202833] min-[800px]:absolute min-[800px]:left-[42px] min-[800px]:top-[53px] min-[800px]:mx-0 min-[800px]:h-[25px] min-[800px]:w-[95px]">
        <span className="whitespace-nowrap text-[9px] font-medium uppercase leading-[12px] tracking-[1.2px] text-[#202833]">
          Products
        </span>
      </div>

      <h2 className="mx-auto mt-[18px] w-full max-w-[430px] text-center text-[35px] font-normal text-[#111111] min-[800px]:absolute min-[800px]:left-[42px] min-[800px]:top-[104px] min-[800px]:mx-0 min-[800px]:mt-0 min-[800px]:w-[354px] min-[800px]:max-w-none min-[800px]:text-left min-[800px]:text-[#2b2b2b]">
        Real Results. Real Impact.
        <br />
        Our Success Stories.
      </h2>

      <p className="mx-auto mt-[20px] w-full max-w-[330px] text-center text-[16px] font-normal text-[#6D6D6ECC] min-[800px]:absolute min-[800px]:left-[789px] min-[800px]:top-[112px] min-[800px]:mx-0 min-[800px]:mt-0 min-[800px]:w-[430px] min-[800px]:max-w-none min-[800px]:text-left min-[800px]:text-[#8a8a8a]">
        Our seafood products are carefully processed, quality-tested, and prepared
        for global export with guaranteed freshness and compliance.
      </p>

      <div className="mx-auto mt-[18px] flex w-full max-w-[590px] flex-col gap-[20px] min-[800px]:absolute min-[800px]:left-[42px] min-[800px]:top-[187px] min-[800px]:mx-0 min-[800px]:mt-0 min-[800px]:block min-[800px]:w-[1328px] min-[800px]:max-w-none">
        {products.map((product, index) => (
          <article
            key={product.name}
            className={`relative flex flex-col items-center ${index === 0 ? 'min-[800px]:mt-0' : 'min-[800px]:mt-[46px]'} min-[800px]:block min-[800px]:h-[320px]`}
          >
            <div className="flex aspect-[590/320] w-full items-center justify-center overflow-hidden rounded-[8px] bg-white min-[800px]:absolute min-[800px]:left-0 min-[800px]:top-0 min-[800px]:h-[320px] min-[800px]:w-[590px] min-[800px]:rounded-[14px]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain min-[800px]:object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-[17px] flex w-full flex-col items-center text-center min-[800px]:absolute min-[800px]:left-[674px] min-[800px]:top-[119px] min-[800px]:mt-0 min-[800px]:block min-[800px]:w-auto min-[800px]:text-left">
              <h3 className="text-center text-[16px] font-normal leading-[22px] text-[#4a4a4a] min-[800px]:text-left min-[800px]:text-[32px] min-[800px]:leading-[28px]">
                {product.name}
              </h3>
              <button
                type="button"
                onClick={() => navigate(product.slug ? `/products/${product.slug}` : '/contact')}
                className="mt-[14px] flex h-[46px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium leading-[24px] text-white transition hover:brightness-105 min-[800px]:mt-[21px]"
              >
                Explore
                <ArrowRight aria-hidden="true" size={22} strokeWidth={1.8} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
