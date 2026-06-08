import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogDetails } from '../../data/blogDetails';

// Desktop shows the first two; mobile cycles through every blog.
const desktopCards = blogDetails.slice(0, 2);

export default function FeedHomeComponent() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  function prev() {
    setCurrent((i) => (i - 1 + blogDetails.length) % blogDetails.length);
  }

  function next() {
    setCurrent((i) => (i + 1) % blogDetails.length);
  }

  function goToBlog() {
    navigate('/blog');
  }

  function openBlog(slug) {
    navigate(slug ? `/blog/${slug}` : '/blog');
  }

  const card = blogDetails[current];

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
          <img src="/assets/images/home/main-arrow.svg" alt="" aria-hidden="true" className="h-[16px] w-[16px]" />
          </button>
        </div>

        {/* Slide card */}
        <div className="mt-[28px]">
          <div className="flex h-[260px] w-full items-center justify-center overflow-hidden rounded-[18px] bg-white">
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <h3 className="mt-[20px] text-[24px] font-normal leading-[30px] text-[#3f3f3f]">
            {card.title}
          </h3>

          <button
            type="button"
            onClick={() => openBlog(card.slug)}
          className="mt-[18px] flex h-[44px] min-w-[120px] items-center justify-center gap-[8px] rounded-full bg-[#0161FE] text-[15px] font-medium text-white"
        >
          Explore
          <img src="/assets/images/home/main-arrow.svg" alt="" aria-hidden="true" className="h-[16px] w-[16px]" />
          </button>
        </div>

        {/* Prev / Next arrows */}
        <div className="mt-[32px] flex items-center justify-center gap-[10px]">
          <button
            type="button"
            onClick={prev}
            className="flex h-[47px] w-[47px] items-center justify-center rounded-full border border-[#0161FE] bg-white text-[#0161FE] transition min-[800px]:hover:bg-[#0161FE] min-[800px]:hover:text-white"
          >
            <img src="/assets/images/home/arrow.svg" alt="previous" className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-[47px] w-[47px] items-center justify-center rounded-full border border-[#0161FE] bg-white text-[#0161FE] transition min-[800px]:hover:bg-[#0161FE] min-[800px]:hover:text-white"
          >
             <img src="/assets/images/home/right-arrow.svg" alt="next" />
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
          <img src="/assets/images/home/main-arrow.svg" alt="" aria-hidden="true" className="h-[18px] w-[18px]" />
        </button>

        <div className="absolute left-[42px] top-[185px] grid w-[94%] grid-cols-2 gap-[14px] min-[1000px]:max-[1300px]:left-1/2 min-[1000px]:max-[1300px]:w-[92%] min-[1000px]:max-[1300px]:-translate-x-1/2">
          {desktopCards.map((c) => (
            <article key={c.title} className="w-full">
              <div className="flex h-[438px] w-full items-center justify-center overflow-hidden rounded-[22px] bg-white">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-[27px] text-[32px] font-normal leading-[40px] text-[#3f3f3f]">
                {c.title}
              </h3>
              <button
                type="button"
                onClick={() => openBlog(c.slug)}
              className="mt-[28px] flex h-[46px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium text-white"
              >
                Explore
                <img src="/assets/images/home/main-arrow.svg" alt="" aria-hidden="true" className="h-[18px] w-[18px]" />
              </button>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
