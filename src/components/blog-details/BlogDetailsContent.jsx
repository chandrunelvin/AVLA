import { useNavigate } from 'react-router-dom';
import { productDetails } from '../../data/productDetails';

const articleSections = [
  {
    title: 'Executive Summary',
    subtitle: 'Overview of Our Tuna Fish Export Business',
    paragraphs: [
      'India is one of the leading suppliers of premium-quality tuna fish to global seafood markets. As a trusted Tuna Fish Exporter in India, we specialize in sourcing, processing, and exporting fresh and frozen tuna that meets international quality and safety standards.',
      'Our export ecosystem ensures sustainable sourcing from certified fishing zones, hygienic processing in modern facilities, strict quality inspection, and temperature-controlled cold-chain logistics.',
    ],
    bullets: [
      'Sustainable sourcing from certified fishing zones',
      'Hygienic processing in modern facilities',
      'Strict quality inspection and grading',
      'Temperature-controlled cold chain logistics',
      'Custom packaging as per buyer requirements',
    ],
  },
  {
    title: 'Types of Tuna We Export',
    paragraphs: ['We export multiple commercially valuable tuna varieties:'],
    bullets: [
      'Yellowfin Tuna (Thunnus albacares)',
      'Skipjack Tuna (Katsuwonus pelamis)',
      'Longtail Tuna',
      'Albacore Tuna',
    ],
  },
  {
    title: 'Research Purpose (Market & Buyer Demand Focus)',
    paragraphs: ['The global demand for tuna continues to grow due to:'],
    bullets: [
      'High protein and Omega-3 content',
      'Increasing demand for healthy seafood',
      'Rising popularity of sushi and canned tuna',
      'Strong retail and food service market demand',
    ],
  },
  {
    title: 'Processing & Quality Standards',
    paragraphs: ['We follow strict quality control procedures to ensure premium-export-grade tuna:'],
    bullets: [
      'HACCP-compliant processing units',
      'EU & USFDA-approved facilities if applicable',
      'Blast freezing at -40°C',
      'Storage at -18°C or below',
      'Microbiological and chemical residue testing',
    ],
  },
  {
    title: 'Packaging & Export Specifications',
    paragraphs: ['We offer flexible export packaging options:'],
    bullets: [
      'IQF individually quick frozen',
      'Block frozen',
      'Vacuum-packed fillets',
      'Master cartons customized weight',
      'Private labeling available',
    ],
  },
  {
    title: 'Key Insights for Global Buyers',
    bullets: [
      'Indian tuna is competitively priced with premium quality',
      'Year-round availability ensures uninterrupted supply',
      'Sustainable fishing practices increase international trust',
      'Buyers prefer traceability and certification documentation',
      'Custom cutting and grading improve market acceptance',
    ],
  },
  {
    title: 'Why Choose Us as Your Tuna Fish Export Partner?',
    bullets: [
      'Direct sourcing from fishermen and harbors',
      'Modern seafood processing infrastructure',
      'Export documentation support',
      'Flexible MOQ minimum order quantity',
      'Competitive wholesale pricing',
      'On-time shipment commitment',
    ],
  },
  {
    title: 'Nutritional Benefits of Tuna Fish',
    paragraphs: ['Tuna fish is widely valued for its health benefits:'],
    bullets: [
      'High-quality lean protein',
      'Rich in Omega-3 fatty acids',
      'Supports heart health',
      'Boosts brain function',
      'Low in saturated fat',
    ],
  },
  {
    title: 'High-Level Recommendations for Importers',
    bullets: [
      'Confirm size and grade requirements before order placement',
      'Choose appropriate freezing method IQF or block',
      'Verify certifications based on importing country',
      'Plan seasonal bulk purchases for better pricing',
      'Request product samples for quality validation',
    ],
  },
  {
    title: 'Conclusion',
    paragraphs: [
      'As a leading Tuna Fish Exporter in India, we are committed to delivering fresh and frozen tuna that meets international standards. With advanced processing, strict quality control, and reliable logistics, we ensure your business receives premium seafood with consistency and trust.',
      'This makes tuna one of the most demanded seafood products globally.',
    ],
  },
];

function BlogDetailsHero({ blog }) {
  return (
    <section className="rounded-[18px] bg-[#F6F7F9] px-[22px] pb-[36px] pt-[36px] text-center min-[800px]:px-[48px] min-[800px]:pb-[48px] min-[800px]:text-left">
      <h1 className="mx-auto max-w-[760px] text-center text-[30px] font-normal leading-[38px] text-[#4a4a4a] min-[800px]:mx-0 min-[800px]:max-w-none min-[800px]:text-left min-[800px]:text-[34px] min-[800px]:leading-[42px]">{blog.title}</h1>

      <div className="mx-auto mt-[32px] grid max-w-[520px] grid-cols-2 gap-x-[20px] gap-y-[22px] text-center text-[12px] leading-[18px] text-[#858585] min-[800px]:mx-0 min-[800px]:max-w-[1180px] min-[800px]:grid-cols-5 min-[800px]:gap-[54px] min-[800px]:text-left">
        {[
          ['Name Corp', blog.company],
          ['Read Time', blog.readTime],
          ['Release Date', blog.releaseDate],
          ['Species Family', blog.speciesFamily],
          ['Work By', ''],
        ].map(([label, value]) => (
          <div key={label}>
            <p>{label}</p>
            {label === 'Work By' ? (
              <div className="mt-[6px] flex justify-center gap-[6px] min-[800px]:justify-start">
                <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#0161FE] text-white">A</span>
                <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#0161FE] text-white">N</span>
              </div>
            ) : (
              <p className="mt-[4px] font-semibold text-[#4a4a4a]">{value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-[34px] flex items-center justify-center overflow-hidden rounded-[18px] bg-white px-[20px] py-[28px] min-[800px]:h-[626px] min-[800px]:px-[60px] min-[800px]:py-0">
        <img src={blog.image} alt={blog.title} className="h-auto max-h-[560px] w-full object-contain min-[800px]:h-full" />
      </div>
    </section>
  );
}

function ArticleBody({ blog }) {
  return (
    <section className="mt-[50px] rounded-[18px] bg-[#F6F7F9] px-[48px] pb-[80px] pt-[52px]">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex h-[25px] w-[92px] items-center justify-center rounded-full border border-[#202833] text-[9px] font-medium uppercase tracking-[1.2px] text-[#202833]">
            {blog.category}
          </div>
          <h2 className="mt-[32px] w-[365px] text-[28px] font-normal leading-[32px] text-[#222222]">
            {blog.intro}
          </h2>
        </div>
        <p className="mt-[62px] w-[360px] text-[13px] font-normal leading-[18px] text-[#8a8a8a]">
          {blog.sideText}
        </p>
      </div>

      <article className="mx-auto mt-[72px] max-w-[710px] text-[13px] font-normal leading-[21px] text-[#6D6D6E]">
        <p>
          India is a leading hub for high-quality seafood exports, and tuna fish
          stands among the most demanded products worldwide. As a trusted Tuna Fish
          Exporter in India, we specialize in sourcing, processing, and supplying
          fresh and frozen tuna to international markets including the Middle East,
          Europe, and Southeast Asia.
        </p>
        <p className="mt-[14px]">
          Our modern processing facilities, strict quality control measures, and
          temperature-controlled logistics ensure that every shipment maintains
          freshness, nutritional value, and premium-grade standards.
        </p>

        {articleSections.map((section) => (
          <section key={section.title} className="mt-[32px]">
            <h3 className="text-[17px] font-semibold leading-[24px] text-[#222222]">{section.title}</h3>
            {section.subtitle && (
              <h4 className="mt-[8px] text-[14px] font-semibold text-[#222222]">{section.subtitle}</h4>
            )}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-[12px]">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-[12px] list-disc space-y-[10px] pl-[30px]">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>
    </section>
  );
}

function BlogProductsSection() {
  const navigate = useNavigate();

  return (
    <section className="relative left-1/2 mt-[50px] w-screen -translate-x-1/2 overflow-hidden rounded-t-[20px] bg-[#F6F7F9] pb-[50px] pt-[52px]">
      <div className="flex items-start justify-between gap-[60px] px-[48px]">
        <h2 className="text-[48px] font-normal leading-[58px] text-[#111111]">Our Products</h2>
        <p className="mr-[48px] max-w-[674px] text-[16px] font-normal leading-[22px] text-[#8a8a8a]">
          We specialize in sourcing, processing, and exporting high-quality marine
          products from Kerala's coastal waters. Our seafood is handled under strict
          hygiene standards and exported globally with guaranteed freshness and compliance.
        </p>
      </div>

      <div className="mt-[62px] flex translate-x-[-126px] gap-[14px] overflow-visible">
        {productDetails.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => navigate(`/products/${item.slug}`)}
            className="relative h-[370px] min-w-[352px] overflow-hidden rounded-[20px] bg-white"
          >
            <p className="absolute left-1/2 top-[28px] -translate-x-1/2 font-serif text-[54px] italic leading-none text-[#b8b8b8]/75">
              {item.scriptName}
            </p>
            <img
              src={item.image}
              alt={item.displayName}
              className="absolute left-1/2 top-[132px] h-[150px] w-[300px] -translate-x-1/2 object-contain"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default function BlogDetailsContent({ blog }) {
  return (
    <div className="px-[10px] pb-[50px]">
      <BlogDetailsHero blog={blog} />
      <ArticleBody blog={blog} />
      <BlogProductsSection />
    </div>
  );
}
