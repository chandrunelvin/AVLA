import { Mail, MapPin, Phone } from 'lucide-react';

const contactItems = [
  {
    label: 'Email Addres',
    value: 'info@avlaexports.com',
    icon: Mail,
  },
  {
    label: 'Phone Number',
    value: '+91 9446017777',
    icon: Phone,
  },
  {
    label: 'My Location',
    value: 'Sakthikulangara, Kollam, Kerala.',
    icon: MapPin,
  },
];

export default function ContactUsHomeSection() {
  return (
    <section className="mx-auto mt-[50px] w-full rounded-[20px] bg-[#F6F7F9]">

      {/* ── Mobile layout ── */}
      <div className="flex flex-col px-[20px] pb-[40px] pt-[40px] sm:hidden">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="flex h-[36px] items-center justify-center rounded-full border border-[#202833] px-[18px]">
            <span className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[1.8px] text-[#202833]">
              Contact Me
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-[20px] text-center text-[38px] font-normal leading-[44px] text-[#1b1b1b]">
          Connect with Avla Nettons
        </h2>

        {/* Subtitle */}
        <p className="mt-[14px] text-center text-[14px] font-normal leading-[20px] text-[#8a8a8a]">
          Learn about my vision, story, and how I bring ideas to life.
        </p>

        {/* Contact cards */}
        <div className="mt-[32px] flex flex-col gap-[12px]">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-[16px] rounded-[18px] bg-white px-[18px] py-[16px]"
              >
                <div className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-full bg-[#0161FE] text-white">
                  <Icon aria-hidden="true" size={20} strokeWidth={2.2} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[14px] font-normal leading-[18px] text-[#8a8a8a]">
                    {item.label}
                  </p>
                  <p className="mt-[2px] text-[17px] font-normal leading-[22px] text-[#111111]">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="relative hidden h-[357px] w-full overflow-hidden sm:block">
        <div className="absolute left-[41px] top-[47px] flex h-[38px] w-[140px] items-center justify-center rounded-full border border-[#202833]">
          <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[18px] tracking-[1.8px] text-[#202833]">
            Contact Us
          </span>
        </div>

        <h2 className="absolute left-[41px] top-[117px] text-[42px] font-normal leading-[46px] text-[#1b1b1b]">
          Connect with Avla Nettons
        </h2>

        <p className="absolute left-[41px] top-[175px] text-[16px] font-normal leading-[22px] text-[#8a8a8a]">
          Learn about my vision, story, and how I bring ideas to life.
        </p>

        <div className="absolute left-[709px] top-[58px] flex w-[653px] flex-col gap-[14px]">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="relative h-[69px] w-[653px] rounded-[19px] bg-white"
              >
                <div className="absolute left-[21px] top-[13px] flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#0161FE] text-white">
                  <Icon aria-hidden="true" size={21} strokeWidth={2.4} />
                </div>
                <p className="absolute left-[84px] top-[11px] text-[16px] font-normal leading-[20px] text-[#8a8a8a]">
                  {item.label}
                </p>
                <p className="absolute left-[84px] top-[37px] text-[20px] font-normal leading-[24px] text-[#111111]">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
