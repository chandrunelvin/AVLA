const contactCards = [
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
    label: 'Our Office',
    value: 'Sakthikulangara, Kollam, Kerala.',
    icon: '/assets/images/contact/location-icon.svg',
  },
];

export default function ContactInfoSection() {
  return (
    <section className="relative mt-[40px] min-h-[361px] w-full overflow-hidden rounded-[20px] bg-[#F6F7F9] px-5 py-11 sm:px-8 lg:mt-[50px] lg:h-[361px] lg:px-0 lg:py-0">
      <div className="mx-auto flex h-[32px] w-[125px] items-center justify-center rounded-full border border-[#202833] lg:absolute lg:left-1/2 lg:top-[57px] lg:h-[38px] lg:-translate-x-1/2">
        <span className="whitespace-nowrap text-[12px] font-medium uppercase leading-[18px] tracking-[1.7862437963485718px] text-[#202833] lg:text-[14px]">
          Contact Us
        </span>
      </div>

      <h2 className="mx-auto mt-8 max-w-[980px] text-center text-[38px] font-normal leading-[42px] text-[#111111] sm:text-[42px] sm:leading-[52px] lg:absolute lg:left-1/2 lg:top-[126px] lg:mt-0 lg:max-w-none lg:-translate-x-1/2 lg:whitespace-nowrap lg:text-[48px] lg:leading-[58px] xl:text-[50px] xl:leading-[62px]">
        Get in touch, let us know how we can help
      </h2>

      <div className="mx-auto mt-10 grid max-w-[620px] gap-5 lg:absolute lg:left-[51px] lg:top-[225px] lg:mt-0 lg:flex lg:max-w-none lg:gap-[61px] min-[1100px]:max-[1300px]:left-[24px] min-[1100px]:max-[1300px]:right-[24px] min-[1100px]:max-[1300px]:justify-between min-[1100px]:max-[1300px]:gap-[18px]">
        {contactCards.map((card) => (
          <article
            key={card.label}
            className="flex min-h-[85px] w-full items-center gap-[18px] rounded-[20px] bg-white px-[20px] py-[16px] lg:w-[399px] min-[1100px]:max-[1300px]:w-[32%]"
          >
            <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#0161FE] lg:h-[53px] lg:w-[53px]">
              <img
                src={card.icon}
                alt=""
               
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-[18px] font-normal leading-[20px] text-[#8a8a8a]">
                {card.label}
              </p>
              <p className="whitespace-pre-line text-[18px] font-normal leading-[24px] text-[#111111] lg:text-[20px]">
                {card.value}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
