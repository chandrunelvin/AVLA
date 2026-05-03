
const certifications = [
  { title: 'MPEDA Registration',               active: false },
  { title: 'FSSAI License',                    active: false },
  { title: 'EIC / EIA Approval',               active: false },
  { title: 'HACCP Certified',                  active: false },
  { title: 'ISO 22000: Food Safety Management',active: false },
  { title: 'US FDA Registration',              active: false },
];

export default function CertificationSection() {
  return (
    <section className="mx-auto mt-[50px] w-full rounded-[20px] bg-[#Ffffff] px-[8px] pb-[8px] pt-[36px] sm:px-[42px] sm:pb-[52px] sm:pt-[50px]">

      {/* Badge */}
      <div className="flex h-[36px] w-[140px] items-center justify-center rounded-full border border-[#202833] mx-auto sm:mx-0">
        <span className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[1.79px] text-[#202833]">
          Certification
        </span>
      </div>

      {/* Header row */}
      <div className="mt-[18px] flex flex-col gap-[14px] text-center sm:mt-[22px] sm:flex-row sm:items-start sm:justify-between sm:gap-0 sm:text-left">
        <h2 className="text-[28px] font-normal leading-[34px] text-[#111111] sm:max-w-[400px] sm:text-[36px] sm:leading-[44px]">
          Our Certifications &amp; Global Compliance Standards
        </h2>
        <p className="text-[14px] font-normal leading-[22px] text-[#6d6d6ecc] sm:mt-[6px] sm:max-w-[420px] sm:text-[16px] sm:leading-[24px]">
          We follow internationally recognized food safety, quality control, and export
          compliance standards to ensure premium seafood products for global markets.
        </p>
      </div>

      {/* Cards grid — overflow-hidden clips the certificate cards that bleed outside */}
      <div className="mt-[28px] grid grid-cols-1 gap-[14px] overflow-hidden sm:mt-[40px] sm:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className={`group relative h-[190px] rounded-[20px] cursor-pointer transition-colors duration-300 sm:h-[180px] sm:w-[437px] sm:rounded-[20.47px] ${
              cert.active ? 'bg-[#0161FE]' : 'bg-[#F6F7F9] hover:bg-[#0161FE]'
            }`}
          >
            {/* Icon circle — top left */}
            <div
              className={`absolute left-[20px] top-[20px] flex h-[40px] w-[40px] items-center justify-center rounded-full transition-colors duration-300 ${
                cert.active ? 'bg-white/20' : 'bg-[#0161FE] group-hover:bg-white/20'
              }`}
            >
              <img src="/assets/images/home/education-icon.svg" alt="" className="h-[20px] w-[20px]" />
            </div>

            {/* Title — bottom left */}
            <p
              className={`absolute bottom-[20px] left-[20px] w-[113px] sm:w-auto sm:right-[160px] text-[20px] font-normal leading-[26px] transition-colors duration-300 ${
                cert.active ? 'text-white' : 'text-[#111111] group-hover:text-white'
              }`}
            >
              {cert.title}
            </p>

            {/* Certificate card — overflows right edge like the image */}
            <div
              className={`absolute right-[10px] top-[10px] h-[174px] w-[174px] sm:h-[160px] sm:w-[185px] rounded-[16px] shadow-md transition-colors duration-300 ${
                cert.active ? 'bg-[rgba(130,170,249,1.00)]' : 'bg-[#C5C6C7] group-hover:bg-[rgba(130,170,249,1.00)]'
              }`}
            >
              <img
                src="/assets/images/home/certificate.png"
                alt={cert.title}
                className="absolute -left-[10px] top-[8px] h-[147px] w-[190px] rounded-[5px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
