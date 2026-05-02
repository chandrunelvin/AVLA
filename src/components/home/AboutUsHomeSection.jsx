const imageCards = [
  {
    className: 'absolute left-[0px] top-[0px] h-[282px] w-[656px]',
    src: '/assets/images/about/about-seafood-wide.svg',
    alt: 'Seafood processing demo',
  },
  {
    className: 'absolute left-[1006px] top-[0px] h-[282px] w-[321px]',
    src: '/assets/images/about/about-seafood-box-1.svg',
    alt: 'Seafood export demo',
  },
  {
    className: 'absolute left-[671px] top-[297px] h-[282px] w-[320px]',
    src: '/assets/images/about/about-seafood-box-2.svg',
    alt: 'Seafood quality demo',
  },
  {
    className: 'absolute left-[1006px] top-[297px] h-[282px] w-[321px]',
    src: '/assets/images/about/about-seafood-box-3.svg',
    alt: 'Seafood packaging demo',
  },
];

export default function AboutUsHomeSection() {
  return (
    <section className="relative mx-auto mt-[50px] h-[857px] w-full overflow-hidden rounded-[20px] bg-[#F6F7F9] text-[#111111]">
      <div className="absolute left-[47px] top-[53px] flex h-[38px] w-[123px] items-center justify-center rounded-full border border-[#202833]">
        <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[18px] tracking-[1.9698877334594727px] text-[#202833]">
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
        {imageCards.map((card) => (
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
            consistent quality through certified systems and skilled operations since
            2010.
          </p>
        </article>

        <article className="absolute left-[0px] top-[297px] h-[282px] w-[656px] rounded-[18px] bg-[#0161FE] px-[19px] py-[19px] text-white">
          <div className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-white/20">
            <img
              src="/assets/Home/images/vector_2.svg"
              alt=""
              className="h-[20px] w-[20px]"
              loading="lazy"
            />
          </div>
          <p className="mt-[66px] text-[46px] font-normal leading-[54px]">95%+</p>
          <p className="mt-[30px] w-[590px] text-[16px] font-normal leading-[24px]">
            Client satisfaction built on reliable supply, accurate grading, customized
            packing, and strict adherence to international seafood export standards.
          </p>
        </article>
      </div>
    </section>
  );
}
