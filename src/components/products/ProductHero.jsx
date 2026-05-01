export default function ProductHero() {
  return (
    <section className="w-full overflow-hidden rounded-[20px] bg-[#F6F7F9] px-[22px] pb-[30px] pt-[40px] md:px-[42px] md:pb-[42px] md:pt-[52px] xl:px-[49px] xl:pb-[50px] xl:pt-[56px]">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <h1 className="text-[36px] font-normal leading-[42px] text-[#111111]">
          Explore Products
        </h1>

        <p className="max-w-[512px] text-[13px] font-normal leading-[18px] text-[#8a8a8a]">
          We offer a wide range of high-quality frozen and fresh seafood products
          processed in HACCP-certified facilities. Our marine products are carefully
          selected, hygienically handled, and exported worldwide with guaranteed
          freshness and international compliance.
        </p>
      </div>

      <div className="mt-[34px] overflow-hidden rounded-[20px] bg-white md:mt-[36px] xl:mt-[35px]">
        <img
          src="/assets/images/products/product-banner.png"
          alt="Seafood products banner"
          className="block aspect-[1322/622] h-auto w-full object-contain"
          loading="eager"
        />
      </div>
    </section>
  );
}
