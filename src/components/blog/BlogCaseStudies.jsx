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

      {/* Post list */}
      <div className="mt-[36px] space-y-[28px] lg:mt-[46px] lg:space-y-[46px]">
        {posts.map((post) => (
          <article
            key={post.title}
            className="flex flex-col gap-[16px] lg:flex-row lg:h-[320px] lg:items-center lg:gap-0"
          >
            {/* Image — top on mobile, right on desktop */}
            <div className="order-1 flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[14px] bg-white lg:order-2 lg:ml-auto lg:h-[320px] lg:w-[590px] lg:flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Text — bottom on mobile, left on desktop */}
            <div className="order-2 lg:order-1 lg:flex-1 lg:pr-[40px]">
              <h3 className="text-[20px] font-normal leading-[1.35] text-[#4a4a4a] lg:text-[26px] lg:leading-[31px]">
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
          </article>
        ))}
      </div>
    </section>
  );
}
