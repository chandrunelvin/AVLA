export default function AboutUsHomeSection() {
  return (
    <section className="mx-auto mt-[50px] w-full rounded-[20px] bg-[#F6F7F9] text-[#111111]">

      {/* ── Mobile layout ── */}
      <div className="flex flex-col px-[8px] pb-[8px] pt-[36px] sm:hidden">

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

          <div className="h-[180px] w-full overflow-hidden rounded-[18px] bg-[#CDCED0]">
            <img
              src="/assets/images/about/about-seafood-wide.svg"
              alt="Seafood processing"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

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
      <div className="hidden sm:block sm:px-[42px] sm:pb-[42px] sm:pt-[52px]">

        {/* Header row — equal left/right via flex */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex h-[38px] w-[123px] items-center justify-center rounded-full border border-[#202833]">
              <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[18px] tracking-[1.97px] text-[#202833]">
                About us
              </span>
            </div>
            <h2 className="mt-[20px] max-w-[555px] text-[36px] font-normal leading-[38px] text-[#111111]">
              Delivering Sustainable, Safe & High-Quality Seafood Exports
            </h2>
          </div>
          <p className="self-end max-w-[400px] text-[16px] font-normal leading-[22px] text-[#6d6d6ecc] lg:max-w-none lg:w-[540px]">
            At AVLA NETTOS EXPORTS, we specialize in sourcing, processing, and exporting
            premium seafood products. With a strong focus on quality, food safety, and
            global compliance, we deliver fresh and frozen sea species that meet
            international standards and customer-specific requirements.
          </p>
        </div>

        {/* Cards grid — responsive, fills full width between equal paddings */}
        <div className="mt-[40px] grid h-[579px] grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-[15px]">

          {/* Row 1, Col 1 — wide seafood image */}
          <img
            src="/assets/images/about/about-seafood-wide.svg"
            alt="Seafood processing demo"
            className="h-full w-full rounded-[22px] object-cover"
            loading="lazy"
          />

          {/* Row 1, Col 2 — 15+ dark card */}
          <article className="rounded-[18px] bg-[#222222] px-[18px] py-[17px] text-white">
            <p className="text-[46px] font-normal leading-[54px]">15+</p>
            <p className="mt-[60px] text-[16px] font-normal leading-[24px]">
              Years of proven experience in seafood processing and exports, delivering
              consistent quality through certified systems and skilled operations since 2010.
            </p>
          </article>

          {/* Row 1, Col 3 — seafood box image */}
          <img
            src="/assets/images/about/about-seafood-box-1.svg"
            alt="Seafood export demo"
            className="h-full w-full rounded-[22px] object-cover"
            loading="lazy"
          />

          {/* Row 2, Col 1 — blue 95% card */}
          <article className="rounded-[18px] bg-[#0161FE] px-[19px] py-[19px] text-white">
            <div className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-white/20">
              <img
                src="/assets/images/home/idea-icon.png"
                alt=""
                className="h-[20px] w-[20px]"
                loading="lazy"
              />
            </div>
            <p className="mt-[40px] text-[46px] font-normal leading-[54px]">95%+</p>
            <p className="mt-[10px] text-[18px] font-medium leading-[24px]">Client Satisfaction</p>
            <p className="mt-[8px] text-[16px] font-normal leading-[24px] text-white/80">
              Client satisfaction built on reliable supply, accurate grading, customized packing, and strict adherence to international seafood export standards.
            </p>
          </article>

          {/* Row 2, Col 2 — seafood box image */}
          <img
            src="/assets/images/about/about-seafood-box-2.svg"
            alt="Seafood quality demo"
            className="h-full w-full rounded-[22px] object-cover"
            loading="lazy"
          />

          {/* Row 2, Col 3 — seafood box image */}
          <img
            src="/assets/images/about/about-seafood-box-3.svg"
            alt="Seafood packaging demo"
            className="h-full w-full rounded-[22px] object-cover"
            loading="lazy"
          />

        </div>
      </div>

    </section>
  );
}
