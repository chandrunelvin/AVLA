export const fishProducts = [
  {
    name: 'Tuna Fish',
    displayName: 'Tuna Fish',
    scriptName: 'Tuna whole',
    slug: 'tuna-fish',
    image: '/assets/images/products/product-tuna-fish.png',
    summary:
      'Premium grade Yellowfin Tuna processed under strict hygiene standards and supplied worldwide with guaranteed freshness.',
    faqs: [
      {
        question: 'What forms of Yellowfin Tuna do you offer for export?',
        answer:
          'We supply Yellowfin Tuna in whole round, gutted and gilled (G&G), loin, steak, and fillet forms. Custom cuts are available based on buyer requirements.',
      },
      {
        question: 'What is the storage temperature for frozen Tuna?',
        answer:
          'Frozen Tuna is stored and shipped under controlled cold-chain conditions to preserve freshness, texture, and quality.',
      },
      {
        question: 'Is your Tuna processed in HACCP-certified facilities?',
        answer:
          'Yes, our Tuna is processed with strict hygiene controls and export-ready quality checks.',
      },
    ],
  },
  {
    name: 'Sardine',
    displayName: 'Sardine',
    scriptName: 'Sardine',
    slug: 'sardine',
    image: '/assets/images/products/product-Sardine-fish.png',
    summary:
      'Fresh and frozen Sardine prepared for bulk seafood export with consistent grading, packing, and cold-chain handling.',
  },
  {
    name: 'Grouper',
    displayName: 'Grouper',
    scriptName: 'Grouper',
    slug: 'grouper',
    image: '/assets/images/products/product-Grouper-fish.png',
    summary:
      'Premium Grouper sourced, processed, and packed for international buyers who require reliable quality and freshness.',
  },
  {
    name: 'Mackerel',
    displayName: 'Mackerel',
    scriptName: 'Mackerel',
    slug: 'mackerel',
    image: '/assets/images/products/Mackerel-product-image.png',
    summary:
      'Export-grade Mackerel handled through hygienic processing and dependable frozen logistics for global markets.',
  },
  {
    name: 'Anchovy',
    displayName: 'Anchovy',
    scriptName: 'Anchovy',
    slug: 'anchovy',
    image: '/assets/images/products/Anchovy-product-image.png',
    summary:
      'Bulk Anchovy supply for international seafood buyers, prepared with careful sorting, packing, and freshness control.',
  },
  {
    name: 'Red Snapper',
    displayName: 'Red Snapper',
    scriptName: 'Snapper',
    slug: 'red-snapper',
    image: '/assets/images/products/Red-Snapper-product-image.png',
    summary:
      'High-quality Red Snapper processed for export with clean handling, strong grading standards, and dependable delivery.',
  },
];

export const otherProducts = [
  {
    name: 'Squid',
    displayName: 'Squid',
    scriptName: 'Squid',
    slug: 'squid',
    image: '/assets/images/blog/blog-cephalopod.svg',
    summary:
      'Cleaned and frozen Squid supplied for export with careful processing, grading, and buyer-ready packing.',
  },
  {
    name: 'Octopus',
    displayName: 'Octopus',
    scriptName: 'Octopus',
    slug: 'octopus',
    image: '/assets/images/blog/blog-octopus.svg',
    summary:
      'Export-quality Octopus prepared with strict hygiene standards, controlled freezing, and dependable packaging.',
  },
  {
    name: 'Crab',
    displayName: 'Crab',
    scriptName: 'Crab',
    slug: 'crab',
    image: '/assets/images/blog/blog-crab.svg',
    summary:
      'Fresh and frozen Crab processed for global seafood buyers with quality handling and export-ready packing.',
  },
  {
    name: 'Shrimp',
    displayName: 'Shrimp',
    scriptName: 'Shrimp',
    slug: 'shrimp',
    image: '/assets/images/blog/blog-shrimp.svg',
    summary:
      'Frozen Shrimp supply handled through a reliable seafood chain for international markets and bulk buyers.',
  },
  {
    name: 'Clam',
    displayName: 'Clam',
    scriptName: 'Clam',
    slug: 'clam',
    image: '/assets/images/blog/blog-clam.svg',
    summary:
      'Clam products processed with safe handling, consistent packing, and freshness-focused export standards.',
  },
  {
    name: 'Mussel',
    displayName: 'Mussel',
    scriptName: 'Mussel',
    slug: 'mussel',
    image: '/assets/images/blog/blog-mussel.svg',
    summary:
      'Quality Mussel products prepared for export with careful processing, packing, and delivery coordination.',
  },
];

export const productDetails = [...fishProducts, ...otherProducts];

export function findProductBySlug(slug) {
  return productDetails.find((product) => product.slug === slug);
}
