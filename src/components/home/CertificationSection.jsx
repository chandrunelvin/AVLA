const cards = [
  {
    bg: 'bg-[#0161FE]',
    title: 'Google UX Design',
    titleColor: 'text-white',
    icons: [
      { src: '/assets/about/images/vector_23.svg', cls: 'absolute left-[1%]' },
      { src: '/assets/about/images/vector_24.svg', cls: 'absolute left-[calc(50%-8.58px)] top-[calc(50%-8.38px)]' },
    ],
    rightBg: 'bg-[rgba(130,170,249,1.00)]',
  },
  {
    bg: 'bg-white',
    title: 'Technology solutions',
    titleColor: 'text-[#111111]',
    icons: [
      { src: '/assets/about/images/vector_25.svg', cls: 'absolute top-[1%]' },
      { src: '/assets/about/images/vector_26.svg', cls: 'absolute left-[calc(50%-8.58px)] top-[calc(50%-8.39px)]' },
    ],
    rightBg: 'bg-[rgba(197,198,199,1.00)]',
  },
  {
    bg: 'bg-white',
    title: 'Technology solutions',
    titleColor: 'text-[#111111]',
    icons: [
      { src: '/assets/about/images/vector_33.svg', cls: 'absolute top-[1%]' },
      { src: '/assets/about/images/vector_34.svg', cls: 'absolute left-[calc(50%-8.58px)] top-[calc(50%-8.39px)]' },
    ],
    rightBg: 'bg-[rgba(197,198,199,1.00)]',
  },
  {
    bg: 'bg-white',
    title: 'Technology solutions',
    titleColor: 'text-[#111111]',
    icons: [
      { src: '/assets/about/images/vector_29.svg', cls: 'absolute top-[1%]' },
      { src: '/assets/about/images/vector_30.svg', cls: 'absolute left-[calc(50%-8.58px)] top-[calc(50%-8.39px)]' },
    ],
    rightBg: 'bg-[rgba(197,198,199,1.00)]',
  },
  {
    bg: 'bg-white',
    title: 'Technology solutions',
    titleColor: 'text-[#111111]',
    icons: [
      { src: '/assets/about/images/vector_27.svg', cls: 'absolute top-[1%]' },
      { src: '/assets/about/images/vector_28.svg', cls: 'absolute left-[calc(50%-8.58px)] top-[calc(50%-8.39px)]' },
    ],
    rightBg: 'bg-[rgba(197,198,199,1.00)]',
  },
  {
    bg: 'bg-white',
    title: 'Technology solutions',
    titleColor: 'text-[#111111]',
    icons: [
      { src: '/assets/about/images/vector_31.svg', cls: 'absolute top-[1%]' },
      { src: '/assets/about/images/vector_32.svg', cls: 'absolute left-[calc(50%-8.58px)] top-[calc(50%-8.39px)]' },
    ],
    rightBg: 'bg-[rgba(197,198,199,1.00)]',
  },
];

export default function CertificationSection() {
  return (
    <section className="mx-auto mt-[50px] w-full rounded-[20px] bg-[#F6F7F9] px-[22px] pb-[32px] pt-[36px] sm:px-[42px] sm:pb-[50px] sm:pt-[50px]">

      {/* Badge */}
      <div className="flex h-[36px] w-[130px] items-center justify-center rounded-full border border-[#202833] sm:h-[36.5px] sm:w-[153px]">
        <span className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[1.79px] text-[#202833] sm:text-[14px]">
          Certification
        </span>
      </div>

      {/* Header row */}
      <div className="mt-[18px] flex flex-col gap-[12px] sm:mt-[20px] sm:flex-row sm:items-start sm:justify-between sm:gap-0">
        <h2 className="text-[28px] font-normal leading-[34px] text-[#111111] sm:max-w-[527px] sm:text-[36px] sm:leading-[42px]">
          My journey: certifications and key achievements
        </h2>
        <p className="text-[14px] font-normal leading-[22px] text-[#6d6d6ecc] sm:mt-[18px] sm:max-w-[372px] sm:text-[16px]">
          A collection of certifications reflecting my learning, skills,
          and professional growth.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mt-[28px] grid grid-cols-1 gap-[14px] sm:mt-[40px] sm:grid-cols-3 sm:gap-[14px]">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative h-[180px] overflow-hidden rounded-[20px] ${card.bg}`}
          >
            {/* Icon */}
            <div className="absolute left-[20px] top-[27px] h-[38px] w-[38px]">
              {card.icons.map((icon) => (
                <img
                  key={icon.src}
                  src={icon.src}
                  alt=""
                  className={icon.cls}
                  loading="lazy"
                />
              ))}
            </div>

            {/* Title */}
            <span
              className={`absolute left-[20px] top-[101px] text-[20px] font-normal capitalize leading-[24px] ${card.titleColor}`}
            >
              {card.title}
            </span>

            {/* Right image box */}
            <div
              className={`absolute right-[10px] top-[calc(50%-81.85px)] h-[163px] w-[148px] overflow-hidden rounded-[14px] ${card.rightBg}`}
            >
              <div
                className="absolute left-[calc(50%-95px)] top-[calc(50%-73.5px)] h-[147px] w-[190px] rounded-[5px]"
                style={{
                  background:
                    'url(/assets/about/images/googel_ux_design_1.png) 100% / cover no-repeat',
                }}
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
