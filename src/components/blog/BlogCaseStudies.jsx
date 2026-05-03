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
    <section className="mt-[23px] w-full overflow-hidden rounded-[15px] bg-[#F6F7F9] px-[22px] pb-[50px] pt-[42px] sm:px-[42px]">

      {/* Section header */}
      <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
        <div>
          <div className="inline-flex h-[38px] items-center justify-center rounded-full border border-[#202833] px-[20px]">
            <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[12px] tracking-[1.2px] text-[#202833]">
              Case Studies
            </span>
          </div>
          <h2 className="mt-[18px] max-w-[360px] text-[27px] font-normal leading-[1.25] text-[#2b2b2b] lg:text-left">
            Explore a wide range of seafood families and species
          </h2>
        </div>

        <p className="mt-[16px] max-w-[340px] text-[13px] font-normal leading-[1.6] text-[#8a8a8a] lg:mt-[56px] lg:text-left">
          Explore how we drive impactful results for our clients. Delivering
          quality seafood exports across multiple species with certified
          processing and on-time global supply.
        </p>
      </div>

      {/* Post list — mobile: horizontal scroll cards */}
      <div className="mt-[28px] lg:hidden">
        <div className="flex gap-[12px] overflow-x-auto pb-[4px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {posts.map((post) => (
            <button
              key={post.title}
              type="button"
              onClick={() => navigate(post.slug ? `/blog/${post.slug}` : '/blog')}
              className="relative h-[220px] min-w-[calc(50%-6px)] shrink-0 overflow-hidden rounded-[20px] bg-white"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-contain p-[16px]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Post list — desktop */}
      <div className="mt-[46px] hidden space-y-[46px] lg:block">
        {posts.map((post) => (
          <article
            key={post.title}
            className="flex h-[320px] items-center gap-0"
          >
            <div className="flex-1 pr-[40px]">
              <h3 className="text-[26px] font-normal leading-[31px] text-[#4a4a4a]">
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
            <div className="ml-auto flex h-[320px] w-[590px] shrink-0 items-center justify-center overflow-hidden rounded-[14px] bg-white">
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
