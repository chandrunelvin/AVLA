import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogDetails } from '../../data/blogDetails';

const postsByCategory = {
  fish: blogDetails.map((blog, index) => ({
    ...blog,
    imageClassName: index === 0 ? 'h-full w-full object-cover' : 'h-full w-full object-cover',
  })),
  cephalopods: [
    {
      title: 'Squid Export Guide – Cleaned, Frozen, and Buyer-Ready Supply',
      image: '/assets/images/blog/blog-cephalopod.svg',
      imageClassName: 'h-full w-full object-cover',
    },
    {
      title: 'Octopus Export Standards – Processing, Grading, and Packing',
      image: '/assets/images/blog/blog-octopus.svg',
      imageClassName: 'h-full w-full object-cover',
    },
  ],
  crustaceans: [
    {
      title: 'Crab Export Processing – Quality Handling for Global Buyers',
      image: '/assets/images/blog/blog-crab.svg',
      imageClassName: 'h-full w-full object-cover',
    },
    {
      title: 'Shrimp Supply Chain – Frozen Seafood for International Markets',
      image: '/assets/images/blog/blog-shrimp.svg',
      imageClassName: 'h-[246px] w-[500px] object-contain',
    },
  ],
  bivalve: [
    {
      title: 'Clam Export Standards – Safe Handling and Seafood Packing',
      image: '/assets/images/blog/blog-clam.svg',
      imageClassName: 'h-[246px] w-[500px] object-contain',
    },
    {
      title: 'Mussel Export Guide – Quality, Processing, and Delivery',
      image: '/assets/images/blog/blog-mussel.svg',
      imageClassName: 'h-[246px] w-[500px] object-contain',
    },
  ],
};

export default function BlogCaseStudies({ activeCategory }) {
  const navigate = useNavigate();
  const posts = postsByCategory[activeCategory] || postsByCategory.fish;
  const listTop = 243;
  const rowHeight = 320;
  const rowGap = 46;
  const sectionBottom = 50;
  const sectionHeight =
    listTop + posts.length * rowHeight + Math.max(posts.length - 1, 0) * rowGap + sectionBottom;

  return (
    <section
      className="relative mt-[23px] w-full overflow-hidden rounded-[15px] bg-[#F6F7F9]"
      style={{ height: `${sectionHeight}px` }}
    >
      <div className="absolute left-[42px] top-[53px] flex h-[38px] w-[160px] items-center justify-center rounded-full border border-[#202833]">
        <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[12px] tracking-[1.2px] text-[#202833]">
          Case Studies
        </span>
      </div>

      <h2 className="absolute left-[42px] top-[104px] w-[354px] text-[27px] font-normal leading-[28px] text-[#2b2b2b]">
        Real Results. Real Impact.
        <br />
        Our Success Stories.
      </h2>

      <p className="absolute left-[964px] top-[112px] w-[336px] text-[11px] font-normal leading-[16px] text-[#8a8a8a]">
        Discover how our solutions have delivered real results, solved complex
        challenges, and accelerated business growth.
      </p>

      <div className="absolute left-[42px] top-[243px] w-[1328px]">
        {posts.map((post, index) => (
          <article
            key={post.title}
            className="relative h-[320px]"
            style={{ marginTop: index === 0 ? '0px' : '46px' }}
          >
            <div className="absolute left-0 top-[110px]">
              <h3 className="w-[585px] text-[26px] font-normal leading-[31px] text-[#4a4a4a]">
                {post.title}
              </h3>
              <button
                type="button"
                onClick={() => navigate(post.slug ? `/blog/${post.slug}` : '/blog')}
                className="mt-[24px] flex h-[46px] w-[133px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[16px] font-medium leading-[24px] text-white transition hover:brightness-105"
              >
                Explore
                <ArrowRight aria-hidden="true" size={22} strokeWidth={1.8} />
              </button>
            </div>

            <div className="absolute left-[748px] top-0 flex h-[320px] w-[590px] items-center justify-center overflow-hidden rounded-[14px] bg-white">
              <img
                src={post.image}
                alt={post.title}
                className={post.imageClassName}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
