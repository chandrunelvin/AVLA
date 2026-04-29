export default function FaqHero() {
  return (
    <section className="relative h-[397px] w-full overflow-hidden rounded-[20px] bg-[#F6F7F9]">
      <h1 className="absolute left-1/2 top-[32px] -translate-x-1/2 text-center text-[50px] font-normal leading-[62px] text-[#111111]">
        Your Questions, Answered
      </h1>

      <p className="absolute left-1/2 top-[124px] w-[430px] -translate-x-1/2 text-center text-[13px] font-normal leading-[18px] text-[#8a8a8a]">
        Adapt easily and scale confidently with a flexible system designed to support
        your business at every stage of growth.
      </p>

      <div className="absolute left-[43px] top-[151px] h-[274px] w-[1334px] overflow-hidden rounded-[12px] bg-white">
        <img
          src="/assets/images/faq/faq-hero-seafood.svg"
          alt="Fisherman and tuna illustration"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
    </section>
  );
}
