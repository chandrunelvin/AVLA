export default function FaqHero() {
  return (
    <section className="relative h-[905px] w-full overflow-hidden rounded-[20px] bg-[#F6F7F9]">
      <h1 className="absolute left-1/2 top-[48px] -translate-x-1/2 whitespace-nowrap text-center text-[56px] font-normal leading-[67px] tracking-[-1.55px] text-[#111111]">
        Your Questions, Answered
      </h1>

      <p className="absolute left-1/2 top-[145px] w-[460px] -translate-x-1/2 text-center text-[16px] font-normal leading-[24px] text-[#858585]">
        Adapt easily and scale confidently with a flexible system designed to support
        your business at every stage of growth.
      </p>

      <div className="absolute left-[42px] top-[235px] h-[628px] w-[calc(100%-84px)] overflow-hidden rounded-[20px] bg-white">
        <img
          src="/assets/images/faq/faq-banner-image.webp"
          alt="Seafood FAQ banner"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
      </div>
    </section>
  );
}
