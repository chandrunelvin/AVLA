export default function ContactHero() {
  return (
    <section className="relative min-h-[296px] w-full overflow-hidden rounded-[20px] bg-[#F6F7F9] px-6 py-12 text-center lg:h-[316px] lg:px-0 lg:py-0">
      <h1 className="mx-auto max-w-[820px] text-[40px] font-normal leading-[48px] text-[#111111] sm:text-[52px] sm:leading-[64px] lg:absolute lg:left-1/2 lg:top-[51px] lg:max-w-none lg:-translate-x-1/2 lg:text-[clamp(40px,4vw,58px)] lg:leading-[clamp(50px,5vw,70px)] lg:whitespace-nowrap">
        <span className="lg:hidden">Expert<br />guidance,<br />tailored solution</span>
        <span className="hidden lg:inline">Your Questions, Answered</span>
      </h1>
      <p className="mx-auto mt-6 max-w-[450px] text-[16px] font-normal leading-[22px] text-[#8a8a8a] lg:absolute lg:left-1/2 lg:top-[143px] lg:mt-0 lg:w-[440px] lg:-translate-x-1/2">
        Adapt easily and scale confidently with a flexible system designed to support
        your business at every stage of growth.
      </p>
      <a
        href="https://wa.me/919446017777"
        className="mx-auto mt-8 flex h-[51px] w-[143px] items-center justify-center gap-[10px] rounded-full bg-[#25D366] text-[16px] font-semibold leading-[22px] text-white lg:absolute lg:left-1/2 lg:top-[220px] lg:mt-0 lg:-translate-x-1/2"
      >
        <img
          src="/assets/images/project/whatsapp-icon.svg"
          alt=""
          className="h-[24px] w-[24px]"
          loading="lazy"
        />
        WhatsApp
      </a>
    </section>
  );
}
