export default function ProductHero() {
  return (
    <section className="w-full overflow-hidden rounded-[20px] bg-[#F6F7F9]">

      {/* Mobile */}
      <div className="min-[800px]:hidden px-[22px] pb-[32px] pt-[44px] text-center">
        <h1 className="text-[40px] font-normal leading-[48px] text-[#111111]">
          Our Projects
        </h1>
        <p className="mx-auto mt-[18px] max-w-[310px] text-[14px] font-normal leading-[22px] text-[#8a8a8a]">
          We specialize in sourcing, processing, and exporting high-quality marine
          products from Kerala's coastal waters. Our seafood is handled under strict
          hygiene standards and exported globally with guaranteed freshness and compliance.
        </p>
        <div className="mt-[26px] flex items-center justify-center gap-[12px]">
          <a
            href="/contact"
            className="flex h-[48px] items-center justify-center gap-[8px] rounded-full bg-[#0161FE] px-[22px] text-[15px] font-medium text-white"
          >
            Contact
            <span className="text-[18px] leading-none">&#8594;</span>
          </a>
          <a
            href="/products"
            className="flex h-[48px] items-center justify-center rounded-full border border-[#111111] px-[22px] text-[15px] font-medium text-[#111111]"
          >
            Portfolio
          </a>
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
            src="/assets/images/products/product-banner.png"
            alt="Seafood products banner"
            className="block aspect-[1322/622] h-auto w-full object-contain"
            loading="eager"
          />
        </div>
      </div>

    </section>
  );
}
