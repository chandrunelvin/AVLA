import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { productDetails } from '../../data/productDetails';
import OurProductsSection from '../shared/OurProductsSection';

function ProductDetailsHero({ product }) {
  return (
    <section className="rounded-b-[14px] bg-[#F6F7F9] px-[8px] pb-[8px] pt-[36px] text-center min-[800px]:px-[48px] min-[800px]:pb-[48px] min-[800px]:pt-[42px]">

      {/* Title */}
      <h1 className="text-center text-[54px] font-[500] leading-[1.15] text-[#111111] min-[800px]:text-[58px] min-[800px]:leading-[50px]">
        {product.displayName}
      </h1>

      {/* Summary */}
      <p className="mx-auto mt-[21px] max-w-[320px] text-[16px] font-normal leading-[1.6] text-[#6D6D6ECC] min-[800px]:mt-[28px] min-[800px]:max-w-[462px] min-[800px]:leading-[18px]">
        {product.summary}
      </p>

      {/* CTA buttons */}
      <div className="mt-[22px] flex items-center justify-center gap-[10px] min-[800px]:mt-[18px]">
        <a
          href="/contact"
          className="flex h-[48px] min-w-[130px] items-center justify-center gap-[8px] rounded-full bg-[#0161FE] px-[22px] text-[14px] font-medium text-white min-[800px]:h-[42px] min-[800px]:min-w-0 min-[800px]:w-[116px] min-[800px]:px-0"
        >
          Contact
          <span className="text-[18px] leading-none">&#8594;</span>
        </a>
        <a
          href="https://wa.me/917736782999"
          className="flex h-[48px] min-w-[148px] items-center justify-center gap-[8px] rounded-full bg-[#25D366] px-[22px] text-[14px] font-medium text-white min-[800px]:h-[42px] min-[800px]:min-w-0 min-[800px]:w-[128px] min-[800px]:px-0"
        >
          <img
            src="/assets/images/project/whatsapp-icon.svg"
            alt=""
            className="h-[20px] w-[20px] brightness-[10]"
          />
          WhatsApp
        </a>
      </div>

      {/* Fish image card */}
      <div className="mx-auto mt-[30px] flex max-w-[1350px] items-center justify-center overflow-hidden rounded-[18px] bg-white px-[16px] py-[24px] min-[800px]:mt-[47px] min-[800px]:h-[632px] min-[800px]:px-[28px] min-[800px]:py-[36px]">
        <div className="relative flex w-full items-center justify-center">
          <p
            className="absolute left-[10px] top-0 whitespace-nowrap not-italic leading-[54px] tracking-[0px] text-[#b8b8b8]/70 min-[800px]:left-0 min-[800px]:text-[90px]"
            style={{ fontFamily: 'Snell Roundhand, cursive', fontWeight: 500, fontSize: '30px' }}
          >
            {product.scriptName}
          </p>
          <img
            src={product.image}
            alt={product.displayName}
            className="relative z-[1] h-auto max-h-[200px] w-full object-contain min-[800px]:max-h-[520px] min-[800px]:max-w-[1050px]"
          />
        </div>
      </div>

      {/* Thumbnail strip — scrollable on mobile */}
      <div className="mx-auto mt-[16px] flex max-w-[1177px] gap-[8px] overflow-x-auto rounded-[10px] bg-white p-[8px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[800px]:mt-[31px] min-[800px]:overflow-hidden min-[800px]:rounded-[6px]">
        {productDetails.slice(0, 8).map((item) => (
          <div
            key={item.slug}
            className={`flex h-[64px] min-w-[90px] flex-shrink-0 items-center justify-center rounded-[6px] border bg-white px-[8px] min-[800px]:h-[72px] min-[800px]:min-w-[138px] min-[800px]:px-[12px] ${
              item.slug === product.slug ? 'border-[#111111]' : 'border-[#E6E6E6]'
            }`}
          >
            <img
              src={item.image}
              alt={item.displayName}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function ExportRegionSection() {
  return (
    <section className="bg-white px-[24px] pb-[66px] pt-[50px] text-center mt-[50px]">
      <div className="mx-auto inline-flex h-[31px] items-center justify-center rounded-full border border-[#202833] px-[18px]">
        <span className="whitespace-nowrap text-[12px] font-medium uppercase tracking-[1.79px] text-[#202833]">
          Export Region
        </span>
      </div>

      <h2 className="mx-auto mt-[30px] max-w-[529px] text-[34px] font-normal leading-[38px] text-[#111111] sm:text-[36px]">
        Exporting Premium Seafood to
        <br />
        Global Markets
      </h2>

      <img
        src="/assets/images/product-details/export-region-map.svg"
        alt="World map showing seafood export regions"
        className="mx-auto mt-[50px] block h-auto w-full"
        loading="lazy"
      />

      <p className="mx-auto mt-[25%] mb-[8%] max-w-[763px] text-[25px] font-normal leading-[34px] text-[#111111] sm:mt-[10%] sm:text-[30px]">
        With years of experience in seafood exports, we ensure reliable supply,
        consistent quality, and timely international delivery.{' '}
        <span className="text-[#6D6D6E]">
          Our commitment to excellence makes us a trusted partner for global
          seafood importers and distributors.
        </span>
      </p>
    </section>
  );
}

function ProductFlagsSection({ product }) {
  const [expandedKey, setExpandedKey] = useState('0');
  const faqs = product.faqs || productDetails[0].faqs;

  function getFaqLabel(index) {
    if (index === 0) return `${product.displayName} Export`;
    if (index === 1) return `Frozen ${product.displayName}`;
    return 'Certification';
  }

  function toggle(index) {
    const key = String(index);
    setExpandedKey(expandedKey === key ? null : key);
  }

  function isExpanded(index) {
    return expandedKey === String(index);
  }

  return (
    <div className="px-[16px] pt-[24px] sm:px-[43px]">
      <section className="mb-[40px] sm:mb-[43px]">

        {/* Header — same as FaqListSection */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <div className="inline-flex h-[32px] items-center justify-center rounded-full border border-[#202833] px-[16px]">
              <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[1.2px] text-[#202833]">
                Product FAQ
              </span>
            </div>
            <h2 className="mt-[30px] text-[32px] font-normal leading-[1.1] text-[#2b2b2b] sm:text-[42px] sm:leading-[40px]">
              {product.displayName}
            </h2>
          </div>
          <a
            href="/products"
            className="mt-[30px] flex h-[42px] w-[110px] items-center justify-center gap-[7px] rounded-full bg-[#0161FE] text-[13px] font-semibold text-white sm:mt-0"
          >
            View All
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </div>

        {/* FAQ rows — same as FaqListSection */}
        <div className="mt-[40px] space-y-[20px]">
          {faqs.map((faq, index) => (
            <div key={faq.question}>

              {/* Mobile: accordion card button */}
              <button
                type="button"
                onClick={() => toggle(index)}
                className={`w-full rounded-[20px] px-[18px] py-[20px] text-center transition-colors sm:hidden ${
                  isExpanded(index) ? 'bg-[#0161FE] text-white' : 'bg-[#F6F7F9] text-[#111111]'
                }`}
              >
                <p className="text-[22px] font-normal leading-[1.2]">{getFaqLabel(index)}</p>
                <p className={`mt-[12px] text-[14px] leading-[1.6] ${isExpanded(index) ? 'text-white/90' : 'text-[#6D6D6ECC]'}`}>
                  {faq.question}
                </p>
              </button>

              {/* Mobile: answer panel */}
              {isExpanded(index) && faq.answer && (
                <div className="mt-[-8px] rounded-[20px] bg-[#F6F7F9] px-[18px] py-[18px] text-center sm:hidden">
                  <p className="text-[14px] leading-[1.7] text-[#8a8a8a]">{faq.answer}</p>
                </div>
              )}

              {/* Desktop: 2-column row */}
              <button
                type="button"
                onClick={() => toggle(index)}
                className={`hidden w-full sm:grid sm:min-h-[69px] sm:grid-cols-[1fr_1.05fr] sm:items-center sm:rounded-[27px] sm:px-[13px] sm:py-[6px] ${
                  isExpanded(index) ? 'bg-[#0161FE] text-white' : 'bg-[#F6F7F9] text-[#000000]'
                }`}
              >
                <p className="p-[10px] text-left text-[27px] font-normal leading-[22px]">{getFaqLabel(index)}</p>
                <p className={`p-[10px] text-left text-[18px] font-normal leading-[22px] ${isExpanded(index) ? 'text-white' : 'text-[#6D6D6ECC]'}`}>
                  {faq.question}
                </p>
              </button>

              {/* Desktop: answer */}
              {isExpanded(index) && faq.answer && (
                <div className="hidden rounded-[23px] bg-[#F6F7F9] px-[22px] py-[17px] text-[20px] font-normal leading-[28px] text-[#6D6D6ECC] sm:block">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


export default function ProductDetailsContent({ product }) {
  return (
    <div className="px-[10px] pb-[50px]">
      <ProductDetailsHero product={product} />
      <ExportRegionSection />
      <ProductFlagsSection product={product} />
      <OurProductsSection />
    </div>
  );
}
