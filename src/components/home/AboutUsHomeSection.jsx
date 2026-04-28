export default function AboutUsHomeSection() {
  return (
    <section className="mx-auto mt-6 w-full max-w-[1420px] overflow-hidden rounded-[20px] bg-[#F6F7F9] px-6 py-[50px] text-[#111111] sm:px-10 lg:min-h-[857px] lg:px-[47px]">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-start">
        <div>
          <div className="inline-flex h-[36.22px] min-w-[121.22px] items-center justify-center rounded-[225.14527893066406px] border border-[#202833] px-5">
            <span className="text-[14px] font-medium uppercase leading-[20px] tracking-[1.9698877334594727px] text-[#202833]">
              About us
            </span>
          </div>

          <h2 className="mt-[31px] max-w-[553px] text-[32px] font-normal leading-[38px] text-[#111111] sm:text-[36px]">
            Unlocking creativity, strategy, and innovation for every business
          </h2>
        </div>

        <p className="max-w-[473px] text-[16px] font-normal leading-[22px] text-[#6d6d6ecc] lg:ml-auto lg:mt-[66px]">
          At Arunijone, I bring together skills from UX/UI design, digital marketing,
          stock research and product innovation to deliver practical, impactful solutions
          for individuals and businesses.
        </p>
      </div>

      <div className="mt-[31px] grid gap-[15px] lg:grid-cols-[2.05fr_1fr_1fr] lg:grid-rows-[281.94px_281.89px]">
        <div className="min-h-[260px] overflow-hidden rounded-[22.518085479736328px] bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(135deg,#202833_0%,#5a626d_100%)] lg:min-h-0" />

        <article className="min-h-[260px] rounded-[18.765071868896484px] bg-[#232323] p-[19px] text-white lg:min-h-0">
          <p className="text-[46px] font-normal leading-[54px]">3+</p>
          <p className="mt-[78px] max-w-[283px] text-[16px] font-normal leading-[24px]">
            Years of continuous innovation and valuable insights, helping businesses
            improve their digital presence, design better products, and make informed
            decisions through research-led strategies.
          </p>
        </article>

        <div className="min-h-[260px] overflow-hidden rounded-[22.518085479736328px] bg-[#c5c6c7] lg:min-h-0" />

        <article className="min-h-[260px] rounded-[18.765071868896484px] bg-[#0161fe] p-[19px] text-white lg:min-h-0">
          <div className="relative h-[48.78px] w-[48.78px]">
            <img
              src="/assets/Home/images/vector_2.svg"
              alt=""
              className="absolute left-[1%] top-[1%] h-auto w-[46px]"
              loading="lazy"
            />
            <img
              src="/assets/Home/images/vector_3.svg"
              alt=""
              className="absolute left-[43%] top-[66%] h-auto w-[18px]"
              loading="lazy"
            />
            <img
              src="/assets/Home/images/vector_4.svg"
              alt=""
              className="absolute left-[35%] top-[30%] h-auto w-[20px]"
              loading="lazy"
            />
          </div>

          <p className="mt-[51px] text-[46px] font-normal leading-[54px]">95%</p>
          <p className="mt-[27px] max-w-[609px] text-[16px] font-normal leading-[24px]">
            Client satisfaction achieved through personalized solutions, proactive
            support, and a commitment to understanding each client's unique requirements.
            My focus on excellence ensures that your success remains the priority at every
            step.
          </p>
        </article>

        <div className="min-h-[260px] overflow-hidden rounded-[22.518085479736328px] bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(135deg,#6d6d6e_0%,#202833_100%)] lg:min-h-0" />

        <div className="min-h-[260px] overflow-hidden rounded-[22.518085479736328px] bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(135deg,#444_0%,#888_100%)] lg:min-h-0" />
      </div>
    </section>
  );
}
