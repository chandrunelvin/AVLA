import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { productDetails } from '../../data/productDetails';

export default function OurProductsSection() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragged, setDragged] = useState(false);

  function onMouseDown(e) {
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }
  function onMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 5) setDragged(true);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }
  function onMouseUp() { setIsDragging(false); }

  return (
    <section className="relative left-1/2 mt-[40px] w-screen -translate-x-1/2 rounded-t-[20px] bg-[#F6F7F9]">

      {/* ── Mobile layout ── */}
      <div className="sm:hidden">

        {/* Hero text block */}
        <div className="px-[24px] pb-[36px] pt-[48px] text-center">
          <h2 className="text-[48px] font-normal leading-[56px] text-[#111111]">
            Our Projects
          </h2>
          <p className="mx-auto mt-[20px] max-w-[320px] text-[14px] font-normal leading-[23px] text-[#8a8a8a]">
            We specialize in sourcing, processing, and exporting high-quality marine
            products from Kerala's coastal waters. Our seafood is handled under strict
            hygiene standards and exported globally with guaranteed freshness and
            compliance.
          </p>
          <div className="mt-[28px] flex items-center justify-center gap-[12px]">
            <a
              href="/contact"
              className="flex h-[46px] items-center justify-center gap-[8px] rounded-full bg-[#0161FE] px-[26px] text-[14px] font-semibold text-white"
            >
              Contact
              <span className="text-[18px] leading-none">&#8594;</span>
            </a>
            <a
              href="/products"
              className="flex h-[46px] items-center justify-center rounded-full border border-[#111111] px-[26px] text-[14px] font-semibold text-[#111111]"
            >
              Product
            </a>
          </div>
        </div>

        {/* Horizontal scroll cards */}
        <div className="flex gap-[10px] overflow-x-auto px-[0px] pb-[10px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {productDetails.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => navigate(`/products/${item.slug}`)}
              className="relative h-[240px] min-w-[calc(50%-5px)] shrink-0 overflow-hidden rounded-[20px] bg-white"
            >
              <p
                className="absolute left-1/2 top-[14px] -translate-x-1/2 whitespace-nowrap text-[#b8b8b8]/75"
                style={{
                  fontFamily: 'Snell Roundhand, cursive',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '30px',
                  lineHeight: '54px',
                  letterSpacing: '0px',
                }}
              >
                {item.scriptName}
              </p>
              <img
                src={item.image}
                alt={item.displayName}
                className="h-full w-full object-contain p-[16px]"
                loading="lazy"
              />
            </button>
          ))}
        </div>

      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden sm:block pb-[50px] pt-[52px]">
        <div className="flex items-start justify-between gap-[60px] px-[48px]">
          <h2 className="shrink-0 text-[46px] font-normal leading-[58px] text-[#111111]">
            Our Products
          </h2>
          <p className="max-w-[674px] text-[16px] font-normal leading-[22px] text-[#8a8a8a]">
            We specialize in sourcing, processing, and exporting high-quality marine
            products from Kerala's coastal waters. Our seafood is handled under strict
            hygiene standards and exported globally with guaranteed freshness and
            compliance.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="mt-[62px] overflow-x-auto px-[48px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div className="flex w-max gap-[14px] pb-[4px]">
            {productDetails.map((item, index) => (
              <button
                key={`${item.slug}-${index}`}
                type="button"
                onClick={() => { if (!dragged) navigate(`/products/${item.slug}`); }}
                className="relative h-[370px] min-w-[352px] overflow-hidden rounded-[20px] bg-white"
              >
                <p
                  className="absolute left-1/2 top-[28px] -translate-x-1/2 whitespace-nowrap text-[#b8b8b8]/75"
                  style={{
                    fontFamily: 'Snell Roundhand, cursive',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    fontSize: '50px',
                    lineHeight: '54px',
                    letterSpacing: '0px',
                  }}
                >
                  {item.scriptName}
                </p>
                <img
                  src={item.image}
                  alt={item.displayName}
                  className="absolute left-1/2 top-[132px] h-[150px] w-[300px] -translate-x-1/2 object-contain"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
