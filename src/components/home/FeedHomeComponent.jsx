import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const feedCards = [
  {
    title: 'Tuna Fish Guide: Quality, Processing, and Global Demand',
    image: '/assets/images/blog/feeds1-image.png',
    alt: 'Tuna fish',
  },
  {
    title: 'Sardine Fish Export-Grade: From Catch to International Markets',
    image: '/assets/images/blog/Sardine-Fish-blog-image.png',
    alt: 'Sardine fish',
  },
];

export default function FeedHomeComponent() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  function prev() {
    setCurrent((i) => (i - 1 + feedCards.length) % feedCards.length);
  }

  function next() {
    setCurrent((i) => (i + 1) % feedCards.length);
  }

  function goToBlog() {
    navigate('/blog');
  }

  const card = feedCards[current];

  return (
    <section className="mx-auto mt-[50px] w-full rounded-[20px] bg-[#F6F7F9]">

      {/* ── Mobile layout ── */}
      <div className="flex flex-col px-[8px] pb-[40px] pt-[40px] sm:hidden">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="flex h-[36px] items-center justify-center rounded-full border border-[#202833] px-[18px]">
            <span className="whitespace-nowrap text-[12px] font-medium uppercase tracking-[1.8px] text-[#202833] sm:text-[14px]">
              Our Blog
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-[16px] text-center text-[34px] font-normal leading-[38px] text-[#111111]">
          Latest insights and trends
        </h2>

        {/* View All */}
        <div className="mt-[20px] flex justify-center">
          <button
            type="button"
            onClick={goToBlog}
            className="flex h-[46px] min-w-[130px] items-center justify-center gap-[8px] rounded-full bg-[#0161FE] text-[15px] font-medium text-white"
          >
            View All
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </button>
        </div>

        {/* Slide card */}
        <div className="mt-[28px]">
          <div className="flex h-[260px] w-full items-center justify-center overflow-hidden rounded-[18px] bg-white">
            <img
              src={card.image}
              alt={card.alt}
              className="h-full w-full object-contain p-[16px]"
              loading="lazy"
            />
          </div>

          <h3 className="mt-[20px] text-[24px] font-normal leading-[30px] text-[#3f3f3f]">
            {card.title}
          </h3>

          <button
            type="button"
            onClick={goToBlog}
            className="mt-[18px] flex h-[44px] min-w-[120px] items-center justify-center gap-[8px] rounded-full bg-[#0161FE] text-[15px] font-medium text-white"
          >
            Explore
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </button>
        </div>

        {/* Prev / Next arrows */}
        <div className="mt-[32px] flex items-center justify-center gap-[10px]">
          <button
            type="button"
            onClick={prev}
            className="flex h-[47px] w-[47px] items-center justify-center rounded-full border border-[#0161FE] bg-white text-[#0161FE] transition hover:bg-[#0161FE] hover:text-white"
          >
            <img src="/assets/images/home/arrow.svg" alt="previous" className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-[47px] w-[47px] items-center justify-center rounded-full border border-[#0161FE] bg-white text-[#0161FE] transition hover:bg-[#0161FE] hover:text-white"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="relative hidden h-[850px] w-full overflow-hidden sm:block">
        <div className="absolute left-[42px] top-[52px] flex h-[39px] min-w-[120px] items-center justify-center rounded-full border border-[#202833] px-[21px]">
          <span className="whitespace-nowrap text-[12px] font-medium uppercase leading-[18px] tracking-[1.8px] text-[#202833] sm:text-[14px]">
            Our Blog
          </span>
        </div>

        <h2 className="absolute left-[42px] top-[113px] text-[36px] font-normal leading-[38px] text-[#111111]">
          Latest insights and trends
        </h2>

        <button
          type="button"
          onClick={goToBlog}
          className="absolute right-[44px] top-[105px] flex h-[45px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium text-white"
        >
          View All
          <ArrowRight aria-hidden="true" size={22} strokeWidth={1.8} />
        </button>

        <div className="absolute left-[42px] top-[185px] grid w-[94%] grid-cols-2 gap-[14px]">
          {feedCards.map((c) => (
            <article key={c.title} className="w-full">
              <div className="flex h-[438px] w-full items-center justify-center overflow-hidden rounded-[22px] bg-white">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="h-full w-full object-contain p-[24px]"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-[27px] text-[32px] font-normal leading-[40px] text-[#3f3f3f]">
                {c.title}
              </h3>
              <button
                type="button"
                onClick={goToBlog}
                className="mt-[28px] flex h-[46px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium text-white"
              >
                Explore
                <ArrowRight aria-hidden="true" size={22} strokeWidth={1.8} />
              </button>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
