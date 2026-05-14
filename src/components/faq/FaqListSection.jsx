import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fishRows = [
  {
    label: 'Tuna Export',
    question: 'What forms of Yellowfin Tuna do you offer for export?',
    answer:
      'We Supply Yellowfin Tuna In Whole Round, Gutted & Gilled (G&G), Loin, Steak, And Fillet Forms. Custom Cuts Are Available Based On Buyer Requirements.',
  },
  {
    label: 'Frozen Tuna',
    question: 'What is the storage temperature for frozen Tuna?',
    answer:
      'Frozen Tuna is stored and shipped under controlled cold-chain conditions to preserve freshness, texture, and quality.',
  },
  {
    label: 'Certification',
    question: 'Is your Tuna processed in HACCP-certified facilities?',
    answer:
      'Yes, our Tuna is processed with strict hygiene controls and export-ready quality checks.',
  },
];

const faqContent = {
  fish: [
    { title: 'Tuna Fish', rows: fishRows },
    { title: 'Sardine Fish', rows: fishRows },
    { title: 'Grouper Fish', rows: fishRows },
    { title: 'Salmon Fish', rows: fishRows },
    { title: 'Mackerel Fish', rows: fishRows },
  ],
  cephalopods: [
    {
      title: 'Squid',
      rows: [
        { label: 'Squid Export', question: 'What squid forms are available for export?', answer: 'We supply whole, cleaned, tube, tentacle, and frozen squid products based on market and buyer requirements.' },
        { label: 'Frozen Squid', question: 'Can squid be packed as IQF or block frozen?', answer: 'Yes, squid can be packed as IQF or block frozen depending on buyer requirements.' },
        { label: 'Certification', question: 'Is squid processed under export hygiene controls?', answer: 'All squid products are processed under certified hygiene and export quality controls.' },
      ],
    },
    {
      title: 'Octopus',
      rows: [
        { label: 'Octopus Export', question: 'Do you supply cleaned octopus for export?', answer: 'Cleaned and frozen octopus can be supplied with buyer-specific sizing and packing.' },
        { label: 'Frozen Octopus', question: 'What sizes are available for octopus shipments?', answer: 'Octopus is available in multiple size grades as per international buyer specifications.' },
        { label: 'Certification', question: 'Can quality certificates be arranged?', answer: 'Yes, quality and hygiene certificates are provided with every shipment.' },
      ],
    },
  ],
  crustaceans: [
    {
      title: 'Crab',
      rows: [
        { label: 'Crab Export', question: 'What crab products do you export?', answer: 'We support export supply for whole crab, cleaned crab, and frozen crab products according to buyer demand.' },
        { label: 'Frozen Crab', question: 'How is frozen crab packed?', answer: 'Frozen crab is packed in hygienic export-grade cartons under cold-chain conditions.' },
        { label: 'Certification', question: 'Are crab products checked before export?', answer: 'Yes, all crab products undergo quality inspection before export.' },
      ],
    },
    {
      title: 'Shrimp',
      rows: [
        { label: 'Shrimp Export', question: 'Which shrimp forms are available?', answer: 'Shrimp can be supplied in whole, headless, peeled, deveined, and frozen forms based on requirements.' },
        { label: 'Frozen Shrimp', question: 'Can shrimp be shipped IQF?', answer: 'Yes, IQF shrimp is available for bulk export orders.' },
        { label: 'Certification', question: 'Can shrimp exports include documentation?', answer: 'All export documentation including health certificates is provided.' },
      ],
    },
  ],
  bivalve: [
    {
      title: 'Clams',
      rows: [
        { label: 'Clam Export', question: 'Do you supply clams for international buyers?', answer: 'Clams can be sourced, sorted, packed, and shipped according to export specifications.' },
        { label: 'Frozen Clams', question: 'Can clams be frozen for shipment?', answer: 'Yes, frozen clams are available with proper cold-chain handling.' },
        { label: 'Certification', question: 'Are bivalve shipments inspected?', answer: 'All bivalve products are inspected and certified before shipment.' },
      ],
    },
    {
      title: 'Mussels',
      rows: [
        { label: 'Mussel Export', question: 'What mussel forms are available?', answer: 'Mussels are available in export-ready formats depending on season, buyer requirement, and quality checks.' },
        { label: 'Frozen Mussels', question: 'What packing is used for mussels?', answer: 'Mussels are packed in hygiene-certified export cartons under cold-chain conditions.' },
        { label: 'Certification', question: 'Can mussel shipments include food safety documents?', answer: 'Yes, food safety and quality documents are included with all mussel exports.' },
      ],
    },
  ],
};

export default function FaqListSection({ activeCategory }) {
  const navigate = useNavigate();
  const sections = faqContent[activeCategory] || faqContent.fish;
  const [expandedKey, setExpandedKey] = useState('0-0');

  function toggle(sectionIndex, rowIndex) {
    const key = `${sectionIndex}-${rowIndex}`;
    setExpandedKey(expandedKey === key ? null : key);
  }

  function isExpanded(sectionIndex, rowIndex) {
    return expandedKey === `${sectionIndex}-${rowIndex}`;
  }

  return (
    <div className="px-[16px] pt-[50px] sm:px-[43px]">
      {sections.map((section, sectionIndex) => (
        <section key={section.title} className="mb-[71px] sm:mb-[43px]">

          {/* Section header */}
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
              <button
                type="button"
                onClick={() => navigate('/products')}
                className="flex h-[42px] w-[110px] shrink-0 items-center justify-center gap-[7px] rounded-full bg-[#0161FE] text-[13px] font-semibold text-white"
              >
                View All
                <img src="/assets/images/home/main-arrow.svg" alt="" aria-hidden="true" className="h-[14px] w-[14px]" />
              </button>
            </div>
          </div>

          {/* FAQ rows */}
          <div className="mt-[30px] space-y-[20px]">
            {section.rows.map((row, rowIndex) => {
              const expanded = isExpanded(sectionIndex, rowIndex);
              return (
                <div key={row.label}>

                  {/* Mobile: full-width card button */}
                  <button
                    type="button"
                    onClick={() => toggle(sectionIndex, rowIndex)}
                    className={`w-full rounded-[20px] px-[18px] py-[20px] text-center transition-colors sm:hidden ${
                      expanded ? 'bg-[#0161FE] text-white' : 'bg-[#F6F7F9] text-[#111111]'
                    }`}
                  >
                    <p className="text-[22px] font-normal leading-[1.2]">{row.label}</p>
                    <p className={`mt-[12px] text-[14px] leading-[1.6] ${expanded ? 'text-white/90' : 'text-[#6D6D6ECC]'}`}>
                      {row.question}
                    </p>
                  </button>

                  {/* Mobile: answer panel */}
                  {expanded && row.answer && (
                    <div className="rounded-[20px] bg-[#F6F7F9] px-[18px] py-[18px] text-center sm:hidden">
                      <p className="text-[14px] leading-[1.7] text-[#8a8a8a]">{row.answer}</p>
                    </div>
                  )}

                  {/* Desktop: 2-column row */}
                  <button
                    type="button"
                    onClick={() => toggle(sectionIndex, rowIndex)}
                    className={`hidden w-full sm:grid sm:min-h-[69px] sm:grid-cols-[1fr_1.05fr] sm:items-center sm:rounded-[27px] sm:px-[13px] sm:py-[6px] ${
                      expanded ? 'bg-[#0161FE] text-white' : 'bg-[#F6F7F9] text-[#000000]'
                    }`}
                  >
                    <p className="p-[10px] text-left text-[27px] font-normal leading-[22px]">{row.label}</p>
                    <p className={`p-[10px] text-left text-[18px] font-normal leading-[22px] ${expanded ? 'text-white' : 'text-[#6D6D6ECC]'}`}>
                      {row.question}
                    </p>
                  </button>

                  {/* Desktop: answer */}
                  {expanded && row.answer && (
                    <div className="hidden rounded-[23px] bg-[#F6F7F9] px-[22px] py-[17px] text-[20px] font-normal leading-[28px] text-[#6D6D6ECC] sm:block">
                      {row.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
