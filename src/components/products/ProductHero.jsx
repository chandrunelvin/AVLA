export default function ProductHero() {
  return (
    <section className="relative h-[568px] w-full overflow-hidden rounded-[20px] bg-[#F6F7F9]">
      <h1 className="absolute left-[42px] top-[54px] text-[36px] font-normal leading-[42px] text-[#111111]">
        Explore Products
      </h1>

      <p className="absolute left-[822px] top-[52px] w-[512px] text-[13px] font-normal leading-[18px] text-[#8a8a8a]">
        We offer a wide range of high-quality frozen and fresh seafood products
        processed in HACCP-certified facilities. Our marine products are carefully
        selected, hygienically handled, and exported worldwide with guaranteed
        freshness and international compliance.
      </p>

      <div className="absolute left-[42px] top-[151px] h-[350px] w-[calc(100%-84px)] overflow-hidden rounded-[16px] bg-white">
        <img
          src="/assets/images/products/products-hero-banner.svg"
          alt="Seafood products banner"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
    </section>
  );
}
