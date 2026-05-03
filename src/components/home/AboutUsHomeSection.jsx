export default function AboutUsHomeSection() {
  return (
    <section className="mx-auto mt-[50px] w-full rounded-[20px] bg-[#F6F7F9] text-[#111111]">

      {/* ── Mobile layout ── */}
      <div className="flex flex-col px-[16px] pb-[24px] pt-[36px] sm:hidden">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="flex h-[36px] items-center justify-center rounded-full border border-[#202833] px-[18px]">
            <span className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[1.8px] text-[#202833]">
              About Us
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-[18px] text-center text-[36px] font-normal leading-[42px] text-[#111111]">
          Delivering Sustainable, Safe & High-Quality Seafood Exports
        </h2>

        {/* Subtitle */}
        <p className="mt-[16px] text-center text-[14px] font-normal leading-[20px] text-[#6d6d6ecc]">
          At AVLA NETTOS EXPORTS, we source, process, and export premium seafood,
          focusing on quality, food safety, and global standards to deliver fresh and
          frozen sea species worldwide.
        </p>

        {/* Cards */}
        <div className="mt-[24px] flex flex-col gap-[10px]">

          {/* Row 1: full-width gray image */}
          <div className="h-[180px] w-full overflow-hidden rounded-[18px] bg-[#CDCED0]">
            <img
              src="/assets/images/about/about-seafood-wide.svg"
              alt="Seafood processing"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Row 2: dark 15+ card + gray image */}
          <div className="grid grid-cols-2 gap-[10px]">
            <article className="flex flex-col rounded-[18px] bg-[#222222] px-[16px] py-[16px] text-white">
              <p className="text-[40px] font-normal leading-[48px]">15+</p>
              <p className="mt-[16px] text-[13px] font-normal leading-[19px]">
                15+ years seafood processing and exports, delivering certified quality
                since 2010.
              </p>
            </article>
            <div className="h-full min-h-[160px] overflow-hidden rounded-[18px] bg-[#CDCED0]">
              <img
                src="/assets/images/about/about-seafood-box-1.svg"
                alt="Seafood export"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 3: full-width blue card */}
          <article className="flex flex-col rounded-[18px] bg-[#0161FE] px-[18px] py-[20px] text-white">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/20">
              <img
                src="/assets/images/home/idea-icon.png"
                alt=""
                className="h-[18px] w-[18px]"
                loading="lazy"
              />
            </div>
            <p className="mt-[16px] text-[52px] font-normal leading-[56px]">95%</p>
            <p className="mt-[16px] text-[14px] font-normal leading-[20px] text-white/90">
              Client satisfaction built on reliable supply, accurate grading,
              customized packing, and strict adherence to international seafood export
              standards.
            </p>
          </article>

          {/* Row 4: two gray image cards */}
          <div className="grid grid-cols-2 gap-[10px]">
            <div className="h-[140px] overflow-hidden rounded-[18px] bg-[#CDCED0]">
              <img
                src="/assets/images/about/about-seafood-box-2.svg"
                alt="Seafood quality"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="h-[140px] overflow-hidden rounded-[18px] bg-[#CDCED0]">
              <img
                src="/assets/images/about/about-seafood-box-3.svg"
                alt="Seafood packaging"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="relative hidden h-[857px] w-full overflow-hidden sm:block">
        <div className="absolute left-[47px] top-[53px] flex h-[38px] w-[123px] items-center justify-center rounded-full border border-[#202833]">
          <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[18px] tracking-[1.97px] text-[#202833]">
            About us
          </span>
        </div>

        <h2 className="absolute left-[48px] top-[111px] w-[660px] text-[36px] font-normal leading-[38px] text-[#111111]">
          Delivering Sustainable, Safe & High-Quality Seafood Exports
        </h2>

        <p className="absolute left-[876px] top-[115px] w-[498px] text-[16px] font-normal leading-[22px] text-[#6d6d6ecc]">
          At AVLA NETTOS EXPORTS, we specialize in sourcing, processing, and exporting
          premium seafood products. With a strong focus on quality, food safety, and
          global compliance, we deliver fresh and frozen sea species that meet
          international standards and customer-specific requirements.
        </p>

        <div className="absolute left-[47px] top-[231px] h-[579px] w-[1327px]">
          {[
            { className: 'absolute left-[0px] top-[0px] h-[282px] w-[656px]', src: '/assets/images/about/about-seafood-wide.svg', alt: 'Seafood processing demo' },
            { className: 'absolute left-[1006px] top-[0px] h-[282px] w-[321px]', src: '/assets/images/about/about-seafood-box-1.svg', alt: 'Seafood export demo' },
            { className: 'absolute left-[671px] top-[297px] h-[282px] w-[320px]', src: '/assets/images/about/about-seafood-box-2.svg', alt: 'Seafood quality demo' },
            { className: 'absolute left-[1006px] top-[297px] h-[282px] w-[321px]', src: '/assets/images/about/about-seafood-box-3.svg', alt: 'Seafood packaging demo' },
          ].map((card) => (
            <img
              key={card.src}
              src={card.src}
              alt={card.alt}
              className={`${card.className} rounded-[22px] object-cover`}
              loading="lazy"
            />
          ))}

          <article className="absolute left-[671px] top-[0px] h-[282px] w-[320px] rounded-[18px] bg-[#222222] px-[18px] py-[17px] text-white">
            <p className="text-[46px] font-normal leading-[54px]">15+</p>
            <p className="mt-[82px] w-[260px] text-[16px] font-normal leading-[24px]">
              Years of proven experience in seafood processing and exports, delivering
              consistent quality through certified systems and skilled operations since 2010.
            </p>
          </article>

          <article className="absolute left-[0px] top-[297px] h-[282px] w-[656px] rounded-[18px] bg-[#0161FE] px-[19px] py-[19px] text-white">
            <div className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-white/20">
              <img src="/assets/images/home/idea-icon.png" alt="" className="h-[20px] w-[20px]" loading="lazy" />
            </div>
            <p className="mt-[66px] text-[46px] font-normal leading-[54px]">95%+</p>
            <p className="mt-[10px] text-[18px] font-medium leading-[24px]">Client Satisfaction</p>
            <p className="mt-[8px] text-[16px] font-normal leading-[24px] text-white/80">Trusted by global seafood buyers</p>
          </article>
        </div>
      </div>

    </section>
  );
}
