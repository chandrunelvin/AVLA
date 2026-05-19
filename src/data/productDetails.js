function createFaqs(name, exportLabel = `${name} Export`, frozenLabel = `Frozen ${name}`) {
  return [
    {
      label: exportLabel,
      question: `What ${name} formats do you offer for export?`,
      answer: `${name} is supplied in buyer-ready export formats with careful grading, hygienic handling, and reliable packing based on market requirements.`,
    },
    {
      label: frozenLabel,
      question: `How is frozen ${name} handled for shipment?`,
      answer: `Frozen ${name} is packed under dependable cold-chain conditions to preserve freshness, texture, and export quality throughout transit.`,
    },
    {
      label: 'Certification',
      question: `Is your ${name} processed under export quality and hygiene standards?`,
      answer: `Yes, our ${name} is processed under strict hygiene, quality inspection, and export-ready handling standards.`,
    },
  ];
}

function createProduct({
  name,
  slug,
  category,
  image,
  projectImage,
  scriptName,
  summary,
  faqs,
}) {
  return {
    name,
    displayName: name,
    scriptName: scriptName || name,
    slug,
    category,
    image,
    projectImage,
    summary,
    faqs: faqs || createFaqs(name),
  };
}

const fishImageSet = [
  '/assets/images/products/product-tuna-fish.png',
  '/assets/images/products/product-Sardine-fish.png',
  '/assets/images/products/product-Grouper-fish.png',
  '/assets/images/products/Mackerel-product-image.png',
  '/assets/images/products/Anchovy-product-image.png',
];

export const fishProducts = [
  createProduct({
    name: 'Tuna',
    slug: 'tuna',
    category: 'fish',
    image: '/assets/images/products/product-tuna-fish.png',
    projectImage: '/assets/images/products/project-container-tuna.webp',
    scriptName: 'Tuna',
    summary:
      'Premium grade Tuna processed under strict hygiene standards and supplied worldwide with guaranteed freshness.',
    faqs: [
      {
        label: 'Tuna Export',
        question: 'What forms of Tuna do you offer for export?',
        answer:
          'We supply Tuna in whole round, gutted and gilled (G&G), loin, steak, and fillet forms based on buyer requirements.',
      },
      {
        label: 'Frozen Tuna',
        question: 'What is the storage temperature for frozen Tuna?',
        answer:
          'Frozen Tuna is stored and shipped under controlled cold-chain conditions to preserve freshness, texture, and quality.',
      },
      {
        label: 'Certification',
        question: 'Is your Tuna processed in export-certified facilities?',
        answer:
          'Yes, our Tuna is processed with strict hygiene controls and export-ready quality checks.',
      },
    ],
  }),
  createProduct({
    name: 'Leatherjacket',
    slug: 'leatherjacket',
    category: 'fish',
    image: fishImageSet[1],
    summary:
      'Export-ready Leatherjacket supplied with dependable quality control, hygienic handling, and market-specific packing.',
  }),
  createProduct({
    name: 'Ribbonfish',
    slug: 'ribbonfish',
    category: 'fish',
    image: fishImageSet[2],
    summary:
      'Ribbonfish prepared for international seafood buyers with clean processing, grading, and reliable frozen logistics.',
  }),
  createProduct({
    name: 'Mackerel',
    slug: 'mackerel',
    category: 'fish',
    image: '/assets/images/products/Mackerel-product-image.png',
    projectImage: '/assets/images/products/project-container-mak5.webp',
    summary:
      'Export-grade Mackerel handled through hygienic processing and dependable frozen logistics for global markets.',
  }),
  createProduct({
    name: 'Mahi Mahi',
    slug: 'mahi-mahi',
    category: 'fish',
    image: fishImageSet[0],
    summary:
      'Premium Mahi Mahi sourced and packed for export with freshness-focused handling and buyer-ready specifications.',
  }),
  createProduct({
    name: 'Grouper',
    slug: 'grouper',
    category: 'fish',
    image: '/assets/images/products/product-Grouper-fish.png',
    projectImage: '/assets/images/products/project-container-d3.webp',
    summary:
      'Premium Grouper sourced, processed, and packed for international buyers who require reliable quality and freshness.',
  }),
  createProduct({
    name: 'Anchovy',
    slug: 'anchovy',
    category: 'fish',
    image: '/assets/images/products/Anchovy-product-image.png',
    summary:
      'Bulk Anchovy supply for international seafood buyers, prepared with careful sorting, packing, and freshness control.',
  }),
  createProduct({
    name: 'Sardine',
    slug: 'sardine',
    category: 'fish',
    image: '/assets/images/products/product-Sardine-fish.png',
    projectImage: '/assets/images/products/project-container-s2.webp',
    summary:
      'Fresh and frozen Sardine prepared for bulk seafood export with consistent grading, packing, and cold-chain handling.',
  }),
];

export const otherProducts = [
  createProduct({
    name: 'Brown Shrimp',
    slug: 'brown-shrimp',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-shrimp.svg',
    scriptName: 'Brown Shrimp',
    summary:
      'Brown Shrimp supplied for export with careful grading, hygienic processing, and reliable cold-chain coordination.',
  }),
  createProduct({
    name: 'Karikadi',
    slug: 'karikadi',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-shrimp.svg',
    summary:
      'Karikadi prepared for seafood export with strong handling standards, export packing, and consistent product quality.',
  }),
  createProduct({
    name: 'Poovalan',
    slug: 'poovalan',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-shrimp.svg',
    summary:
      'Poovalan export supply managed through careful sorting, processing, and freshness-controlled shipment.',
  }),
  createProduct({
    name: 'Deep Sea Shrimp',
    slug: 'deep-sea-shrimp',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-shrimp.svg',
    summary:
      'Deep Sea Shrimp handled for export with quality inspection, hygienic packing, and buyer-ready sizing.',
  }),
  createProduct({
    name: 'Flower Shrimp',
    slug: 'flower-shrimp',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-shrimp.svg',
    summary:
      'Flower Shrimp supplied in export-ready packs with dependable freezing, grading, and documentation support.',
  }),
  createProduct({
    name: 'Blue Swimming Crab',
    slug: 'blue-swimming-crab',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-crab.svg',
    summary:
      'Blue Swimming Crab processed for global seafood buyers with export-grade handling and reliable logistics.',
  }),
  createProduct({
    name: 'Threespot Crab',
    slug: 'threespot-crab',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-crab.svg',
    summary:
      'Threespot Crab prepared for export with clean processing, quality checks, and market-specific packing.',
  }),
  createProduct({
    name: 'Crucifix Crab',
    slug: 'crucifix-crab',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-crab.svg',
    summary:
      'Crucifix Crab export supply supported by hygienic handling, grading, and dependable shipment planning.',
  }),
  createProduct({
    name: 'Deep Sea Lobster',
    slug: 'deep-sea-lobster',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-crab.svg',
    summary:
      'Deep Sea Lobster packed for export with careful quality monitoring, temperature control, and buyer-ready presentation.',
  }),
  createProduct({
    name: 'Spiny Lobster',
    slug: 'spiny-lobster',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-crab.svg',
    summary:
      'Spiny Lobster supplied for premium export markets with strict hygiene, grading, and cold-chain handling.',
  }),
  createProduct({
    name: 'Sand Lobster',
    slug: 'sand-lobster',
    category: 'crustaceans',
    image: '/assets/images/blog/blog-crab.svg',
    summary:
      'Sand Lobster managed for export through careful packing, freshness protection, and consistent quality checks.',
  }),
  createProduct({
    name: 'Biagai',
    slug: 'biagai',
    category: 'bivalve',
    image: '/assets/images/blog/blog-clam.svg',
    summary:
      'Biagai products processed for export with safe handling, clean packing, and dependable supply coordination.',
  }),
  createProduct({
    name: 'Yellow Clam',
    slug: 'yellow-clam',
    category: 'bivalve',
    image: '/assets/images/blog/blog-clam.svg',
    summary:
      'Yellow Clam export supply supported by careful sorting, hygiene-led processing, and freshness-focused shipment.',
  }),
  createProduct({
    name: 'Green Mussels',
    slug: 'green-mussels',
    category: 'bivalve',
    image: '/assets/images/blog/blog-mussel.svg',
    summary:
      'Green Mussels prepared for export with quality inspection, safe packing, and reliable cold-chain handling.',
  }),
  createProduct({
    name: 'Loligo Squid',
    slug: 'loligo-squid',
    category: 'cephalopods',
    image: '/assets/images/blog/blog-cephalopod.svg',
    summary:
      'Loligo Squid supplied for export with controlled processing, export packing, and buyer-specific preparation.',
  }),
  createProduct({
    name: 'Semi Needle Squid',
    slug: 'semi-needle-squid',
    category: 'cephalopods',
    image: '/assets/images/blog/blog-cephalopod.svg',
    summary:
      'Semi Needle Squid packed for export with dependable hygiene practices, grading, and shipment coordination.',
  }),
  createProduct({
    name: 'Needle Squid',
    slug: 'needle-squid',
    category: 'cephalopods',
    image: '/assets/images/blog/blog-cephalopod.svg',
    summary:
      'Needle Squid prepared for global seafood buyers with clean handling, freezing support, and export documentation.',
  }),
  createProduct({
    name: 'Cuttlefish',
    slug: 'cuttlefish',
    category: 'cephalopods',
    image: '/assets/images/blog/blog-cephalopod.svg',
    summary:
      'Cuttlefish exported with careful processing, sizing, and buyer-ready packing for international markets.',
  }),
  createProduct({
    name: 'Octopus',
    slug: 'octopus',
    category: 'cephalopods',
    image: '/assets/images/blog/blog-octopus.svg',
    summary:
      'Export-quality Octopus prepared with strict hygiene standards, controlled freezing, and dependable packaging.',
    faqs: [
      {
        label: 'Octopus Export',
        question: 'Do you supply cleaned Octopus for export?',
        answer:
          'Cleaned and frozen Octopus can be supplied with buyer-specific sizing, grading, and packing.',
      },
      {
        label: 'Frozen Octopus',
        question: 'What sizes are available for Octopus shipments?',
        answer:
          'Octopus is available in multiple size grades as per international buyer specifications.',
      },
      {
        label: 'Certification',
        question: 'Can quality certificates be arranged for Octopus shipments?',
        answer:
          'Yes, quality and hygiene certificates are provided with every Octopus shipment.',
      },
    ],
  }),
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
