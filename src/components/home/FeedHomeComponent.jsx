import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const blogCards = [
  {
    title: 'My Rameswaram Trip: Book Pandits & Temple Services with Our New Website',
    image: '/assets/Home/images/image_26.svg',
    alt: 'My Rameswaram Trip',
  },
  {
    title: 'Seafsoft: The Ultimate Seafood Inventory System for Export Success',
    image: '/assets/Home/images/image_10.svg',
    alt: 'Seafsoft',
  },
];

export default function FeedHomeComponent() {
  const navigate = useNavigate();

  function goToBlog() {
    navigate('/blog');
  }

  return (
    <section className="mx-auto mt-6 w-full max-w-[1420px] overflow-hidden rounded-[20.41314125061035px] bg-white px-6 py-[50px] sm:px-10 lg:px-[42px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="inline-flex h-[37.25px] min-w-[114.5px] items-center justify-center rounded-[204.10891723632812px] border border-[#202833] px-5">
            <span className="text-[14px] font-medium uppercase leading-[18px] tracking-[1.7862437963485718px] text-[#202833]">
              Our blog
            </span>
          </div>

          <h2 className="mt-[31px] text-[32px] font-normal leading-[38px] text-[#111111] sm:text-[36px]">
            Latest insights and trends
          </h2>
        </div>

        <button
          type="button"
          onClick={goToBlog}
          className="inline-flex h-[46px] w-fit items-center justify-center gap-[5px] rounded-[98.68194580078125px] bg-[#0161fe] px-[21px] text-[16px] font-medium leading-[24px] text-white transition hover:brightness-105 lg:mt-[59px]"
        >
          View All
          <ArrowRight aria-hidden="true" size={19} strokeWidth={1.9} />
        </button>
      </div>

      <div className="mt-[30px] grid gap-[13px] lg:grid-cols-2">
        {blogCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[20.41314125061035px] pt-0 text-center"
          >
            <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-[23.686382293701172px] border border-[#8e838333] bg-white p-6 sm:min-h-[435.8px]">
              <img
                src={card.image}
                alt={card.alt}
                className="h-auto max-h-[299px] w-auto max-w-[278px] object-contain"
                loading="lazy"
              />
            </div>

            <h3 className="mx-auto mt-[30px] max-w-[655px] text-[26px] font-normal leading-[34px] text-[#111111cc] sm:text-[32px] sm:leading-[40px]">
              {card.title}
            </h3>

            <button
              type="button"
              onClick={goToBlog}
              className="mx-auto mt-[28px] inline-flex h-[46px] items-center justify-center gap-[5px] rounded-[98.68194580078125px] bg-[#0161fe] px-[21px] text-[16px] font-medium leading-[24px] text-white transition hover:brightness-105"
            >
              Explore
              <ArrowRight aria-hidden="true" size={19} strokeWidth={1.9} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
