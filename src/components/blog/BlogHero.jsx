export default function BlogHero() {
  return (
    <section className="w-full overflow-hidden rounded-[20px] bg-[#F6F7F9]">

      {/* Mobile */}
      <div className="min-[800px]:hidden px-[24px] pb-[36px] pt-[48px] text-center">
        <h1 className="text-[48px] font-normal leading-[56px] text-[#111111]">
          Our Blogs
        </h1>
        <p className="mx-auto mt-[20px] max-w-[320px] text-[14px] font-normal leading-[23px] text-[#8a8a8a]">
          Explore insights, industry updates, and seafood export knowledge from
          our team. Stay informed on quality standards, global markets, and the
          latest news from AVLA Nettos Exports.
        </p>
        <div className="mt-[28px] flex items-center justify-center gap-[12px]">
          <a
            href="/contact"
            className="flex h-[51px] items-center justify-center gap-[8px] rounded-full bg-[#0161FE] px-[26px] text-[15px] font-semibold text-white"
          >
            Contact
            <span className="text-[18px] leading-none">&#8594;</span>
          </a>
          <a
            href="/blog"
            className="flex h-[51px] items-center justify-center rounded-full border border-[#111111] px-[26px] text-[15px] font-semibold text-[#111111]"
          >
            Portfolio
          </a>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden min-[800px]:block min-[800px]:px-[42px] min-[800px]:pb-[42px] min-[800px]:pt-[52px] xl:px-[49px] xl:pb-[50px] xl:pt-[56px]">
        <div className="flex items-start justify-between">
          <h1 className="text-[48px] font-normal leading-[58px] text-[#111111]">
            Explore Blogs
          </h1>
          <p className="max-w-[512px] text-[16px] font-normal leading-[24px] text-[#8a8a8a]">
            Explore insights, industry updates, and seafood export knowledge from
            our team. Stay informed on quality standards, global markets, and the
            latest news from AVLA Nettos Exports.
          </p>
        </div>
        <div className="mt-[34px] overflow-hidden rounded-[20px] bg-white xl:mt-[35px]">
          <img
            src="/assets/images/blog/blog-banner-image.png"
            alt="Seafood blog banner"
            className="block aspect-[1322/622] h-auto w-full object-contain"
            loading="eager"
          />
        </div>
      </div>

    </section>
  );
}
