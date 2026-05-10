export default function FaqHero() {
  return (
    <section className="w-full overflow-hidden rounded-[20px] bg-[#F6F7F9] px-[8px] pb-[8px] pt-[40px] text-center min-[800px]:relative min-[800px]:h-[905px] min-[800px]:px-0 min-[800px]:pb-0 min-[800px]:pt-0">
      <h1 className="mx-auto max-w-[620px] text-center text-[58px] font-normal leading-[66.33px] text-[#111111] min-[800px]:absolute min-[800px]:left-1/2 min-[800px]:top-[48px] min-[800px]:max-w-none min-[800px]:-translate-x-1/2 min-[800px]:whitespace-nowrap min-[800px]:text-[56px] min-[800px]:leading-[67px] min-[800px]:tracking-[-1.55px]">
        Your Questions, Answered
      </h1>

      <p className="mx-auto mt-[18px] max-w-[460px] text-center text-[16px] font-normal leading-[24px] text-[#858585] min-[800px]:absolute min-[800px]:left-1/2 min-[800px]:top-[145px] min-[800px]:mt-0 min-[800px]:w-[460px] min-[800px]:-translate-x-1/2">
        Adapt easily and scale confidently with a flexible system designed to support
        your business at every stage of growth.
      </p>

      <div className="mx-auto mt-[34px] overflow-hidden rounded-[20px] bg-white min-[800px]:absolute min-[800px]:left-[42px] min-[800px]:top-[235px] min-[800px]:mt-0 min-[800px]:h-[628px] min-[800px]:w-[calc(100%-84px)]">
        <img
          src="/assets/images/faq/faq-banner-image.webp"
          alt="Seafood FAQ banner"
          className="block aspect-[1322/622] h-auto w-full object-cover object-center min-[800px]:h-full min-[800px]:aspect-auto"
          loading="eager"
        />
      </div>
    </section>
  );
}
