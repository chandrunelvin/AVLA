import { useNavigate } from 'react-router-dom';
import { productDetails } from '../../data/productDetails';
import OurProductsSection from '../shared/OurProductsSection';

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
  const metaItems = [
    { label: 'Name Corp', value: blog.company },
    { label: 'Read Time', value: blog.readTime },
    { label: 'Release Date', value: blog.releaseDate },
    { label: 'Species Family', value: blog.speciesFamily },
  ];

  return (
    <section className="rounded-[18px] bg-[#F6F7F9] px-[8px] pb-[8px] pt-[36px] min-[800px]:px-[48px] min-[800px]:pb-[48px] min-[800px]:pt-[52px]">

      {/* Title — centered mobile, left desktop */}
      <h1
        className="text-center text-[37px] font-normal leading-[40px] text-[#4a4a4a] min-[800px]:text-left min-[800px]:text-[40px]"
      >
        {blog.title}
      </h1>

      {/* Meta row — stacked centered on mobile, 5-col row on desktop */}
      <div className="mx-auto mt-[28px] flex max-w-[260px] flex-col items-center gap-[22px] text-center min-[800px]:mx-auto min-[800px]:mt-[36px] min-[800px]:max-w-none min-[800px]:flex-row min-[800px]:items-start min-[800px]:gap-[100px] min-[800px]:text-left min-[800px]:justify-center min-[800px]:w-fit">
        {metaItems.map(({ label, value }) => (
          <div key={label} className="flex flex-col min-[800px]">
            <p
              className="text-[#858585]"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: '20.41px',
              }}
            >
              {label}
            </p>
            <p
              className="mt-[6px] text-[#4a4a4a]"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '23.81px',
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Fish image card */}
      <div className="mt-[28px] flex items-center justify-center overflow-hidden rounded-[18px] bg-white px-[20px] py-[32px] min-[800px]:mt-[40px] min-[800px]:h-[580px] min-[800px]:px-[60px] min-[800px]:py-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-auto max-h-[220px] w-full object-contain min-[800px]:max-h-none min-[800px]:h-full min-[800px]:w-auto min-[800px]:max-w-full"
        />
      </div>
    </section>
  );
}

function ArticleBody({ blog }) {
  return (
    <section className="mt-[40px] rounded-[18px] bg-[#F6F7F9] px-[8px] pb-[60px] pt-[36px] min-[800px]:mt-[50px] min-[800px]:px-[48px] min-[800px]:pb-[80px] min-[800px]:pt-[52px]">

      {/* Header: badge + intro + side text */}
      <div className="flex flex-col items-center gap-[20px] text-center min-[800px]:flex-row min-[800px]:items-start min-[800px]:justify-between min-[800px]:gap-0 min-[800px]:text-left">
        <div className="min-[800px]:max-w-[400px]">
          <div className="inline-flex h-[25px] items-center justify-center rounded-full border border-[#202833] px-[12px] text-[12px] font-medium uppercase tracking-[1.2px] text-[#202833] min-[800px]:text-[14px]">
            {blog.category}
          </div>
          <h2 className="mt-[20px] text-[33px] font-normal leading-[1.3] text-[#222222] min-[800px]:mt-[32px] min-[800px]:text-[28px] min-[800px]:leading-[32px]">
            {blog.intro}
          </h2>
        </div>
        <p className="text-[16px] font-normal leading-[1.6] text-[#8a8a8a] min-[800px]:mt-[62px] min-[800px]:w-[434px]">
          {blog.sideText}
        </p>
      </div>

      {/* Article content */}
      <article className="mx-auto mt-[40px] max-w-[710px] text-[18px] font-normal leading-[28px] text-[#6D6D6E] min-[800px]:mt-[72px]">
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
          <section key={section.title} className="mt-[28px] min-[800px]:mt-[32px]">
            <h3 className="text-[24px] font-semibold leading-[28px] text-[#222222] min-[800px]:text-[24px]">
              {section.title}
            </h3>
            {section.subtitle && (
              <h4 className="mt-[8px] text-[20px] font-semibold text-[#222222]">
                {section.subtitle}
              </h4>
            )}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-[12px]">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-[12px] list-disc space-y-[8px] pl-[24px] min-[800px]:space-y-[10px] min-[800px]:pl-[30px]">
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


export default function BlogDetailsContent({ blog }) {
  return (
    <div className="px-[10px] pb-[50px]">
      <BlogDetailsHero blog={blog} />
      <ArticleBody blog={blog} />
      <OurProductsSection />
    </div>
  );
}
