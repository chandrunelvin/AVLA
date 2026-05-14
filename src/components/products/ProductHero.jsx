export default function ProductHero() {
  return (
    <section className="w-full overflow-hidden rounded-[20px] bg-[#F6F7F9]">

      {/* Mobile */}
      <div className="min-[800px]:hidden px-[8px] pb-[8px] pt-[36px] text-center">
        <h1 className="text-[42px] font-normal leading-[1.1] text-[#111111]">
          Explore Products
        </h1>
        <p className="mt-[16px] text-[14px] font-normal leading-[22px] text-[#8a8a8a]">
          We offer a wide range of high-quality frozen and fresh seafood products
          processed in HACCP-certified facilities. Our marine products are carefully
          selected, hygienically handled, and exported worldwide with guaranteed
          freshness and international compliance.
        </p>
        <div className="mt-[22px] overflow-hidden rounded-[16px] bg-white">
          <img
            src="/assets/images/products/product-banner.webp"
            alt="Seafood products banner"
            className="block h-auto w-full object-contain"
            loading="eager"
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden min-[800px]:block min-[800px]:px-[42px] min-[800px]:pb-[42px] min-[800px]:pt-[52px] xl:px-[49px] xl:pb-[50px] xl:pt-[56px]">
        <div className="flex items-start justify-between">
          <h1 className="text-[48px] font-normal leading-[58px] text-[#111111]">
            Explore Products
          </h1>
          <p className="max-w-[512px] text-[16px] font-normal leading-[24px] text-[#8a8a8a]">
            We offer a wide range of high-quality frozen and fresh seafood products
            processed in HACCP-certified facilities. Our marine products are carefully
            selected, hygienically handled, and exported worldwide with guaranteed
            freshness and international compliance.
          </p>
        </div>
        <div className="mt-[34px] overflow-hidden rounded-[20px] bg-white xl:mt-[35px]">
          <img
            src="/assets/images/products/product-banner.webp"
            alt="Seafood products banner"
            className="block aspect-[1322/622] h-auto w-full object-contain"
            loading="eager"
          />
        </div>
      </div>

    </section>
  );
}
