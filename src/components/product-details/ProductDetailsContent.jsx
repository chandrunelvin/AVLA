import { useNavigate } from 'react-router-dom';
import { fishProducts, productDetails } from '../../data/productDetails';

function ProductDetailsHero({ product }) {
  return (
    <section className="rounded-b-[14px] bg-[#F6F7F9] px-[22px] pb-[48px] pt-[42px] text-center min-[800px]:px-[48px]">
      <h1 className="text-center text-[42px] font-normal leading-[50px] text-[#111111] min-[800px]:text-[48px]">{product.displayName}</h1>
      <p className="mx-auto mt-[28px] max-w-[430px] text-[13px] font-normal leading-[18px] text-[#6D6D6ECC]">
        {product.summary}
      </p>

      <div className="mt-[18px] flex items-center justify-center gap-[10px]">
        <a
          href="/contact"
          className="flex h-[42px] w-[116px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[13px] font-medium text-white"
        >
          Enquiry
          <span className="text-[18px] leading-none">&#8594;</span>
        </a>
        <a
          href="https://wa.me/919446017777"
          className="flex h-[42px] w-[128px] items-center justify-center gap-[8px] rounded-full bg-[#25D366] text-[13px] font-medium text-white"
        >
          <img src="/assets/images/contact/icon-whatsapp.svg" alt="" className="h-[20px] w-[20px]" />
          WhatsApp
        </a>
      </div>

      <div className="mx-auto mt-[47px] flex max-w-[1350px] items-center justify-center overflow-hidden rounded-[18px] bg-white px-[18px] py-[30px] min-[800px]:h-[632px] min-[800px]:px-[28px] min-[800px]:py-[36px]">
        <div className="relative flex h-full w-full items-center justify-center">
          <p className="absolute left-1/2 top-0 -translate-x-1/2 text-center font-serif text-[46px] italic leading-none text-[#b8b8b8]/70 min-[800px]:left-0 min-[800px]:-translate-x-0 min-[800px]:text-left min-[800px]:text-[90px]">
            {product.scriptName}
          </p>
          <img
            src={product.image}
            alt={product.displayName}
            className="relative z-[1] h-auto max-h-[520px] w-full max-w-[1050px] object-contain"
          />
        </div>
      </div>

      <div className="mx-auto mt-[31px] flex max-w-[1210px] gap-[8px] overflow-hidden rounded-[6px] bg-white p-[8px]">
        {productDetails.slice(0, 8).map((item) => (
          <div
            key={item.slug}
            className={`flex h-[72px] min-w-[138px] items-center justify-center rounded-[6px] border ${
              item.slug === product.slug ? 'border-[#111111]' : 'border-[#E6E6E6]'
            } bg-white px-[12px]`}
          >
            <img src={item.image} alt={item.displayName} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

function ExportRegionSection() {
  return (
    <section className="bg-white px-[24px] pb-[66px] pt-[42px] text-center">
      <div className="mx-auto flex h-[28px] w-[126px] items-center justify-center rounded-full border border-[#111111] text-[11px] font-normal uppercase tracking-[3px] text-[#111111]">
        Export Region
      </div>

      <h2 className="mx-auto mt-[24px] max-w-[410px] text-[28px] font-normal leading-[34px] text-[#111111]">
        Exporting Premium Seafood to
        <br />
        Global Markets
      </h2>

      <img
        src="/assets/images/product-details/export-region-map.png"
        alt="World map showing seafood export regions"
        className="mx-auto mt-[38px] block h-auto w-full max-w-[1068px]"
        loading="lazy"
      />

      <p className="mx-auto mt-[64px] max-w-[590px] text-[22px] font-normal leading-[28px] text-[#111111]">
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
  const faqs = product.faqs || productDetails[0].faqs;
  const mobileProducts = fishProducts.slice(0, 4);
  const mobileFaqs = faqs.map((faq, index) => ({
    ...faq,
    label: index === 0 ? 'Tuna Export' : index === 1 ? 'Frozen Tuna' : 'Certification',
  }));

  return (
    <section className="bg-black px-[2px] pb-[68px] pt-[2px] min-[800px]:px-[42px] min-[800px]:pb-[100px] min-[800px]:pt-0">
      <div className="min-[800px]:hidden">
        {mobileProducts.map((item, productIndex) => (
          <div key={item.slug} className={productIndex === 0 ? '' : 'mt-[72px]'}>
            <div className="mx-auto flex h-[25px] w-[111px] items-center justify-center rounded-full border border-[#0161FE] text-[9px] font-medium uppercase tracking-[1.2px] text-[#0161FE]">
              Product FAQ
            </div>
            <h2 className="mt-[37px] text-center text-[36px] font-normal leading-[43px] text-[#111111]">
              {item.displayName}
            </h2>
            <a
              href="/products"
              className="mx-auto mt-[35px] flex h-[46px] w-[137px] items-center justify-center gap-[15px] rounded-full bg-[#0161FE] text-[14px] font-medium text-white"
            >
              View All
              <span className="text-[18px] leading-none">&#8594;</span>
            </a>

            <div className="mt-[34px] flex flex-col items-center gap-[30px]">
              {mobileFaqs.map((faq, index) => (
                <div
                  key={`${item.slug}-${faq.question}`}
                  className={`flex w-full max-w-[365px] flex-col items-center overflow-hidden rounded-[25px] text-center ${
                    index === 0 ? 'bg-[#0161FE] text-white' : 'bg-[#F6F7F9] text-[#111111]'
                  }`}
                >
                  <div className="flex w-full flex-col items-center justify-center px-[18px] pb-[24px] pt-[22px] text-center">
                    <p className="w-full text-center text-[26px] font-normal leading-[31px]">
                      {faq.label}
                    </p>
                    <p
                      className={`mx-auto mt-[30px] w-full max-w-[315px] text-center font-normal ${
                        index === 0
                          ? 'text-[18px] leading-[28px] text-white'
                          : 'text-[18px] leading-[28px] text-[#6D6D6ECC]'
                      }`}
                    >
                      {faq.question}
                    </p>
                  </div>
                  {index === 0 && (
                    <p className="w-full bg-[#F6F7F9] px-[27px] py-[20px] text-center text-[20px] font-normal leading-[28px] text-[#8a8a8a]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden items-end justify-between min-[800px]:flex">
        <div>
          <div className="flex h-[25px] w-[111px] items-center justify-center rounded-full border border-[#0161FE] text-[9px] font-medium uppercase tracking-[1.2px] text-[#0161FE]">
            Product FAQ
          </div>
          <h2 className="mt-[32px] text-[32px] font-normal text-[#111111]">{product.displayName}</h2>
        </div>
        <a
          href="/products"
          className="flex h-[45px] w-[118px] items-center justify-center gap-[10px] rounded-full bg-[#0161FE] text-[14px] font-medium text-white"
        >
          View All
          <span className="text-[18px] leading-none">&#8594;</span>
        </a>
      </div>

      <div className="mt-[52px] hidden overflow-hidden rounded-[18px] min-[800px]:block">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className={`${index === 0 ? 'bg-[#0161FE] text-white' : 'mt-[18px] bg-[#F6F7F9] text-[#111111]'} rounded-[18px]`}
          >
            <div className="grid min-h-[72px] grid-cols-[minmax(180px,360px)_1fr] items-center gap-[24px] px-[24px] text-[16px] font-normal">
              <p>
                {index === 0
                  ? `${product.displayName} Export`
                  : index === 1
                    ? `Frozen ${product.displayName}`
                    : 'Certification'}
              </p>
              <p className="text-[13px]">{faq.question}</p>
            </div>
            {index === 0 && (
              <p className="bg-[#F6F7F9] px-[24px] py-[24px] text-[14px] leading-[20px] text-[#6D6D6ECC]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function MoreProductsSection() {
  const navigate = useNavigate();

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden rounded-t-[20px] bg-[#F6F7F9] pb-[50px] pt-[52px]">
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

export default function ProductDetailsContent({ product }) {
  return (
    <div className="px-[10px] pb-[50px]">
      <ProductDetailsHero product={product} />
      <ExportRegionSection />
      <ProductFlagsSection product={product} />
      <MoreProductsSection />
    </div>
  );
}
