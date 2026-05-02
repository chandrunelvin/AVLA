export default function BlogHero() {
  return (
    <section className="w-full overflow-hidden rounded-[20px] bg-[#F6F7F9] px-[22px] pb-[30px] pt-[40px] text-center min-[800px]:relative min-[800px]:h-[845px] min-[800px]:px-0 min-[800px]:pb-0 min-[800px]:pt-0 min-[800px]:text-left">
      <h1 className="mx-auto text-[42px] font-normal leading-[50px] text-[#111111] min-[800px]:absolute min-[800px]:left-[49px] min-[800px]:top-[57px] min-[800px]:mx-0 min-[800px]:text-[48px] min-[800px]:leading-[58px] min-[800px]:tracking-[-1.4px]">
        Explore Blogs
      </h1>

      <p className="mx-auto mt-[18px] max-w-[500px] text-center text-[16px] font-normal leading-[24px] text-[#858585] min-[800px]:absolute min-[800px]:left-[856px] min-[800px]:top-[68px] min-[800px]:mt-0 min-[800px]:w-[500px] min-[800px]:text-left">
        Explore a wide range of services crafted to support your vision. From digital
        design and marketing growth to industry-specific solutions, I provide the tools
        and expertise to help your business build, scale, and succeed.
      </p>

      <div className="mx-auto mt-[34px] overflow-hidden rounded-[20px] bg-white min-[800px]:absolute min-[800px]:left-[49px] min-[800px]:top-[174px] min-[800px]:mt-0 min-[800px]:h-[620px] min-[800px]:w-[1322px]">
        <img
          src="/assets/images/blog/blog-banner-image.png"
          alt="Seafood blog banner"
          className="block aspect-[1322/622] h-auto w-full object-contain min-[800px]:h-full min-[800px]:aspect-auto"
          loading="eager"
        />
      </div>
    </section>
  );
}
