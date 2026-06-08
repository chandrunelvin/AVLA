import OurProductsSection from '../shared/OurProductsSection';

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
        className="text-center text-[40px] font-normal leading-[40px] text-[#4a4a4a] min-[800px]:text-left min-[800px]:text-[40px]"
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
      <div className="mt-[28px] flex h-[260px] items-center justify-center overflow-hidden rounded-[18px] bg-white min-[800px]:mt-[40px] min-[800px]:h-[580px]">
        {blog.image ? (
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-[220px] w-full items-center justify-center rounded-[14px] bg-[#EEF1F5] text-center text-[18px] text-[#7B7B7B] min-[800px]:h-full">
            Image coming soon
          </div>
        )}
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
          <div className="inline-flex h-[32px] items-center justify-center rounded-full border border-[#202833] px-[12px] text-[12px] font-medium uppercase tracking-[1.2px] text-[#202833] min-[800px]:h-[38px] min-[800px]:text-[14px]">
            {blog.category}
          </div>
          <h2 className="mt-[20px] text-[33px] font-normal leading-[1.3] text-[#222222] min-[800px]:mt-[32px] min-[800px]:text-[33px] min-[800px]:leading-[34px]">
            {blog.intro}
          </h2>
        </div>
        <p className="text-[16px] font-normal leading-[1.6] text-[#8a8a8a] min-[800px]:mt-[62px] min-[800px]:w-[434px]">
          {blog.sideText}
        </p>
      </div>

      {/* Article content */}
      <article className="mx-auto mt-[40px] max-w-[710px] text-[18px] font-normal leading-[28px] text-[#6D6D6E] min-[800px]:mt-[72px]">
        {blog.articleLead?.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? '' : 'mt-[14px]'}>
            {paragraph}
          </p>
        ))}

        {blog.sections?.map((section) => (
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
            {section.source && (
              <p className="mt-[14px] text-[15px] leading-[24px] text-[#8a8a8a]">
                Source:{' '}
                <a
                  href={section.source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0161FE] underline underline-offset-2"
                >
                  {section.source.label}
                </a>
              </p>
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
