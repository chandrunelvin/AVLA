import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogDetails } from '../../data/blogDetails';

const postsByCategory = {
  fish: blogDetails,
  cephalopods: [
    {
      title: 'Squid Export Guide – Cleaned, Frozen, and Buyer-Ready Supply',
      image: '/assets/images/blog/blog-cephalopod.svg',
      slug: null,
    },
    {
      title: 'Octopus Export Standards – Processing, Grading, and Packing',
      image: '/assets/images/blog/blog-octopus.svg',
      slug: null,
    },
  ],
  crustaceans: [
    {
      title: 'Crab Export Processing – Quality Handling for Global Buyers',
      image: '/assets/images/blog/blog-crab.svg',
      slug: null,
    },
    {
      title: 'Shrimp Supply Chain – Frozen Seafood for International Markets',
      image: '/assets/images/blog/blog-shrimp.svg',
      slug: null,
    },
  ],
  bivalve: [
    {
      title: 'Clam Export Standards – Safe Handling and Seafood Packing',
      image: '/assets/images/blog/blog-clam.svg',
      slug: null,
    },
    {
      title: 'Mussel Export Guide – Quality, Processing, and Delivery',
      image: '/assets/images/blog/blog-mussel.svg',
      slug: null,
    },
  ],
};

export default function BlogCaseStudies({ activeCategory }) {
  const navigate = useNavigate();
  const posts = postsByCategory[activeCategory] || postsByCategory.fish;

  return (
    <section className="mt-[23px] w-full overflow-hidden rounded-[15px] bg-[#F6F7F9] pb-[32px] pt-[42px] lg:px-[42px] lg:pb-[50px]">

      {/* Section header */}
      <div className="flex flex-col items-center px-[8px] text-center lg:flex-row lg:items-start lg:justify-between lg:px-0 lg:text-left">
        <div>
          <div className="inline-flex h-[32px] items-center justify-center rounded-full border border-[#202833] px-[20px]">
            <span className="whitespace-nowrap text-[12px] font-medium uppercase leading-[12px] tracking-[1.2px] text-[#202833] sm:text-[14px]">
              Case Studies
            </span>
          </div>
          <h2 className="mt-[18px] max-w-[380px] text-[30px] font-normal leading-[1.25] text-[#2b2b2b] lg:text-left">
            Real Results. Real Impact. Our Success Stories.
          </h2>
        </div>

        <p className="mt-[16px] max-w-[450px] text-[16px] font-normal leading-[23.69px] text-[#8a8a8a] lg:mt-[66px] lg:text-left">
        Discover how our solutions have delivered real results, solved complex challenges, and accelerated business growth.
        </p>
      </div>

      {/* Post list — mobile: vertical list */}
      <div className="mt-[28px] flex flex-col gap-[30px] px-[8px] lg:hidden">
        {posts.map((post) => (
          <article key={post.title}>
            <div className="flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-white">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="mt-[25px] text-[20px] font-normal leading-[1.35] text-[#4a4a4a]">
              {post.title}
            </h3>
            <button
              type="button"
              onClick={() => navigate(post.slug ? `/blog/${post.slug}` : '/blog')}
              className="mt-[25px] flex h-[44px] w-[120px] items-center justify-center gap-[8px] rounded-full bg-[#0161FE] text-[14px] font-medium text-white"
            >
              Explore
              <img src="/assets/images/home/main-arrow.svg" alt="" aria-hidden="true" className="h-[16px] w-[16px]" />
            </button>
          </article>
        ))}
      </div>

      {/* Post list — desktop */}
      <div className="mt-[46px] hidden space-y-[40px] lg:block">
        {posts.map((post) => (
          <article
            key={post.title}
            className="flex h-[436px] items-center gap-0"
          >
            <div className="flex-1 pr-[40px]">
              <h3 className="h-[80px] w-[660px] text-[32px] font-normal leading-[40px] text-[#4a4a4a]">
                {post.title}
              </h3>
              <button
                type="button"
                onClick={() => navigate(post.slug ? `/blog/${post.slug}` : '/blog')}
                className="mt-[18px] flex h-[46px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium leading-[24px] text-white transition hover:brightness-105"
              >
                Explore
                <ArrowRight aria-hidden="true" size={20} strokeWidth={1.8} />
              </button>
            </div>
            <div className="ml-auto flex h-[436px] w-[581px] shrink-0 items-center justify-center overflow-hidden rounded-[23px] bg-white">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
