
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
    <section className="relative mx-auto mt-[50px] w-full rounded-[20px] bg-[rgba(246,247,249,1.00)] px-[8px] pb-[8px] pt-[36px] sm:px-[42px] sm:pb-[52px] sm:pt-[50px]">

      {/* Badge */}
      <div className="flex h-[36.5px] w-[153.5px] items-center justify-center rounded-full border-[0.75px] border-[#202833] mx-auto sm:mx-0">
        <span className="whitespace-nowrap text-[14px] font-medium uppercase tracking-[1.79px] text-[#202833]">
          Certification
        </span>
      </div>

      {/* Header row */}
      <div className="mt-[18px] flex flex-col gap-[14px] text-center sm:mt-[22px] sm:flex-row sm:items-start sm:justify-between sm:gap-0 sm:text-left">
        <h2 className="text-[28px] font-normal leading-[34px] text-[#111111] sm:w-[527px] sm:max-w-none sm:text-[36px] sm:leading-[42px]">
          Our Certifications &amp; Global Compliance Standards
        </h2>
        <p className="text-[16px] font-normal leading-[22px] text-[rgba(109,109,110,0.80)] sm:mt-[18px] sm:w-[372px] sm:max-w-none">
          We follow internationally recognized food safety, quality control, and export compliance standards to ensure premium seafood products for global markets.
        </p>
      </div>

      {/* Cards grid */}
      <div className="group/grid mt-[28px] grid grid-cols-1 gap-[14px] sm:mt-[40px] sm:grid-cols-3 sm:gap-x-[14px] sm:gap-y-[40px]">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className={`group relative h-[179.69px] rounded-[20.47px] cursor-pointer transition-colors duration-300 sm:w-[437px] ${
              cert.active
                ? 'bg-[rgba(1,97,254,1.00)] group-hover/grid:bg-white hover:!bg-[rgba(1,97,254,1.00)]'
                : 'bg-white hover:bg-[rgba(1,97,254,1.00)]'
            }`}
          >
            {/* Icon — top left */}
            <div
              className={`absolute left-[20.47px] top-[27.28px] flex h-[38.21px] w-[38.21px] items-center justify-center rounded-full transition-colors duration-300 ${
                cert.active
                  ? 'bg-white/20 group-hover/grid:bg-[rgba(1,97,254,1.00)] group-hover:!bg-white/20'
                  : 'bg-[rgba(1,97,254,1.00)] group-hover:bg-white/20'
              }`}
            >
              <img src="/assets/images/home/education-icon.svg" alt="" className="h-[20px] w-[20px]" />
            </div>

            {/* Title */}
            <p
              className={`absolute top-[101px] left-[20px] w-[113px] sm:w-auto sm:right-[160px] text-[20px] font-normal leading-[23.88px] capitalize transition-colors duration-300 ${
                cert.active
                  ? 'text-white group-hover/grid:text-[#111111] group-hover:!text-white'
                  : 'text-[rgba(17,17,17,1.00)] group-hover:text-white'
              }`}
            >
              {cert.title}
            </p>

            {/* Certificate image card */}
            <div
              className={`absolute top-[calc(50%-81.85px)] left-[calc(50%+4.38px)] sm:left-[calc(50%+62.38px)] h-[163px] w-[148px] rounded-[14px] shadow-md transition-colors duration-300 ${
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
