
const certifications = [
  { title: 'MPEDA Registration',               active: true,  image: '/assets/images/home/certificate.png' },
  { title: 'FSSAI License',                    active: false, image: '/assets/images/home/certificate.png' },
  { title: 'EIC / EIA Approval',               active: false, image: '/assets/images/home/certificate.png' },
  { title: 'HACCP Certified',                  active: false, image: '/assets/images/home/certificate.png' },
  { title: 'ISO 22000: Food Safety Management',active: false, image: '/assets/images/home/certificate.png' },
  { title: 'US FDA Registration',              active: false, image: '/assets/images/home/certificate.png' },
];

export default function CertificationSection() {
  return (
    <section className="relative mx-auto mt-[50px] w-full rounded-[20px] bg-[rgba(246,247,249,1.00)] px-[8px] pb-[8px] pt-[36px] min-[900px]:px-[42px] min-[900px]:pb-[52px] min-[900px]:pt-[50px]">

      {/* Badge */}
      <div className="flex h-[36.5px] w-[153.5px] items-center justify-center rounded-full border-[0.75px] border-[#202833] mx-auto min-[900px]:mx-0">
        <span className="whitespace-nowrap text-[14px] font-medium uppercase tracking-[1.79px] text-[#202833]">
          Certification
        </span>
      </div>

      {/* Header row */}
      <div className="mt-[18px] flex flex-col gap-[14px] text-center min-[900px]:mt-[22px] min-[900px]:flex-row min-[900px]:items-start min-[900px]:justify-between min-[900px]:gap-0 min-[900px]:text-left">
        <h2 className="text-[28px] font-normal leading-[34px] text-[#111111] min-[900px]:w-[527px] min-[900px]:max-w-none min-[900px]:text-[36px] min-[900px]:leading-[42px]">
          Our Certifications &amp; Global Compliance Standards
        </h2>
        <p className="text-[16px] font-normal leading-[22px] text-[rgba(109,109,110,0.80)] min-[900px]:mt-[18px] min-[900px]:w-[545px] min-[900px]:max-w-none">
       We follow internationally recognized food safety, quality control, and export compliance standards to ensure premium seafood products for global markets.
        </p>
      </div>

      {/* Cards grid */}
      <div className="group/grid mt-[28px] grid grid-cols-1 gap-[14px] min-[900px]:mt-[40px] min-[900px]:grid-cols-3 min-[900px]:gap-x-[14px] min-[900px]:gap-y-[40px]">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className={`group relative h-[179.69px] overflow-hidden rounded-[20.47px] cursor-pointer transition-colors duration-300 ${
              cert.active
                ? 'bg-[rgba(1,97,254,1.00)] group-hover/grid:bg-white hover:!bg-[rgba(1,97,254,1.00)]'
                : 'bg-white hover:bg-[rgba(1,97,254,1.00)]'
            }`}
          >
            {/* Icon — top left */}
            <div
              className={`absolute left-[20.47px] top-[27.28px] flex h-[38.21px] w-[38.21px] shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                cert.active
                  ? 'bg-white/20 group-hover/grid:bg-[rgba(1,97,254,1.00)] group-hover:!bg-white/20'
                  : 'bg-[rgba(1,97,254,1.00)] group-hover:bg-white/20'
              }`}
            >
              <img src="/assets/images/home/education-icon.svg" alt="" className="h-[20px] w-[20px]" />
            </div>

            {/* Title */}
            <p
              className={`absolute top-[113px] md:top-[101px] left-[20px] w-[110px] md:w-auto right-auto md:right-[36%] text-[18px] md:text-[20px] font-normal leading-[23.88px] capitalize transition-colors duration-300 ${
                cert.active
                  ? 'text-white group-hover/grid:text-[rgba(17,17,17,1.00)] group-hover:!text-white'
                  : 'text-[rgba(17,17,17,1.00)] group-hover:text-white'
              }`}
            >
              {cert.title}
            </p>

            {/* Certificate image card — percentage-based so it scales with card width */}
            <div
              className={`absolute top-[4.45%] left-[64%] h-[90.71%] w-[33.87%] rounded-[14px] shadow-md transition-colors duration-300 ${
                cert.active
                  ? 'bg-[rgba(130,170,249,1.00)] group-hover/grid:bg-[rgba(197,198,199,1.00)] group-hover:!bg-[rgba(130,170,249,1.00)]'
                  : 'bg-[rgba(197,198,199,1.00)] group-hover:bg-[rgba(130,170,249,1.00)]'
              }`}
            >
              <div
                className="absolute h-[147px] w-[190px] left-[calc(50%-124px)] top-[calc(50%-73.5px)] rounded-[5px]"
                style={{ background: `url('${cert.image}') 100% center / cover no-repeat` }}
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
