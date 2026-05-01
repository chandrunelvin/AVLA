export default function BlogHero() {
  return (
    <section className="relative h-[845px] w-full overflow-hidden rounded-[20px] bg-[#F6F7F9]">
      <h1 className="absolute left-[49px] top-[57px] text-[48px] font-normal leading-[58px] tracking-[-1.4px] text-[#111111]">
        Explore Blogs
      </h1>

      <p className="absolute left-[856px] top-[68px] w-[500px] text-[16px] font-normal leading-[24px] text-[#858585]">
        Explore a wide range of services crafted to support your vision. From digital
        design and marketing growth to industry-specific solutions, I provide the tools
        and expertise to help your business build, scale, and succeed.
      </p>

      <div className="absolute left-[49px] top-[174px] h-[620px] w-[1322px] overflow-hidden rounded-[20px] bg-white">
        <img
          src="/assets/images/blog/blog-banner-image.png"
          alt="Seafood blog banner"
          className="h-full w-full object-contain"
          loading="eager"
        />
      </div>
    </section>
  );
}
