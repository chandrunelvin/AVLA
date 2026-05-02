import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const feedCards = [
  {
    title: 'Tuna Fish Guide: Quality, Processing, and Global Demand',
    image: '/assets/images/blog/feeds1-image.png',
    alt: 'Tuna fish',
    imageClassName: 'h-full w-full object-cover',
  },
  {
    title: 'Sardine Fish Export-Grade: From Catch to International Markets',
    image: '/assets/images/blog/Sardine-Fish-blog-image.png',
    alt: 'Sardine fish',
    imageClassName: 'h-full w-full object-cover',
  },
];

export default function FeedHomeComponent() {
  const navigate = useNavigate();

  function goToBlog() {
    navigate('/blog');
  }

  return (
    <section className="relative mx-auto mt-[50px] h-[850px] w-full overflow-hidden rounded-[20px] bg-[#F6F7F9]">
      <div className="absolute left-[42px] top-[52px] flex h-[39px] min-w-[158px] items-center justify-center rounded-full border border-[#202833] px-[21px]">
        <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[18px] tracking-[1.7862435579299927px] text-[#202833]">
          Feeds
        </span>
      </div>

      <h2 className="absolute left-[42px] top-[113px] text-[36px] font-normal leading-[38px] text-[#111111]">
        Latest insights and trends
      </h2>

      <button
        type="button"
        onClick={goToBlog}
        className="absolute right-[44px] top-[105px] flex h-[45px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium leading-[24px] text-white transition hover:brightness-105"
      >
        View All
        <ArrowRight aria-hidden="true" size={22} strokeWidth={1.8} />
      </button>

      <div className="absolute left-[42px] top-[185px] grid w-[94%] grid-cols-2 gap-[14px]">
        {feedCards.map((card) => (
          <article key={card.title} className="w-[100%]">
            <div className="flex h-[438px] w-[100%] items-center justify-center overflow-hidden rounded-[22px] bg-white">
              <img
                src={card.image}
                alt={card.alt}
                className={card.imageClassName}
                loading="lazy"
              />
            </div>

            <h3 className="mt-[27px] w-[640px] text-[32px] font-normal leading-[40px] text-[#3f3f3f]">
              {card.title}
            </h3>

            <button
              type="button"
              onClick={goToBlog}
              className="mt-[28px] flex h-[46px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium leading-[24px] text-white transition hover:brightness-105"
            >
              Explore
              <ArrowRight aria-hidden="true" size={22} strokeWidth={1.8} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
