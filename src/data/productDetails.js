const certificationFaq = (name) => ({
  label: 'Certification',
  question: `Is your ${name} processed under export quality and hygiene standards?`,
  answer: `Yes, our ${name} is handled under strict hygiene, grading, packing, and export-ready quality controls.`,
});

const fishFaqsBySlug = {
  'tuna-fish': [
    {
      label: 'Tuna Export',
      question: 'What forms of Yellowfin Tuna do you offer for export?',
      answer:
        'We supply Yellowfin Tuna in whole round, gutted and gilled (G&G), loin, steak, and fillet forms. Custom cuts are available based on buyer requirements.',
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
  ],
  sardine: [
    {
      label: 'Sardine Export',
      question: 'What sardine products do you supply for export?',
      answer:
        'We supply whole round, cleaned, and frozen Sardine products in export-ready packing based on buyer requirements.',
    },
    {
      label: 'Frozen Sardine',
      question: 'How is frozen Sardine handled during shipment?',
      answer:
        'Frozen Sardine is packed under cold-chain conditions to maintain freshness, texture, and consistent product quality.',
    },
    certificationFaq('Sardine'),
  ],
  grouper: [
    {
      label: 'Grouper Export',
      question: 'Which Grouper cuts are available for international buyers?',
      answer:
        'Grouper can be supplied as whole fish, gutted fish, fillets, and buyer-specific cuts for export programs.',
    },
    {
      label: 'Frozen Grouper',
      question: 'Can Grouper be supplied in frozen export packs?',
      answer:
        'Yes, Grouper is available in frozen export-grade packs with sizing, glazing, and packing based on buyer needs.',
    },
    certificationFaq('Grouper'),
  ],
  mackerel: [
    {
      label: 'Mackerel Export',
      question: 'What Mackerel formats do you export?',
      answer:
        'We export whole round, cleaned, and frozen Mackerel in bulk quantities for international seafood buyers.',
    },
    {
      label: 'Frozen Mackerel',
      question: 'How do you preserve Mackerel quality for export shipments?',
      answer:
        'Mackerel is processed quickly and maintained in a dependable cold chain to protect flavor, firmness, and freshness.',
    },
    certificationFaq('Mackerel'),
  ],
  anchovy: [
    {
      label: 'Anchovy Export',
      question: 'Do you export Anchovy for bulk international orders?',
      answer:
        'Yes, Anchovy is supplied in export-ready lots with careful grading, sorting, and packaging for wholesale buyers.',
    },
    {
      label: 'Frozen Anchovy',
      question: 'Can Anchovy be packed for frozen shipment?',
      answer:
        'Anchovy can be frozen and packed in hygienic export cartons based on destination market requirements.',
    },
    certificationFaq('Anchovy'),
  ],
  'red-snapper': [
    {
      label: 'Snapper Export',
      question: 'What Red Snapper products are available for export?',
      answer:
        'Red Snapper is available as whole fish, cleaned fish, and fillet options according to buyer specifications.',
    },
    {
      label: 'Frozen Snapper',
      question: 'Is Red Snapper suitable for frozen international shipment?',
      answer:
        'Yes, Red Snapper is shipped in frozen export-grade packs that protect product quality throughout transit.',
    },
    certificationFaq('Red Snapper'),
  ],
  'king-fish': [
    {
      label: 'King Fish Export',
      question: 'Which King Fish forms can you supply for export?',
      answer:
        'King Fish is offered in whole, cleaned, steak, and fillet forms depending on buyer and market requirements.',
    },
    {
      label: 'Frozen King Fish',
      question: 'How is King Fish packed for overseas delivery?',
      answer:
        'King Fish is packed in export cartons under controlled freezing and cold-chain logistics for safe delivery.',
    },
    certificationFaq('King Fish'),
  ],
  pomfret: [
    {
      label: 'Pomfret Export',
      question: 'Do you supply Pomfret for premium seafood markets?',
      answer:
        'Yes, Pomfret is sourced, graded, and packed for premium wholesale and retail export programs.',
    },
    {
      label: 'Frozen Pomfret',
      question: 'Can Pomfret be shipped as a frozen product?',
      answer:
        'Pomfret is available in frozen export packs with dependable cold-chain handling to preserve freshness.',
    },
    certificationFaq('Pomfret'),
  ],
};

const otherFaqsBySlug = {
  squid: [
    {
      label: 'Squid Export',
      question: 'What squid forms are available for export?',
      answer:
        'We supply whole, cleaned, tube, tentacle, and frozen squid products based on market and buyer requirements.',
    },
    {
      label: 'Frozen Squid',
      question: 'Can squid be packed as IQF or block frozen?',
      answer:
        'Yes, squid can be packed as IQF or block frozen depending on buyer requirements.',
    },
    {
      label: 'Certification',
      question: 'Is squid processed under export hygiene controls?',
      answer:
        'All squid products are processed under certified hygiene and export quality controls.',
    },
  ],
  octopus: [
    {
      label: 'Octopus Export',
      question: 'Do you supply cleaned octopus for export?',
      answer:
        'Cleaned and frozen octopus can be supplied with buyer-specific sizing and packing.',
    },
    {
      label: 'Frozen Octopus',
      question: 'What sizes are available for octopus shipments?',
      answer:
        'Octopus is available in multiple size grades as per international buyer specifications.',
    },
    {
      label: 'Certification',
      question: 'Can quality certificates be arranged?',
      answer:
        'Yes, quality and hygiene certificates are provided with every shipment.',
    },
  ],
  crab: [
    {
      label: 'Crab Export',
      question: 'What crab products do you export?',
      answer:
        'We support export supply for whole crab, cleaned crab, and frozen crab products according to buyer demand.',
    },
    {
      label: 'Frozen Crab',
      question: 'How is frozen crab packed?',
      answer:
        'Frozen crab is packed in hygienic export-grade cartons under cold-chain conditions.',
    },
    {
      label: 'Certification',
      question: 'Are crab products checked before export?',
      answer:
        'Yes, all crab products undergo quality inspection before export.',
    },
  ],
  shrimp: [
    {
      label: 'Shrimp Export',
      question: 'Which shrimp forms are available?',
      answer:
        'Shrimp can be supplied in whole, headless, peeled, deveined, and frozen forms based on requirements.',
    },
    {
      label: 'Frozen Shrimp',
      question: 'Can shrimp be shipped IQF?',
      answer:
        'Yes, IQF shrimp is available for bulk export orders.',
    },
    {
      label: 'Certification',
      question: 'Can shrimp exports include documentation?',
      answer:
        'All export documentation including health certificates is provided.',
    },
  ],
  clam: [
    {
      label: 'Clam Export',
      question: 'Do you supply clams for international buyers?',
      answer:
        'Clams can be sourced, sorted, packed, and shipped according to export specifications.',
    },
    {
      label: 'Frozen Clams',
      question: 'Can clams be frozen for shipment?',
      answer:
        'Yes, frozen clams are available with proper cold-chain handling.',
    },
    {
      label: 'Certification',
      question: 'Are bivalve shipments inspected?',
      answer:
        'All bivalve products are inspected and certified before shipment.',
    },
  ],
  mussel: [
    {
      label: 'Mussel Export',
      question: 'What mussel forms are available?',
      answer:
        'Mussels are available in export-ready formats depending on season, buyer requirement, and quality checks.',
    },
    {
      label: 'Frozen Mussels',
      question: 'What packing is used for mussels?',
      answer:
        'Mussels are packed in hygiene-certified export cartons under cold-chain conditions.',
    },
    {
      label: 'Certification',
      question: 'Can mussel shipments include food safety documents?',
      answer:
        'Yes, food safety and quality documents are included with all mussel exports.',
    },
  ],
};

export const fishProducts = [
  {
    name: 'Tuna Fish',
    displayName: 'Tuna Fish',
    scriptName: 'Tuna',
    slug: 'tuna-fish',
    category: 'fish',
    image: '/assets/images/products/product-tuna-fish.png',
    projectImage: '/assets/images/products/project-container-tuna.webp',
    summary:
      'Premium grade Yellowfin Tuna processed under strict hygiene standards and supplied worldwide with guaranteed freshness.',
    faqs: fishFaqsBySlug['tuna-fish'],
  },
  {
    name: 'Sardine',
    displayName: 'Sardine',
    scriptName: 'Sardine',
    slug: 'sardine',
    category: 'fish',
    image: '/assets/images/products/product-Sardine-fish.png',
    projectImage: '/assets/images/products/project-container-s2.webp',
    summary:
      'Fresh and frozen Sardine prepared for bulk seafood export with consistent grading, packing, and cold-chain handling.',
    faqs: fishFaqsBySlug.sardine,
  },
  {
    name: 'Grouper',
    displayName: 'Grouper',
    scriptName: 'Grouper',
    slug: 'grouper',
    category: 'fish',
    image: '/assets/images/products/product-Grouper-fish.png',
    projectImage: '/assets/images/products/project-container-d3.webp',
    summary:
      'Premium Grouper sourced, processed, and packed for international buyers who require reliable quality and freshness.',
    faqs: fishFaqsBySlug.grouper,
  },
  {
    name: 'Mackerel',
    displayName: 'Mackerel',
    scriptName: 'Mackerel',
    slug: 'mackerel',
    category: 'fish',
    image: '/assets/images/products/Mackerel-product-image.png',
    projectImage: '/assets/images/products/project-container-mak5.webp',
    summary:
      'Export-grade Mackerel handled through hygienic processing and dependable frozen logistics for global markets.',
    faqs: fishFaqsBySlug.mackerel,
  },
  {
    name: 'Anchovy',
    displayName: 'Anchovy',
    scriptName: 'Anchovy',
    slug: 'anchovy',
    category: 'fish',
    image: '/assets/images/products/Anchovy-product-image.png',
    summary:
      'Bulk Anchovy supply for international seafood buyers, prepared with careful sorting, packing, and freshness control.',
    faqs: fishFaqsBySlug.anchovy,
  },
  {
    name: 'Red Snapper',
    displayName: 'Red Snapper',
    scriptName: 'Snapper',
    slug: 'red-snapper',
    category: 'fish',
    image: '/assets/images/products/Red-Snapper-product-image.png',
    projectImage: '/assets/images/products/project-container-salmon4.webp',
    summary:
      'High-quality Red Snapper processed for export with clean handling, strong grading standards, and dependable delivery.',
    faqs: fishFaqsBySlug['red-snapper'],
  },
  {
    name: 'King Fish',
    displayName: 'King Fish',
    scriptName: 'King Fish',
    slug: 'king-fish',
    category: 'fish',
    image: '/assets/images/products/Anchovy-product-image.png',
    summary:
      'Premium King Fish sourced from Kerala coastal waters, processed under hygiene standards and exported for global markets.',
    faqs: fishFaqsBySlug['king-fish'],
  },
  {
    name: 'Pomfret',
    displayName: 'Pomfret',
    scriptName: 'Pomfret',
    slug: 'pomfret',
    category: 'fish',
    image: '/assets/images/products/product-Sardine-fish.png',
    summary:
      'Export-grade Pomfret prepared with quality grading, hygienic processing, and reliable cold-chain delivery worldwide.',
    faqs: fishFaqsBySlug.pomfret,
  },
];

export const otherProducts = [
  {
    name: 'Squid',
    displayName: 'Squid',
    scriptName: 'Squid',
    slug: 'squid',
    category: 'cephalopods',
    image: '/assets/images/blog/blog-cephalopod.svg',
    summary:
      'Cleaned and frozen Squid supplied for export with careful processing, grading, and buyer-ready packing.',
    faqs: otherFaqsBySlug.squid,
  },
  {
    name: 'Octopus',
    displayName: 'Octopus',
    scriptName: 'Octopus',
    slug: 'octopus',
    category: 'cephalopods',
    image: '/assets/images/blog/blog-octopus.svg',
    summary:
      'Export-quality Octopus prepared with strict hygiene standards, controlled freezing, and dependable packaging.',
    faqs: otherFaqsBySlug.octopus,
  },
  {
    name: 'Crab',
    displayName: 'Crab',
    scriptName: 'Crab',
    slug: 'crab',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-crab.svg',
    summary:
      'Fresh and frozen Crab processed for global seafood buyers with quality handling and export-ready packing.',
    faqs: otherFaqsBySlug.crab,
  },
  {
    name: 'Shrimp',
    displayName: 'Shrimp',
    scriptName: 'Shrimp',
    slug: 'shrimp',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-shrimp.svg',
    summary:
      'Frozen Shrimp supply handled through a reliable seafood chain for international markets and bulk buyers.',
    faqs: otherFaqsBySlug.shrimp,
  },
  {
    name: 'Clam',
    displayName: 'Clam',
    scriptName: 'Clam',
    slug: 'clam',
    category: 'bivalve',
    image: '/assets/images/blog/blog-clam.svg',
    summary:
      'Clam products processed with safe handling, consistent packing, and freshness-focused export standards.',
    faqs: otherFaqsBySlug.clam,
  },
  {
    name: 'Mussel',
    displayName: 'Mussel',
    scriptName: 'Mussel',
    slug: 'mussel',
    category: 'bivalve',
    image: '/assets/images/blog/blog-mussel.svg',
    summary:
      'Quality Mussel products prepared for export with careful processing, packing, and delivery coordination.',
    faqs: otherFaqsBySlug.mussel,
  },
];

export const productDetails = [...fishProducts, ...otherProducts];

export function findProductBySlug(slug) {
  return productDetails.find((product) => product.slug === slug);
}

export function getProductsByCategory(category) {
  if (!category) {
    return fishProducts;
  }

  return productDetails.filter((product) => product.category === category);
}
