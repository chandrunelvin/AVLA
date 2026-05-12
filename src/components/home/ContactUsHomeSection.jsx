const contactItems = [
  {
    label: 'Email Address',
    value: 'sales@avlaexports.com',
    icon: '/assets/images/contact/mail-icon.svg',
  },
  {
    label: 'Phone Number',
    value: '+91 7736782999',
    icon: '/assets/images/contact/phone-icon.svg',
  },
  {
    label: 'My Location',
    value: 'Sakthikulangara, Kollam, Kerala.',
    icon: '/assets/images/contact/location-icon.svg',
  },
];

export default function ContactUsHomeSection() {
  return (
    <section className="mx-auto mt-[50px] w-full rounded-[20px] bg-[#F6F7F9]">

      {/* ── Mobile layout (< lg) ── */}
      <div className="flex flex-col px-[20px] pb-[40px] pt-[40px] lg:hidden">
        <div className="flex justify-center">
          <div className="flex h-[36px] items-center justify-center rounded-full border border-[#202833] px-[18px]">
            <span className="whitespace-nowrap text-[12px] font-medium uppercase tracking-[1.8px] text-[#202833] sm:text-[14px]">
              Contact Us
            </span>
          </div>
        </div>

        <h2 className="mt-[20px] text-center text-[36px] font-normal leading-[40px] text-[#1b1b1b] sm:text-[38px] sm:leading-[46px]">
          Connect with Avla Nettons
        </h2>

        <p className="mt-[14px] text-center text-[14px] font-normal leading-[20px] text-[#8a8a8a]">
          Learn about my vision, story, and how I bring ideas to life.
        </p>

        <div className="mt-[32px] flex flex-col gap-[12px]">
          {contactItems.map((item) => {
            return (
              <div
                key={item.label}
                className="flex items-center gap-[16px] rounded-[18px] bg-white px-[18px] py-[14px]"
              >
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#0161FE] lg:h-[43px] lg:w-[43px]">
                  <img
                    src={item.icon}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[13px] font-normal leading-[18px] text-[#8a8a8a]">
                    {item.label}
                  </p>
                  <p className="mt-[2px] text-[16px] font-normal leading-[22px] text-[#111111]">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Desktop layout (lg+) ── */}
      <div className="relative hidden min-h-[357px] w-full lg:block">

        {/* Left — badge */}
        <div className="absolute left-[41px] top-[47px] flex h-[38px] w-[140px] items-center justify-center rounded-full border border-[#202833]">
          <span className="whitespace-nowrap text-[12px] font-medium uppercase leading-[18px] tracking-[1.8px] text-[#202833] sm:text-[14px]">
            Contact Us
          </span>
        </div>

        {/* Left — heading */}
        <h2 className="absolute left-[41px] top-[117px] max-w-[44%] text-[42px] font-normal leading-[46px] text-[#1b1b1b]">
          Connect with Avla Nettons
        </h2>

        {/* Left — subtitle */}
        <p className="absolute left-[41px] top-[180px] max-w-[40%] text-[16px] font-normal leading-[22px] text-[#8a8a8a]">
          Learn about my vision, story, and how I bring ideas to life.
        </p>

        {/* Right — contact cards */}
        <div className="absolute bottom-[41px] left-[50%] right-[41px] top-[41px] flex flex-col justify-center gap-[14px]">
          {contactItems.map((item) => {
            return (
              <div
                key={item.label}
                className="flex items-center gap-[16px] rounded-[19px] bg-white px-[21px] py-[14px]"
              >
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#0161FE] lg:h-[53px] lg:w-[53px]">
                  <img
                    src={item.icon}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px] font-normal leading-[20px] text-[#8a8a8a]">
                    {item.label}
                  </p>
                  <p className="mt-[6px] text-[18px] font-normal leading-[24px] text-[#111111] lg:mt-[11px] lg:text-[20px]">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
