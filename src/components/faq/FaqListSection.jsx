import { useNavigate } from 'react-router-dom';

const faqContent = {
  fish: [
    {
      title: 'Tuna Fish',
      rows: [
        {
          label: 'Tuna Export',
          question: 'What forms of Yellowfin Tuna do you offer for export?',
          answer:
            'We Supply Yellowfin Tuna In Whole Round, Gutted & Gilled (G&G), Loin, Steak, And Fillet Forms. Custom Cuts Are Available Based On Buyer Requirements.',
        },
        {
          label: 'Frozen Tuna',
          question: 'What is the storage temperature for frozen Tuna?',
        },
        {
          label: 'Certification',
          question: 'Is your Tuna processed in HACCP-certified facilities?',
        },
      ],
    },
    {
      title: 'Sardine Fish',
      rows: [
        {
          label: 'Sardine Export',
          question: 'Do you supply sardine for bulk international markets?',
          answer:
            'We supply export-grade sardine in chilled and frozen formats with careful sorting, packing, and buyer-specific sizing.',
        },
        {
          label: 'Frozen Sardine',
          question: 'What packing options are available for sardine shipments?',
        },
        {
          label: 'Certification',
          question: 'Are sardines processed under food-safety standards?',
        },
      ],
    },
    {
      title: 'Grouper Fish',
      rows: [
        {
          label: 'Grouper Export',
          question: 'Which grouper product forms are available?',
          answer:
            'Whole, gutted, cleaned, and frozen grouper options are available according to export market needs.',
        },
        {
          label: 'Frozen Grouper',
          question: 'How is frozen grouper handled before shipping?',
        },
        {
          label: 'Certification',
          question: 'Can documentation be provided with grouper shipments?',
        },
      ],
    },
    {
      title: 'Salmon Fish',
      rows: [
        {
          label: 'Salmon Export',
          question: 'What salmon grades are available for buyers?',
          answer:
            'We support buyer-specific salmon sourcing with quality checks, cold-chain control, and export-ready documentation.',
        },
        {
          label: 'Frozen Salmon',
          question: 'Can salmon be shipped in frozen packs?',
        },
        {
          label: 'Certification',
          question: 'Is salmon sourcing traceable?',
        },
      ],
    },
    {
      title: 'Mackerel Fish',
      rows: [
        {
          label: 'Mackerel Export',
          question: 'Do you export mackerel in bulk volumes?',
          answer:
            'Bulk mackerel supply is available with consistent grading, freezing, packing, and export handling.',
        },
        {
          label: 'Frozen Mackerel',
          question: 'What is the normal frozen mackerel temperature?',
        },
        {
          label: 'Certification',
          question: 'Can mackerel shipments include quality certificates?',
        },
      ],
    },
  ],
  cephalopods: [
    {
      title: 'Squid',
      rows: [
        {
          label: 'Squid Export',
          question: 'What squid forms are available for export?',
          answer:
            'We supply whole, cleaned, tube, tentacle, and frozen squid products based on market and buyer requirements.',
        },
        {
          label: 'Frozen Squid',
          question: 'Can squid be packed as IQF or block frozen?',
        },
        {
          label: 'Certification',
          question: 'Is squid processed under export hygiene controls?',
        },
      ],
    },
    {
      title: 'Octopus',
      rows: [
        {
          label: 'Octopus Export',
          question: 'Do you supply cleaned octopus for export?',
          answer:
            'Cleaned and frozen octopus can be supplied with buyer-specific sizing and packing.',
        },
        {
          label: 'Frozen Octopus',
          question: 'What sizes are available for octopus shipments?',
        },
        {
          label: 'Certification',
          question: 'Can quality certificates be arranged?',
        },
      ],
    },
  ],
  crustaceans: [
    {
      title: 'Crab',
      rows: [
        {
          label: 'Crab Export',
          question: 'What crab products do you export?',
          answer:
            'We support export supply for whole crab, cleaned crab, and frozen crab products according to buyer demand.',
        },
        {
          label: 'Frozen Crab',
          question: 'How is frozen crab packed?',
        },
        {
          label: 'Certification',
          question: 'Are crab products checked before export?',
        },
      ],
    },
    {
      title: 'Shrimp',
      rows: [
        {
          label: 'Shrimp Export',
          question: 'Which shrimp forms are available?',
          answer:
            'Shrimp can be supplied in whole, headless, peeled, deveined, and frozen forms based on requirements.',
        },
        {
          label: 'Frozen Shrimp',
          question: 'Can shrimp be shipped IQF?',
        },
        {
          label: 'Certification',
          question: 'Can shrimp exports include documentation?',
        },
      ],
    },
  ],
  bivalve: [
    {
      title: 'Clams',
      rows: [
        {
          label: 'Clam Export',
          question: 'Do you supply clams for international buyers?',
          answer:
            'Clams can be sourced, sorted, packed, and shipped according to export specifications.',
        },
        {
          label: 'Frozen Clams',
          question: 'Can clams be frozen for shipment?',
        },
        {
          label: 'Certification',
          question: 'Are bivalve shipments inspected?',
        },
      ],
    },
    {
      title: 'Mussels',
      rows: [
        {
          label: 'Mussel Export',
          question: 'What mussel forms are available?',
          answer:
            'Mussels are available in export-ready formats depending on season, buyer requirement, and quality checks.',
        },
        {
          label: 'Frozen Mussels',
          question: 'What packing is used for mussels?',
        },
        {
          label: 'Certification',
          question: 'Can mussel shipments include food safety documents?',
        },
      ],
    },
  ],
};

export default function FaqListSection({ activeCategory }) {
  const navigate = useNavigate();
  const sections = faqContent[activeCategory] || faqContent.fish;

  return (
    <div className="px-[43px] pt-[37px]">
      {sections.map((section) => (
        <section key={section.title} className="mb-[47px]">
          <div className="flex h-[25px] w-[112px] items-center justify-center rounded-full border border-[#202833]">
            <span className="whitespace-nowrap text-[9px] font-medium uppercase leading-[12px] tracking-[1.2px] text-[#202833]">
              Product FAQ
            </span>
          </div>

          <div className="mt-[22px] flex items-center justify-between">
            <h2 className="text-[34px] font-normal leading-[40px] text-[#2b2b2b]">
              {section.title}
            </h2>
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="flex h-[42px] w-[99px] items-center justify-center gap-[7px] rounded-full bg-[#0161FE] text-[12px] font-semibold text-white"
            >
              View All
              <span className="text-[18px] leading-none">&#8594;</span>
            </button>
          </div>

          <div className="mt-[24px] space-y-[11px]">
            {section.rows.map((row, index) => (
              <div key={row.label}>
                <div
                  className={`grid h-[42px] grid-cols-[1fr_1.05fr] items-center rounded-[16px] px-[20px] ${
                    index === 0 ? 'bg-[#0161FE] text-white' : 'bg-[#F6F7F9] text-[#111111]'
                  }`}
                >
                  <p className="text-[17px] font-normal leading-[22px]">{row.label}</p>
                  <p
                    className={`text-[11px] font-normal leading-[14px] ${
                      index === 0 ? 'text-white' : 'text-[#8a8a8a]'
                    }`}
                  >
                    {row.question}
                  </p>
                </div>
                {row.answer ? (
                  <div className="min-h-[61px] rounded-b-[16px] bg-[#F6F7F9] px-[20px] py-[15px] text-[12px] font-normal leading-[17px] text-[#8a8a8a]">
                    {row.answer}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
