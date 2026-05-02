import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto w-full rounded-[20px] bg-[#F6F7F9] px-4 pb-[40px] pt-[56px] text-[#111111] sm:px-8 lg:px-[48px] lg:pb-[48px] lg:pt-[64px]">
      {/* Heading + subtitle + buttons */}
      <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
        <h1 className="text-[38px] font-normal leading-[1.12] text-[#111111] sm:text-[48px] lg:text-[56px]">
          Expert guidance, tailored solution
        </h1>

        <p className="mt-[18px] max-w-[480px] text-[15px] font-normal leading-[1.6] text-[#838383] sm:text-[16px]">
          Adapt easily and scale confidently with a flexible system designed to
          support your business at every stage of growth.
        </p>

        <div className="mt-[28px] flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="inline-flex h-[52px] min-w-[130px] items-center justify-center gap-2 rounded-full bg-[#0161fe] px-7 text-[16px] font-normal text-white transition hover:brightness-105"
          >
            Contact
            <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            className="inline-flex h-[52px] min-w-[148px] items-center justify-center gap-[10px] rounded-full bg-[#25D366] px-7 text-[16px] font-normal text-white transition hover:brightness-105"
          >
            <img
              src="/assets/images/contact/icon-whatsapp.svg"
              alt=""
              aria-hidden="true"
              className="h-[22px] w-[22px] brightness-[10]"
            />
            WhatsApp
          </button>
        </div>
      </div>

      {/* Card grid */}
      <div className="mt-[40px] grid grid-cols-1 gap-[10px] lg:mt-[48px] lg:grid-cols-3">

        {/* Left gray image card */}
        <div className="hidden overflow-hidden rounded-[22px] bg-[#C8C9CB] lg:block lg:min-h-[560px]">
          <img
            src="/assets/images/about/about-seafood-wide.svg"
            alt="Seafood processing"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Middle: two stacked info cards */}
        <div className="flex flex-col gap-[10px]">
          {/* Blue card — description at top, big number at bottom */}
          <div className="flex min-h-[272px] flex-col justify-between rounded-[22px] bg-[#0161FE] px-[22px] py-[22px] text-white">
            <p className="max-w-[320px] text-[15px] font-normal leading-[1.6]">
              Client satisfaction built on reliable supply, accurate grading,
              customized packing, and strict adherence to international seafood
              export standards.
            </p>
            <p className="text-[50px] font-normal leading-[1.1]">95%</p>
          </div>

          {/* Dark card — icon, big number, description */}
          <div className="flex min-h-[272px] flex-col rounded-[22px] bg-[#222222] px-[22px] py-[22px] text-white">
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white/20">
              <img
                src="/assets/images/home/idea-icon.png"
                alt=""
                aria-hidden="true"
                className="h-[18px] w-[18px]"
                loading="lazy"
              />
            </div>
            <p className="mt-[24px] text-[50px] font-normal leading-[1.1]">3+</p>
            <p className="mt-[14px] text-[15px] font-normal leading-[1.6] text-white/80">
              Years of proven experience in seafood processing and exports,
              delivering consistent quality through certified systems and
              skilled operations since 2010.
            </p>
          </div>
        </div>

        {/* Right gray image card */}
        <div className="hidden overflow-hidden rounded-[22px] bg-[#C8C9CB] lg:block lg:min-h-[560px]">
          <img
            src="/assets/images/about/about-seafood-box-1.svg"
            alt="Seafood export"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
