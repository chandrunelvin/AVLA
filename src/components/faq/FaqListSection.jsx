import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findProductBySlug, getProductsByCategory } from '../../data/productDetails';

function FaqRows({ rows, expandedKey, onToggle, sectionIndex }) {
  return (
    <div className="mt-[30px] space-y-[20px]">
      {rows.map((row, rowIndex) => {
        const key = `${sectionIndex}-${rowIndex}`;
        const expanded = expandedKey === key;

        return (
          <div key={`${row.label}-${row.question}`}>
            <button
              type="button"
              onClick={() => onToggle(key)}
              className={`w-full rounded-[20px] px-[18px] py-[20px] text-center transition-colors sm:hidden ${
                expanded ? 'bg-[#0161FE] text-white' : 'bg-[#F6F7F9] text-[#111111]'
              }`}
            >
              <p className="text-[22px] font-normal leading-[1.2]">{row.label}</p>
              <p className={`mt-[12px] text-[14px] leading-[1.6] ${expanded ? 'text-white/90' : 'text-[#6D6D6ECC]'}`}>
                {row.question}
              </p>
            </button>

            {expanded && row.answer && (
              <div className="rounded-[20px] bg-[#F6F7F9] px-[18px] py-[18px] text-center sm:hidden">
                <p className="text-[14px] leading-[1.7] text-[#8a8a8a]">{row.answer}</p>
              </div>
            )}

            <button
              type="button"
              onClick={() => onToggle(key)}
              className={`hidden w-full sm:grid sm:min-h-[69px] sm:grid-cols-[1fr_1.05fr] sm:items-center sm:rounded-[27px] sm:px-[13px] sm:py-[6px] ${
                expanded ? 'bg-[#0161FE] text-white' : 'bg-[#F6F7F9] text-[#000000]'
              }`}
            >
              <p className="p-[10px] text-left text-[27px] font-normal leading-[22px]">{row.label}</p>
              <p className={`p-[10px] text-left text-[18px] font-normal leading-[22px] ${expanded ? 'text-white' : 'text-[#6D6D6ECC]'}`}>
                {row.question}
              </p>
            </button>

            {expanded && row.answer && (
              <div className="hidden rounded-[23px] bg-[#F6F7F9] px-[22px] py-[17px] text-[20px] font-normal leading-[28px] text-[#6D6D6ECC] sm:block">
                {row.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function FaqListSection({ activeCategory = 'fish', productSlug = null }) {
  const navigate = useNavigate();
  const selectedProduct = productSlug ? findProductBySlug(productSlug) : null;
  const sections = selectedProduct
    ? [{ title: selectedProduct.displayName, slug: selectedProduct.slug, rows: selectedProduct.faqs || [] }]
    : getProductsByCategory(activeCategory).map((product) => ({
        title: product.displayName,
        slug: product.slug,
        rows: (product.faqs || []).slice(0, 3),
      }));
  const [expandedKey, setExpandedKey] = useState('0-0');

  function toggle(key) {
    setExpandedKey((currentKey) => (currentKey === key ? null : key));
  }

  return (
    <div className="px-[16px] pt-[50px] sm:px-[43px]">
      {sections.map((section, sectionIndex) => (
        <section key={section.slug} className="mb-[71px] sm:mb-[43px]">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="inline-flex h-[32px] items-center justify-center rounded-full border border-[#202833] px-[16px] sm:h-[38px]">
              <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[1.2px] text-[#202833] sm:text-[14px]">
                Product FAQ
              </span>
            </div>
            <div className="mt-[30px] flex w-full flex-col items-center gap-[30px] sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-[32px] font-normal leading-[1.1] text-[#2b2b2b] sm:text-[42px] sm:leading-[40px]">
                {section.title}
              </h2>
              {!selectedProduct && (
                <button
                  type="button"
                  onClick={() => navigate(`/faq/${section.slug}`)}
                  className="flex h-[42px] w-[110px] shrink-0 items-center justify-center gap-[7px] rounded-full bg-[#0161FE] text-[13px] font-semibold text-white"
                >
                  View All
                  <img src="/assets/images/home/main-arrow.svg" alt="" aria-hidden="true" className="h-[14px] w-[14px]" />
                </button>
              )}
            </div>
          </div>

          <FaqRows
            rows={section.rows}
            expandedKey={expandedKey}
            onToggle={toggle}
            sectionIndex={sectionIndex}
          />
        </section>
      ))}
    </div>
  );
}
