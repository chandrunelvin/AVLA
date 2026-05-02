export const blogDetails = [
  {
    title: 'Tuna Fish Exporter in India – Fresh & Frozen Tuna Supply Worldwide',
    slug: 'tuna-fish-exporter-india',
    category: 'Tuna Fish',
    image: '/assets/images/products/product-tuna-fish.png',
    company: 'Avla Nettos Exports',
    readTime: '3 Min',
    releaseDate: 'January 1, 2026',
    speciesFamily: 'Fish',
    intro:
      'Premium Quality Tuna Fish Export from India',
    sideText:
      'Discover how our fresh and frozen tuna meets international export standards, ensuring superior quality, sustainable sourcing, and reliable global delivery.',
  },
  {
    title: 'Fresh & Frozen Sardine Fish Exporter – Bulk Supply from India',
    slug: 'sardine-fish-exporter-india',
    category: 'Sardine',
    image: '/assets/images/products/product-Sardine-fish.png',
    company: 'Avla Nettos Exports',
    readTime: '3 Min',
    releaseDate: 'January 1, 2026',
    speciesFamily: 'Fish',
    intro: 'Fresh & Frozen Sardine Fish Export from India',
    sideText:
      'Learn how our sardine supply is processed, packed, and exported for buyers who need dependable seafood quality.',
  },
  {
    title: 'Premium Grouper Fish Exporter – Fresh & Frozen Supply',
    slug: 'grouper-fish-exporter',
    category: 'Grouper',
    image: '/assets/images/products/product-Grouper-fish.png',
    company: 'Avla Nettos Exports',
    readTime: '3 Min',
    releaseDate: 'January 1, 2026',
    speciesFamily: 'Fish',
    intro: 'Premium Grouper Fish Export from India',
    sideText:
      'Explore our export approach for grouper products, from sourcing and grading to international packing standards.',
  },
  {
    title: 'Fresh & Frozen Salmon Fish Export – Premium Seafood Supplier',
    slug: 'salmon-fish-export',
    category: 'Salmon',
    image: '/assets/images/products/salmon.svg',
    company: 'Avla Nettos Exports',
    readTime: '3 Min',
    releaseDate: 'January 1, 2026',
    speciesFamily: 'Fish',
    intro: 'Fresh & Frozen Salmon Fish Export',
    sideText:
      'A practical look at premium salmon supply, frozen logistics, and buyer-ready seafood handling.',
  },
  {
    title: 'Indian Mackerel Exporter – Fresh & Frozen Seafood Supplier',
    slug: 'indian-mackerel-exporter',
    category: 'Mackerel',
    image: '/assets/images/products/Mackerel-product-image.png',
    company: 'Avla Nettos Exports',
    readTime: '3 Min',
    releaseDate: 'January 1, 2026',
    speciesFamily: 'Fish',
    intro: 'Indian Mackerel Export from India',
    sideText:
      'See how mackerel is handled for international buyers through reliable cold-chain and export packaging.',
  },
  {
    title: 'Indian Anchovy Fish – Bulk Supply for International Markets',
    slug: 'indian-anchovy-fish-export',
    category: 'Anchovy',
    image: '/assets/images/products/Anchovy-product-image.png',
    company: 'Avla Nettos Exports',
    readTime: '3 Min',
    releaseDate: 'January 1, 2026',
    speciesFamily: 'Fish',
    intro: 'Indian Anchovy Fish Bulk Export',
    sideText:
      'Understand our anchovy export process for international seafood markets and bulk supply requirements.',
  },
  {
    title: 'Red Snapper Fish Exporter – Premium Quality Seafood',
    slug: 'red-snapper-fish-exporter',
    category: 'Red Snapper',
    image: '/assets/images/products/Red-Snapper-product-image.png',
    company: 'Avla Nettos Exports',
    readTime: '3 Min',
    releaseDate: 'January 1, 2026',
    speciesFamily: 'Fish',
    intro: 'Red Snapper Fish Exporter',
    sideText:
      'A focused guide to red snapper quality, processing, and export-ready seafood supply.',
  },
  {
    title: 'Premium Quality Herring Fish – Export Standards & Packaging',
    slug: 'herring-fish-export-standards',
    category: 'Herring',
    image: '/assets/images/products/Herring-product-image.png',
    company: 'Avla Nettos Exports',
    readTime: '3 Min',
    releaseDate: 'January 1, 2026',
    speciesFamily: 'Fish',
    intro: 'Premium Quality Herring Fish Export',
    sideText:
      'Review how herring products are packed, stored, and prepared for consistent export quality.',
  },
];

export function findBlogBySlug(slug) {
  return blogDetails.find((blog) => blog.slug === slug);
}
