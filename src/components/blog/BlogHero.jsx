export default function BlogHero() {
  return (
    <section className="w-full overflow-hidden rounded-[20px] bg-[#F6F7F9] px-[22px] pb-[30px] pt-[40px] text-center min-[800px]:px-[42px] min-[800px]:pb-[42px] min-[800px]:pt-[52px] min-[800px]:text-left xl:px-[49px] xl:pb-[50px] xl:pt-[56px]">
      <div className="flex flex-col items-center gap-5 min-[800px]:flex-row min-[800px]:items-start min-[800px]:justify-between">
        <h1 className="text-center text-[42px] font-normal leading-[50px] text-[#111111] min-[800px]:text-left min-[800px]:text-[48px] min-[800px]:leading-[58px]">
          Explore Blogs
        </h1>

        <p className="max-w-[512px] text-center text-[16px] font-normal leading-[24px] text-[#8a8a8a] min-[800px]:text-left">
          Explore insights, industry updates, and seafood export knowledge from
          our team. Stay informed on quality standards, global markets, and the
          latest news from AVLA Nettos Exports.
        </p>
      </div>

      <div className="mt-[34px] overflow-hidden rounded-[20px] bg-white md:mt-[36px] xl:mt-[35px]">
        <img
          src="/assets/images/blog/blog-banner-image.png"
          alt="Seafood blog banner"
          className="block aspect-[1322/622] h-auto w-full object-contain"
          loading="eager"
        />
      </div>
    </section>
  );
}
