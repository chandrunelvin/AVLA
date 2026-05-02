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
  },
  {
    label: 'Certification',
    question: 'Is your Tuna processed in HACCP-certified facilities?',
  },
];

const faqContent = {
  fish: [
    {
      title: 'Tuna Fish',
      rows: fishRows,
    },
    {
      title: 'Sardine Fish',
      rows: fishRows,
    },
    {
      title: 'Grouper Fish',
      rows: fishRows,
    },
    {
      title: 'Salmon Fish',
      rows: fishRows,
    },
    {
      title: 'Mackerel Fish',
      rows: fishRows,
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
    <div className="px-[43px]  pt-[24px]">
      {sections.map((section) => (
        <section key={section.title} className="mb-[43px]">
          <div className="flex h-[38px] w-[160px] items-center justify-center rounded-full border border-[#202833]">
            <span className="whitespace-nowrap text-[14px] font-medium uppercase leading-[12px] tracking-[1.2px] text-[#202833]">
              Product FAQ
            </span>
          </div>

          <div className="mt-[17px] flex items-center justify-between">
            <h2 className="text-[42px] font-normal leading-[40px] text-[#2b2b2b]">
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

          <div className="mt-[22px] space-y-[11px]">
            {section.rows.map((row, index) => (
              <div key={row.label}>
                <div
                  className={`grid h-[69px] grid-cols-[1fr_1.05fr] items-center rounded-[27px] px-[13px] py-[6px] ${
                    index === 0 ? 'bg-[#0161FE] text-white' : 'bg-[#F6F7F9] text-[#000000]'
                  }`}
                >
                  <p className="text-[27.2px] font-normal leading-[22px] p-[10px]">{row.label}</p>
                  <p
                    className={`text-[18px] font-[400] leading-[14px] p-[10px] ${
                      index === 0 ? 'text-white' : 'text-[#6D6D6ECC]'
                    }`}
                  >
                    {row.question}
                  </p>
                </div>
                {row.answer ? (
                  <div className="min-h-[100%] rounded-[23.69px] bg-[#F6F7F9] px-[22px] py-[17px] text-[20px] font-normal leading-[28px] text-[#6D6D6ECC]">
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
