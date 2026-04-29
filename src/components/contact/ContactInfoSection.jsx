const contactCards = [
  {
    label: 'Email Addres',
    value: 'info@avlaexports.com',
    icon: '/assets/images/contact/icon-mail.svg',
  },
  {
    label: 'Phone Number',
    value: '+91 9446017777',
    icon: '/assets/images/contact/icon-phone.svg',
  },
  {
    label: 'Our Office',
    value: 'Sakthikulangara, Kollam, Kerala.',
    icon: '/assets/images/contact/icon-location.svg',
  },
];

export default function ContactInfoSection() {
  return (
    <section className="relative mt-[50px] min-h-[361px] w-full overflow-hidden rounded-[20px] bg-[#F6F7F9] px-5 py-11 sm:px-8 lg:h-[361px] lg:px-0 lg:py-0">
      <div className="mx-auto flex h-[39px] w-[157px] items-center justify-center rounded-full border border-[#202833] lg:absolute lg:left-1/2 lg:top-[57px] lg:-translate-x-1/2">
        <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[18px] tracking-[1.7862437963485718px] text-[#202833]">
          Contact Us
        </span>
      </div>

      <h2 className="mx-auto mt-8 max-w-[980px] text-center text-[34px] font-normal leading-[42px] text-[#111111] sm:text-[42px] sm:leading-[52px] lg:absolute lg:left-1/2 lg:top-[126px] lg:mt-0 lg:max-w-none lg:-translate-x-1/2 lg:whitespace-nowrap lg:text-[48px] lg:leading-[58px] xl:text-[50px] xl:leading-[62px]">
        Get in touch, let us know how we can help
      </h2>

      <div className="mx-auto mt-10 grid max-w-[620px] gap-5 lg:absolute lg:left-[51px] lg:top-[225px] lg:mt-0 lg:flex lg:max-w-none lg:gap-[61px]">
        {contactCards.map((card) => (
          <article
            key={card.label}
            className="relative h-[85px] w-full rounded-[20px] bg-white lg:w-[399px]"
          >
            <div className="absolute left-[20px] top-[16px] flex h-[53px] w-[53px] items-center justify-center rounded-full bg-[#0161FE]">
              <img
                src={card.icon}
                alt=""
                className="h-[24px] w-[24px]"
                loading="lazy"
              />
            </div>
            <p className="absolute left-[95px] top-[20px] text-[16px] font-normal leading-[20px] text-[#8a8a8a]">
              {card.label}
            </p>
            <p className="absolute left-[95px] right-[18px] top-[47px] truncate text-[18px] font-normal leading-[24px] text-[#111111] lg:text-[20px]">
              {card.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
