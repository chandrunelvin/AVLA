import { useNavigate } from 'react-router-dom';
import { productDetails } from '../../data/productDetails';

export default function OurProductsSection() {
  const navigate = useNavigate();

  return (
    <section className="relative left-1/2 mt-[10px] w-screen -translate-x-1/2 overflow-hidden rounded-t-[20px] bg-[#F6F7F9] pb-[50px] pt-[52px]">
      <div className="flex flex-col gap-[24px] px-[24px] sm:flex-row sm:items-start sm:justify-between sm:gap-[60px] sm:px-[48px]">
        <h2 className="shrink-0 text-[36px] font-normal leading-[1.2] text-[#111111] sm:text-[48px] sm:leading-[58px]">
          Our Products
        </h2>
        <p className="max-w-[674px] text-[15px] font-normal leading-[1.6] text-[#8a8a8a] sm:mr-[48px] sm:text-[16px] sm:leading-[22px]">
          We specialize in sourcing, processing, and exporting high-quality marine
          products from Kerala's coastal waters. Our seafood is handled under strict
          hygiene standards and exported globally with guaranteed freshness and
          compliance.
        </p>
      </div>

      <div className="mt-[40px] flex translate-x-[-126px] gap-[14px] overflow-visible sm:mt-[62px]">
        {productDetails.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => navigate(`/products/${item.slug}`)}
            className="relative h-[370px] min-w-[352px] overflow-hidden rounded-[20px] bg-white"
          >
            <p className="absolute left-1/2 top-[28px] -translate-x-1/2 font-serif text-[54px] italic leading-none text-[#b8b8b8]/75">
              {item.scriptName}
            </p>
            <img
              src={item.image}
              alt={item.displayName}
              className="absolute left-1/2 top-[132px] h-[150px] w-[300px] -translate-x-1/2 object-contain"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
