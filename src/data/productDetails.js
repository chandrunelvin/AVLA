import {
  baigaiFaqs,
  bivalveFaqs,
  crabFaqs,
  createFaqs,
  lobsterFaqs,
  needleSquidFaqs,
  shrimpFaqs,
} from './productFaqs';
import {
  baigaiGalleryImages,
  crabGalleryImages,
  cuttlefishGalleryImages,
  grouperGalleryImages,
  leatherjacketGalleryImages,
  loligoSquidGalleryImages,
  mackerelGalleryImages,
  mahiGalleryImages,
  needleSquidGalleryImages,
  octopusGalleryImages,
  sandLobsterGalleryImages,
  semiNeedleSquidGalleryImages,
  shrimpGalleryImages,
  thondiSquidGalleryImages,
  tunaGalleryImages,
} from './productDetailAssets';

function createProduct({
  name,
  slug,
  category,
  image,
  detailImage,
  galleryImages,
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
    detailImage: detailImage || image,
    galleryImages,
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
    galleryImages: tunaGalleryImages,
    projectImage: '/assets/images/products/project-container-tuna.webp',
    scriptName: 'Tuna',
    summary:
      'Premium grade Tuna processed under strict hygiene standards and supplied worldwide with guaranteed freshness.',
    faqs: [
      {
        label: 'Tuna Cuts',
        question: 'What tuna cuts does AVLA Exports offer?',
        answer:
          'AVLA Exports supplies tuna in four primary cuts: Steak, Whole, Fillet, and Loins. Each cut is individually quick frozen (IQF) or block frozen to preserve freshness and flavour, making them suitable for a wide range of culinary applications.',
      },
      {
        label: 'Wild-Caught Tuna',
        question: 'Is the tuna wild-caught or farm-raised?',
        answer:
          "All tuna supplied by AVLA Exports is wild-caught from the pristine waters off the Kollam coast in Kerala, India, sourced directly from Sakthikulangara and Neendakara fishing harbours - two of India's most productive fishing hubs.",
      },
      {
        label: 'Minimum Order Quantity',
        question: 'What is the minimum order quantity (MOQ) for tuna products?',
        answer:
          'MOQ varies by product format and cut. Please contact our sales team at info@avlaexports.com or call +91 9446017777 for current pricing sheets and container-load requirements tailored to your region.',
      },
      {
        label: 'Certifications',
        question: 'What quality grades and certifications apply to tuna exports?',
        answer:
          'Our tuna is processed under strict EU-compliant food safety regulations, with HACCP, EIA, and relevant export certifications ensuring quality at every stage - from catch to cold chain.',
      },
      {
        label: 'Tuna Loins',
        question: 'Can tuna loins be supplied skinless and boneless?',
        answer:
          'Yes. Tuna loins can be supplied skinless and boneless as per buyer specification. Custom trimming, glazing percentage, and packaging formats are available on request.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of frozen tuna products?',
        answer:
          'Properly stored frozen tuna has a shelf life of 18-24 months when maintained at -18°C or below. We recommend monitoring core temperature throughout the cold chain to preserve colour and texture.',
      },
      {
        label: 'Packaging',
        question: 'What packaging options are available for tuna?',
        answer:
          'Tuna is typically packed in master cartons of 10 kg, 20 kg, or customised formats including vacuum pouches, IQF flow wrap, and block-frozen slabs, depending on the cut and buyer requirement.',
      },
      {
        label: 'Steak Sizes',
        question: 'Are tuna steaks available in specific thickness or weight grading?',
        answer:
          'Yes. Tuna steaks can be supplied in customer-specified thickness (e.g., 1 cm, 1.5 cm, 2 cm) and weight bands. Please share your specification sheet and we will confirm feasibility and lead times.',
      },
      {
        label: 'Export Markets',
        question: 'What markets does AVLA Exports supply tuna to?',
        answer:
          'AVLA Exports supplies tuna to buyers across Europe, the Middle East, Southeast Asia, and Africa. Our EU-compliant processing facility meets the standards required for the most regulated global markets.',
      },
      {
        label: 'Fresh Processing',
        question: 'How is freshness maintained from the fishing harbour to the export facility?',
        answer:
          'Our processing plant is located in close proximity to Sakthikulangara and Neendakara harbours. Fish are transported in chilled conditions and processed within hours of landing, ensuring maximum freshness and minimal quality loss.',
      },
    ],
  }),
  createProduct({
    name: 'Leatherjacket',
    slug: 'leatherjacket',
    category: 'fish',
    image: '/assets/images/product-details/Leather jacket/Leather Jacket.webp',
    projectImage: '/assets/images/product-details/Leather jacket/Leather Jacket.webp',
    galleryImages: leatherjacketGalleryImages,
    summary:
      'Export-ready Leatherjacket supplied with dependable quality control, hygienic handling, and market-specific packing.',
    faqs: [
      {
        label: 'Fish Cuts',
        question: 'What cuts of Leatherjacket fish does AVLA Exports supply?',
        answer:
          'AVLA Exports offers Leatherjacket in four processed forms: Whole, Headless (HL) Skin On, Headless (HL) Skinless, and Fillet - catering to both retail and foodservice buyers worldwide.',
      },
      {
        label: 'Seafood Export',
        question: 'What is Leatherjacket fish and why is it popular in seafood export markets?',
        answer:
          'Leatherjacket (Stephanolepis spp.) is a lean, white-fleshed fish with a mild flavour. Its thick, inedible skin is removed during processing to reveal clean, boneless fillets that are popular in European and Asian markets.',
      },
      {
        label: 'Skin Options',
        question: 'What is the difference between HL Skin On and HL Skinless Leatherjacket?',
        answer:
          'Headless (HL) Skin On retains the natural skin after head removal, which protects the flesh during freezing and transport. HL Skinless is fully skinned post-heading, offering a cleaner product for retail display and direct cooking.',
      },
      {
        label: 'Boneless Fillet',
        question: 'Is Leatherjacket fillet boneless?',
        answer:
          'Yes. Our Leatherjacket fillets are carefully deboned during processing. Pin-bone checks are conducted as part of our standard quality protocol, though buyers are advised to specify their bone tolerance requirements.',
      },
      {
        label: 'Size Grades',
        question: 'What are the typical size grades for Leatherjacket products?',
        answer:
          'Leatherjacket is graded by piece weight (e.g., 100-200g, 200-400g, 400g+). Custom size grading is available based on target market specifications.',
      },
      {
        label: 'Freezing Method',
        question: 'What freezing method is used for Leatherjacket?',
        answer:
          'We use both blast freezing (-40°C) and plate freezing technologies. Blast frozen products are available as IQF, while plate freezing is used for block-frozen formats packed in 10 kg cartons.',
      },
      {
        label: 'Glaze Percentage',
        question: 'Can Leatherjacket be supplied with a specific glaze percentage?',
        answer:
          'Yes. Glaze percentages (typically 10%, 15%, or 20%) can be customised as per buyer specification. Net-weight labelling is also available for retail-ready packaging.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of frozen Leatherjacket?',
        answer:
          'Frozen Leatherjacket has a shelf life of 18 months at -18°C. We recommend maintaining unbroken cold chain integrity throughout transit and storage.',
      },
      {
        label: 'Value Added',
        question: 'Is Leatherjacket suitable for value-added processing such as battered or breaded products?',
        answer:
          'Absolutely. Its firm, white flesh makes Leatherjacket an excellent base for value-added products such as battered fillets, breaded portions, and fish fingers. We can supply pre-portioned cuts to your downstream processing specifications.',
      },
      {
        label: 'Samples',
        question: 'How do I request a sample of Leatherjacket products?',
        answer:
          'Samples are available for qualified buyers. Contact our export team at info@avlaexports.com with your company details, target market, and required specifications. Samples are dispatched via air freight with full documentation.',
      },
    ],
  }),
  createProduct({
    name: 'Ribbonfish',
    slug: 'ribbonfish',
    category: 'fish',
    image: '/assets/images/products/Ribbonfish.webp',
    detailImage: '/assets/images/products/Ribbonfish.webp',
    projectImage: '/assets/images/products/Ribbonfish.webp',
    summary:
      'Ribbonfish prepared for international seafood buyers with clean processing, grading, and reliable frozen logistics.',
    faqs: [
      {
        label: 'Frozen',
        question: 'What forms of Ribbonfish does AVLA Exports export?',
        answer:
          'AVLA Exports exports Ribbonfish in three forms: Whole, Fillet, and Loins. All forms are available frozen and can be customised to buyer-specific size grades, packaging, and glaze requirements.',
      },
      {
        label: 'Culinary Uses',
        question: 'What is Ribbonfish and what are its culinary uses?',
        answer:
          'Ribbonfish (Trichiurus spp.), also known as Hairtail or Beltfish, is a long, silver-scaled marine fish. It is widely consumed across East Asia, Southeast Asia, and the Middle East, used in grilling, steaming, and curried preparations.',
      },
      {
        label: 'Size Grades',
        question: 'What size grades are available for whole Ribbonfish?',
        answer:
          'Whole Ribbonfish is typically graded by weight or length - common grades include 100-200g, 200-300g, 300-500g, and 500g+. Custom grading is available on request.',
      },
      {
        label: 'Boneless Fillet',
        question: 'Are Ribbonfish fillets available boneless?',
        answer:
          "Ribbonfish fillets are processed to remove the central bone structure. Due to the fish's anatomy, some inter-muscular pin bones may remain; buyers should specify their acceptable bone tolerance for tailored processing.",
      },
      {
        label: 'Packaging',
        question: 'What is the typical packaging format for exported Ribbonfish?',
        answer:
          'Ribbonfish is commonly packed as IQF units or in block-frozen master cartons of 10 kg or 20 kg. Retail-ready vacuum pouches and modified atmosphere packaging (MAP) are also available.',
      },
      {
        label: 'Export Markets',
        question: 'Which markets have the highest demand for Ribbonfish?',
        answer:
          "China, Japan, South Korea, Vietnam, and Middle Eastern countries are the primary markets for Ribbonfish. AVLA's location on the Malabar Coast gives us access to high-quality Indian Ocean Ribbonfish preferred in these regions.",
      },
      {
        label: 'Certifications',
        question: 'What certifications support the export of Ribbonfish from AVLA?',
        answer:
          'AVLA Exports holds the required marine product export licences from MPEDA (Marine Products Export Development Authority) and operates under EU-approved HACCP standards, supporting export to regulated global markets.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of frozen Ribbonfish?',
        answer:
          'Frozen Ribbonfish maintains quality for up to 18 months at -18°C in continuous cold storage. Buyers are advised to check for vacuum integrity before distribution.',
      },
      {
        label: 'Custom Loins',
        question: 'Can Ribbonfish loins be supplied cut to a specific length?',
        answer:
          'Yes. Ribbonfish loins can be cut to customer-specified lengths (e.g., 15 cm, 20 cm, 25 cm segments). Please share your length and weight specification during inquiry for feasibility confirmation.',
      },
      {
        label: 'Lead Time',
        question: 'What is the lead time for a Ribbonfish order?',
        answer:
          'Lead times depend on current stock availability and order volume. For ex-stock orders, lead time is typically 7-14 days. Fresh-production orders are subject to seasonal catch availability. Contact us for current production schedules.',
      },
    ],
  }),
  createProduct({
    name: 'Mackerel',
    slug: 'mackerel',
    category: 'fish',
    image: '/assets/images/products/Mackerel-product-image.png',
    detailImage: '/assets/images/products/Mackerel-product-image.png',
    galleryImages: mackerelGalleryImages,
    projectImage: '/assets/images/products/Mackerel-product-image.png',
    summary:
      'Export-grade Mackerel handled through hygienic processing and dependable frozen logistics for global markets.',
    faqs: [
      {
        label: 'Fish Forms',
        question: 'What forms of Mackerel does AVLA Exports supply?',
        answer:
          'AVLA Exports supplies Indian Mackerel (Rastrelliger kanagurta) in three forms: Whole, Headless (HL) Skin On, and Fillet - available in IQF and block-frozen formats.',
      },
      {
        label: 'Indian Mackerel',
        question: 'Is the Mackerel Indian (Indian Mackerel) or Atlantic?',
        answer:
          'AVLA Exports specialises in Indian Mackerel (Rastrelliger kanagurta), sourced from the rich coastal waters off Kollam, Kerala. This species is distinct from Atlantic Mackerel and is particularly popular in Middle Eastern, African, and South Asian markets.',
      },
      {
        label: 'Size Grades',
        question: 'What are the typical size grades for whole Mackerel?',
        answer:
          'Whole Mackerel is graded by count per kilogram - common grades include 3-5 pcs/kg, 5-8 pcs/kg, 8-12 pcs/kg, and 12+ pcs/kg. Buyers can specify the preferred size range for their market.',
      },
      {
        label: 'Fillet Options',
        question: 'Are Mackerel fillets available with skin on or skin off?',
        answer:
          'Yes. Mackerel fillets are available with skin on (for grilling and roasting applications) or skin off (for processed food and retail applications). Both options can be supplied IQF or block frozen.',
      },
      {
        label: 'Nutrition',
        question: 'What is the fat content and nutritional profile of Indian Mackerel?',
        answer:
          'Indian Mackerel is rich in Omega-3 fatty acids, protein, Vitamin D, and B12. Its moderate fat content makes it a nutritionally dense product valued in health-conscious markets and nutritional product formulations.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of frozen Mackerel?',
        answer:
          'Properly frozen and stored at -18°C, Mackerel maintains quality for 12-18 months. Due to its natural oil content, vacuum packaging is strongly recommended to prevent oxidation and freezer burn.',
      },
      {
        label: 'Packaging',
        question: 'What packaging is available for Mackerel exports?',
        answer:
          'Mackerel is available in 10 kg and 20 kg master cartons (IQF or block), retail pouches (250g, 500g, 1 kg), and bulk tray packs. Custom branding and private label options are available on request.',
      },
      {
        label: 'Culinary Uses',
        question: 'How is Indian Mackerel typically consumed?',
        answer:
          'Indian Mackerel is prepared in a wide range of dishes - fried, curried, smoked, grilled, or dried. In South India and Sri Lanka, it is a staple in coastal cuisine. In the Middle East and Africa, it is commonly fried or grilled whole.',
      },
      {
        label: 'Retail Supply',
        question: 'Does AVLA Exports supply Mackerel to supermarket chains?',
        answer:
          'Yes. We supply Mackerel to retail buyers including supermarket chains under private label arrangements. Retail-compliant packaging with nutritional labels, barcodes, and origin declarations can be arranged per destination-country requirements.',
      },
      {
        label: 'Quality Checks',
        question: 'What quality checks are performed on Mackerel before export?',
        answer:
          'Quality checks include sensory evaluation (colour, odour, texture), microbiological testing, heavy metal screening, and net-weight verification. All test results are documented and made available with shipping documentation.',
      },
    ],
  }),
  createProduct({
    name: 'Mahi Mahi',
    slug: 'mahi-mahi',
    category: 'fish',
    image: '/assets/images/product-details/mahi/Mahi Mahi Fish.webp',
    projectImage: '/assets/images/product-details/mahi/Mahi Mahi Fish.webp',
    galleryImages: mahiGalleryImages,
    summary:
      'Premium Mahi Mahi sourced and packed for export with freshness-focused handling and buyer-ready specifications.',
    faqs: [
      {
        label: 'Fish Cuts',
        question: 'What cuts of Mahi Mahi does AVLA Exports offer?',
        answer:
          'AVLA Exports offers Mahi Mahi in five forms: Whole, Fillet, Loins, Headless (HL) Skin On, and Headless (HL) Skinless - covering the full spectrum from processing inputs to retail-ready formats.',
      },
      {
        label: 'Export Demand',
        question: 'What is Mahi Mahi and why is it so popular in export markets?',
        answer:
          'Mahi Mahi (Coryphaena hippurus), also known as Dolphinfish, is prized for its firm, sweet, mildly flavoured flesh. Its versatility - suitable for grilling, baking, pan-searing, and steaming - makes it a bestseller in North American, European, and Japanese foodservice.',
      },
      {
        label: 'Wild Caught',
        question: 'Is the Mahi Mahi wild-caught?',
        answer:
          'Yes. All Mahi Mahi supplied by AVLA is wild caught from Indian Ocean waters. Mahi Mahi is not commercially farmed, which means the product is inherently free from antibiotic and aquaculture chemical concerns.',
      },
      {
        label: 'Fillet Sizes',
        question: 'What size grades are available for Mahi Mahi fillets?',
        answer:
          'Mahi Mahi fillets are commonly available in grades of 2-4 oz, 4-6 oz, 6-8 oz, 8-10 oz, and 10+ oz. These align with international foodservice portion standards. Custom grading and trim specifications are accepted.',
      },
      {
        label: 'Portion Cuts',
        question: 'Can Mahi Mahi loins be supplied as portions?',
        answer:
          'Yes. Mahi Mahi loins can be portioned to specific weights (e.g., 150g, 180g, 200g) and individually wrapped for retail or foodservice applications. Portion-cut products are available IQF.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of frozen Mahi Mahi?',
        answer:
          "Frozen Mahi Mahi stored at -18°C has a shelf life of 18-24 months. Vacuum packaging is recommended to preserve the fish's natural pink orange color and prevent dehydration during extended cold storage.",
      },
      {
        label: 'Sashimi Grade',
        question: 'Is Mahi Mahi suitable for sashimi or sushi grade supply?',
        answer:
          'Selected lots of Mahi Mahi may be processed to sashimi-grade standards upon request. This requires super-chilled or cryogenic freezing processes and specific microbiological certification - please contact us to discuss your sashimi-grade requirements.',
      },
      {
        label: 'Certifications',
        question: 'Which certifications cover Mahi Mahi exports from AVLA?',
        answer:
          "AVLA's processing facility is MPEDA-registered and HACCP-certified. Export health certificates for the EU, USA (FDA-registered), and other destination markets are issued with each shipment.",
      },
      {
        label: 'Fillet Colour',
        question: 'What is the typical colour of Mahi Mahi fillet, and does it change after freezing?',
        answer:
          'Fresh Mahi Mahi flesh ranges from pinkish white to cream. After proper freezing and thawing, the colour remains consistent if the cold chain is maintained. Colour additives are never used in our processing.',
      },
      {
        label: 'Trial Orders',
        question: 'How can I place a trial order for Mahi Mahi?',
        answer:
          'Trial orders and sample requests are welcome. Contact us at info@avlaexports.com with your company profile, target destination, required product form, and preferred packaging. Our export team will respond with pricing and lead-time details within 48 hours.',
      },
    ],
  }),
  createProduct({
    name: 'Grouper',
    slug: 'grouper',
    category: 'fish',
    image: '/assets/images/products/product-Grouper-fish.png',
    galleryImages: grouperGalleryImages,
    projectImage: '/assets/images/products/project-container-d3.webp',
    summary:
      'Premium Grouper sourced, processed, and packed for international buyers who require reliable quality and freshness.',
    faqs: [
      {
        label: 'Fish Forms',
        question: 'What forms of Grouper does AVLA Exports supply?',
        answer:
          'AVLA Exports supplies Grouper in two forms: Whole (cleaned and frozen) and Fillet (skin on or skin off as specified). Both are available in IQF or block-frozen formats.',
      },
      {
        label: 'Grouper Species',
        question: 'Which species of Grouper does AVLA Exports handle?',
        answer:
          'We primarily handle species found in Indian Ocean coastal waters, including varieties such as Brown-marbled Grouper and Coral Grouper. Species-specific requests can be accommodated subject to seasonal availability - please inquire.',
      },
      {
        label: 'Premium Seafood',
        question: 'Why is Grouper considered a premium seafood product?',
        answer:
          'Grouper is valued for its thick, white, and flavourful flesh with a firm texture that holds up well in cooking. It commands premium pricing in Chinese, Southeast Asian, Middle Eastern, and Mediterranean markets.',
      },
      {
        label: 'Size Grades',
        question: 'What size grades are available for whole Grouper?',
        answer:
          'Whole Grouper is graded by weight - standard grades include 300-500g, 500-1000g, 1-2 kg, and 2 kg+. Live or fresh-chilled options are subject to availability and logistics feasibility for regional markets.',
      },
      {
        label: 'Fillet Options',
        question: 'Are Grouper fillets supplied skin on or skin off?',
        answer:
          'Both options are available. Skin-on fillets are preferred in markets where the skin is consumed (e.g., Chinese cuisine). Skin-off fillets are suited for retail and white-label foodservice applications.',
      },
      {
        label: 'Quality Control',
        question: 'How is Grouper quality maintained during processing?',
        answer:
          'Grouper is processed in our temperature-controlled facility (4°C or below) and blast-frozen within hours of processing. Each batch undergoes sensory, microbiological, and chemical quality checks before packing.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of frozen Grouper?',
        answer:
          'Frozen Grouper stored at -18°C has an optimal shelf life of 18 months. Buyers should verify product core temperature upon receipt to confirm unbroken cold chain compliance.',
      },
      {
        label: 'Export Compliance',
        question: 'Is Grouper subject to any trade or export restrictions?',
        answer:
          'Certain Grouper species are listed under CITES regulations. AVLA Exports only handles legally harvested, non-CITES-listed species with full documentation from authorised fishing vessels compliant with Indian fisheries regulations.',
      },
      {
        label: 'Head-On Grouper',
        question: 'Can Grouper be supplied with head-on for live-fish market alternatives?',
        answer:
          'Yes. Whole Grouper with head on and gills removed (HG) can be supplied frozen for markets that prefer the appearance of whole fish. Contact our team for availability and pricing.',
      },
      {
        label: 'Export Documents',
        question: 'What documentation accompanies a Grouper export shipment?',
        answer:
          'Each shipment is accompanied by a Health Certificate, Packing List, Commercial Invoice, Bill of Lading, Certificate of Origin, EIC (Export Inspection Council) Certificate, and any destination-specific phytosanitary or import permits.',
      },
    ],
  }),
  createProduct({
    name: 'Anchovy',
    slug: 'anchovy',
    category: 'fish',
    image: '/assets/images/products/Anchovy-product-image.png',
    summary:
      'Bulk Anchovy supply for international seafood buyers, prepared with careful sorting, packing, and freshness control.',
    faqs: [
      {
        label: 'Whole Anchovy',
        question: 'Does AVLA Exports supply Anchovy, and in what form?',
        answer:
          'Yes. AVLA Exports supplies Indian Anchovy (Stolephorus spp.) in whole form - cleaned, gutted, and frozen. Whole Anchovy is widely used as a raw material for fish sauce, paste, salted anchovy products, and animal feed.',
      },
      {
        label: 'Size Grades',
        question: 'What is the typical size range of whole Anchovy supplied?',
        answer:
          "Our whole Anchovy is graded by count per kilogram - typically ranging from 30-50 pcs/kg to 80-120 pcs/kg. Custom size selection is available based on the buyer's end-use application.",
      },
      {
        label: 'Food Applications',
        question: 'What are the primary uses of whole frozen Anchovy in the food industry?',
        answer:
          'Whole frozen Anchovy is used to produce anchovy paste, fish sauce (nam pla, nuoc mam), salted and fermented anchovy (Myeolchi-jeot in Korea), pizza toppings, Caesar dressing, and as a live-bait substitute in aquaculture.',
      },
      {
        label: 'Food Grade',
        question: 'Is the Anchovy suitable for human consumption or primarily industrial use?',
        answer:
          'Our whole Anchovy is processed under food-grade hygiene standards and is suitable for human consumption. It is also supplied for industrial processing (fish sauce, paste, fishmeal) depending on grade and buyer specification.',
      },
      {
        label: 'Packaging',
        question: 'What packaging formats are used for Anchovy exports?',
        answer:
          'Whole Anchovy is typically packed in block-frozen format in 10 kg or 20 kg master cartons. IQF packaging is available for premium retail grades. Custom packing in smaller retail pouches (500g, 1 kg) can be arranged.',
      },
      {
        label: 'Export Markets',
        question: 'Which countries import Anchovy from AVLA Exports?',
        answer:
          'Key markets include Thailand, Vietnam, South Korea, the Philippines, and Middle Eastern nations where anchovy-based condiments and fish sauce are staple ingredients in cuisine.',
      },
      {
        label: 'Wild Caught',
        question: 'Is the Anchovy wild-caught and sustainably sourced?',
        answer:
          'All Anchovy supplied by AVLA is wild-caught from Indian coastal waters using traditional and mechanised fishing boats operating out of Kollam. Sourcing is compliant with Indian fisheries regulations.',
      },
      {
        label: 'Microbiology Tests',
        question: 'What microbiological standards are applied to Anchovy processing?',
        answer:
          'Anchovy is tested for total viable count (TVC), E. coli, Salmonella, Listeria, and Histamine (important for small pelagic fish). Results are certified and attached to each export consignment.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of frozen whole Anchovy?',
        answer:
          'Frozen whole Anchovy stored at -18°C has a shelf life of 12-18 months. Given its high oil content, we strongly recommend vacuum packaging or oxygen-barrier packaging to prevent rancidity.',
      },
      {
        label: 'CIF Pricing',
        question: 'Can I get a CIF price for Anchovy?',
        answer:
          'Yes. We provide CIF (Cost, Insurance, and Freight) pricing for all major ports. Share your destination port, required quantity, packaging preference, and target frequency of orders with our export team.',
      },
    ],
  }),
  createProduct({
    name: 'Sardine',
    slug: 'sardine',
    category: 'fish',
    image: '/assets/images/products/product-Sardine-fish.png',
    projectImage: '/assets/images/products/project-container-s2.webp',
    summary:
      'Fresh and frozen Sardine prepared for bulk seafood export with consistent grading, packing, and cold-chain handling.',
    faqs: [
      {
        label: 'Whole Sardine',
        question: 'What form of Sardine does AVLA Exports supply?',
        answer:
          'AVLA Exports supplies Indian Oil Sardine (Sardinella longiceps) in whole frozen form - a staple seafood product widely consumed across Kerala, Tamil Nadu, and exported to markets in the Middle East, Africa, and Southeast Asia.',
      },
      {
        label: 'Size Grades',
        question: 'What sizes of whole Sardine are available?',
        answer:
          'Sardines are graded by count per kilogram - commonly 8-12 pcs/kg, 12-16 pcs/kg, 16-20 pcs/kg, and 20+ pcs/kg. Specific size grades can be negotiated based on order volume and seasonal availability.',
      },
      {
        label: 'Frozen Formats',
        question: 'Are Sardines available in IQF or block-frozen format?',
        answer:
          'Both formats are available. IQF Sardines are ideal for retail and foodservice buyers who require individual fish handling. Block-frozen Sardines in 10 kg and 20 kg cartons are suited for bulk industrial and processing buyers.',
      },
      {
        label: 'Culinary Uses',
        question: 'What are the main culinary uses of Indian Sardine?',
        answer:
          'Sardines are widely used in grilling, frying, currying, canning, and smoking. They are a rich source of Omega-3, calcium, and Vitamin D, making them popular in nutrition-focused retail and health food categories.',
      },
      {
        label: 'Seasonal Supply',
        question: 'Is the Sardine season-dependent, and how does that affect availability?',
        answer:
          'Indian Oil Sardine has a defined fishing season, typically peaking from June to December. AVLA maintains strategic frozen stock throughout the year to ensure year-round supply continuity. Contact our team for current stock positions.',
      },
      {
        label: 'Fish Processing',
        question: 'How are Sardines processed before freezing?',
        answer:
          'Sardines are washed, sorted, graded, and passed through a blast freezer within hours of landing at the harbour. For export-grade product, ice-slush pre-chilling is used prior to blast freezing.',
      },
      {
        label: 'Nutrition',
        question: 'What nutritional claims can be made about exported Sardines?',
        answer:
          'Indian Sardines are high in Omega-3 fatty acids (EPA and DHA), protein, Vitamin B12, calcium, and iron. Nutritional data sheets and certificates of analysis are available on request for labelling purposes.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of frozen whole Sardine?',
        answer:
          'Frozen Sardine stored at -18°C has a recommended shelf life of 12-18 months. Buyers should ensure cold storage compliance upon arrival and monitor vacuum seal integrity throughout distribution.',
      },
      {
        label: 'Cleaning Options',
        question: 'Can Sardines be supplied gutted or with viscera intact?',
        answer:
          'Both options are available. Gutted-and-gilled (GG) Sardines are available for markets that prefer cleaned product. Round (whole, ungutted) Sardines are available for buyers who process or cook them whole.',
      },
      {
        label: 'Export Compliance',
        question: 'What certifications and export compliance requirements apply to Sardine exports?',
        answer:
          'AVLA Exports is MPEDA-registered and EU-certified. Our Sardine exports are accompanied by Health Certificates issued by the Export Inspection Council (EIC), Certificate of Origin, and destination-specific import documentation.',
      },
    ],
  }),
];

export const otherProducts = [
  createProduct({
    name: 'Brown Shrimp',
    slug: 'brown-shrimp',
    category: 'crustaceans',
    image: '/assets/images/products/brown shrimp.webp',
    galleryImages: shrimpGalleryImages,
    scriptName: 'Brown Shrimp',
    summary:
      'Brown Shrimp supplied for export with careful grading, hygienic processing, and reliable cold-chain coordination.',
    faqs: shrimpFaqs,
  }),
  createProduct({
    name: 'Karikadi',
    slug: 'karikadi',
    category: 'crustaceans',
    image: '/assets/images/products/Karikadi Shrimp.webp',
    galleryImages: shrimpGalleryImages,
    summary:
      'Karikadi prepared for seafood export with strong handling standards, export packing, and consistent product quality.',
    faqs: shrimpFaqs,
  }),
  createProduct({
    name: 'Poovalan',
    slug: 'poovalan',
    category: 'crustaceans',
    image: '/assets/images/products/Poovalan Shrimp.webp',
    galleryImages: shrimpGalleryImages,
    summary:
      'Poovalan export supply managed through careful sorting, processing, and freshness-controlled shipment.',
    faqs: shrimpFaqs,
  }),
  createProduct({
    name: 'Deep Sea Shrimp',
    slug: 'deep-sea-shrimp',
    category: 'crustaceans',
    image: '/assets/images/products/deep sea shrimp.webp',
    galleryImages: shrimpGalleryImages,
    summary:
      'Deep Sea Shrimp handled for export with quality inspection, hygienic packing, and buyer-ready sizing.',
    faqs: shrimpFaqs,
  }),
  createProduct({
    name: 'Flower Shrimp',
    slug: 'flower-shrimp',
    category: 'crustaceans',
    image: '/assets/images/products/flower shrimp.webp',
    galleryImages: shrimpGalleryImages,
    summary:
      'Flower Shrimp supplied in export-ready packs with dependable freezing, grading, and documentation support.',
    faqs: shrimpFaqs,
  }),
  createProduct({
    name: 'Blue Swimming Crab',
    slug: 'blue-swimming-crab',
    category: 'crustaceans',
    image: '/assets/images/products/Blue Swimming Crab.webp',
    galleryImages: crabGalleryImages,
    summary:
      'Blue Swimming Crab processed for global seafood buyers with export-grade handling and reliable logistics.',
    faqs: crabFaqs,
  }),
  createProduct({
    name: 'Threespot Crab',
    slug: 'threespot-crab',
    category: 'crustaceans',
    image: '/assets/images/products/Threespot Crab.webp',
    galleryImages: crabGalleryImages,
    summary:
      'Threespot Crab prepared for export with clean processing, quality checks, and market-specific packing.',
    faqs: crabFaqs,
  }),
  createProduct({
    name: 'Crucifix Crab',
    slug: 'crucifix-crab',
    category: 'crustaceans',
    image: '/assets/images/products/Crucifix Crab.webp',
    galleryImages: crabGalleryImages,
    summary:
      'Crucifix Crab export supply supported by hygienic handling, grading, and dependable shipment planning.',
    faqs: crabFaqs,
  }),
  createProduct({
    name: 'Deep Sea Lobster',
    slug: 'deep-sea-lobster',
    category: 'crustaceans',
    image: '/assets/images/products/deep-sea lobster.webp',
    summary:
      'Deep Sea Lobster packed for export with careful quality monitoring, temperature control, and buyer-ready presentation.',
    faqs: lobsterFaqs,
  }),
  createProduct({
    name: 'Spiny Lobster',
    slug: 'spiny-lobster',
    category: 'crustaceans',
    image: '/assets/images/products/spiny lobster.webp',
    summary:
      'Spiny Lobster supplied for premium export markets with strict hygiene, grading, and cold-chain handling.',
    faqs: lobsterFaqs,
  }),
  createProduct({
    name: 'Sand Lobster',
    slug: 'sand-lobster',
    category: 'crustaceans',
    image: '/assets/images/products/Sand Lobster.webp',
    galleryImages: sandLobsterGalleryImages,
    summary:
      'Sand Lobster managed for export through careful packing, freshness protection, and consistent quality checks.',
    faqs: lobsterFaqs,
  }),
  createProduct({
    name: 'Baigai',
    slug: 'Baigai',
    category: 'bivalve',
    image: '/assets/images/products/Baigai.webp',
    galleryImages: baigaiGalleryImages,
    summary:
      'Baigai products processed for export with safe handling, clean packing, and dependable supply coordination.',
    faqs: baigaiFaqs,
  }),
  createProduct({
    name: 'Yellow Clam',
    slug: 'yellow-clam',
    category: 'bivalve',
    image: '/assets/images/products/Yellow Clam.webp',
    summary:
      'Yellow Clam export supply supported by careful sorting, hygiene-led processing, and freshness-focused shipment.',
    faqs: bivalveFaqs,
  }),
  createProduct({
    name: 'Green Mussels',
    slug: 'green-mussels',
    category: 'bivalve',
    image: '/assets/images/products/Green Mussels.webp',
    summary:
      'Green Mussels prepared for export with quality inspection, safe packing, and reliable cold-chain handling.',
    faqs: bivalveFaqs,
  }),
  createProduct({
    name: 'Loligo Squid',
    slug: 'loligo-squid',
    category: 'cephalopods',
    image: '/assets/images/products/Loligo Squid.webp',
    galleryImages: loligoSquidGalleryImages,
    summary:
      'Loligo Squid supplied for export with controlled processing, export packing, and buyer-specific preparation.',
    faqs: [
      {
        label: 'Grades',
        question: 'What is LOLIGO Squid and what grades does AVLA Exports offer?',
        answer:
          'LOLIGO Squid (Loligo duvaucelii) is one of the most commercially traded squid species globally. AVLA Exports offers it in eight freezing/quality formats - Blast AA, Blast A, Block A, Block Trawling, Block B Grade, Individually Frozen, Cleaned Block Frozen, and Cleaned Individually Frozen - across six size grades: U2, U3, 3/6, 6/10, 10/20, and 20/40.',
      },
      {
        label: 'Size Grades',
        question: 'What do the size grades (e.g., U2, 3/6, 10/20) mean for squid?',
        answer:
          'U2 and U3 mean under 2 pcs/kg and under 3 pcs/kg respectively, indicating very large individual squid. Grades like 3/6, 6/10, 10/20, and 20/40 indicate pieces per kilogram ranges - 3/6 means 3 to 6 pieces per kg (large), while 20/40 means 20 to 40 pieces per kg (smaller).',
      },
      {
        label: 'Quality',
        question: 'What is the difference between Blast AA and Blast A quality squid?',
        answer:
          'Blast AA is the highest quality tier - squid is blast frozen immediately after catch with minimal handling damage, excellent skin colour, no discolouration, and superior texture. Blast A is a premium grade with minor cosmetic variations but equal food safety and eating quality.',
      },
      {
        label: 'Frozen Formats',
        question: 'What is the difference between Block Frozen and Individually Frozen squid?',
        answer:
          'Block frozen squid is moulded into solid blocks (typically 2 kg or 4 kg) for bulk buyers who will thaw and process entire blocks. Individually Frozen (IQF) squid are frozen as individual pieces, allowing buyers to use exact quantities without thawing a full block.',
      },
      {
        label: 'Cleaned Squid',
        question: "What is 'Cleaned' squid, and how does it differ from 'Whole' squid?",
        answer:
          'Cleaned squid has had the head, tentacles, internal gladius (pen), and viscera removed, leaving only the mantle tube. Whole squid is frozen with all body parts intact. Cleaned squid commands a premium as it is ready for cooking or further processing.',
      },
      {
        label: 'Trawling Grade',
        question: 'What is Block Trawling quality squid?',
        answer:
          'Block Trawling quality refers to squid caught by trawl net rather than jigging. Trawl-caught squid may have minor bruising or skin damage compared to jig-caught squid, making it suitable for processing applications (calamari rings, rings-and-tentacles) rather than premium presentation.',
      },
      {
        label: 'Packaging',
        question: 'What packing formats are used for LOLIGO Squid?',
        answer:
          'LOLIGO Squid is packed in 3 x 4 kg (12 kg master carton) and 6 x 2 kg (12 kg master carton) formats for block products. Individually Frozen (IQF) is packed in 10 x 1 kg (10 kg master carton). Custom packing formats are available for large-volume buyers.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of LOLIGO Squid?',
        answer:
          'Blast frozen and block frozen LOLIGO Squid stored at -18°C has a shelf life of 18-24 months. Cleaned squid may have a slightly shorter quality window of 12-18 months. Maintaining continuous cold chain is essential.',
      },
      {
        label: 'Export Markets',
        question: 'Which markets import LOLIGO Squid from AVLA Exports?',
        answer:
          'LOLIGO Squid is exported to Spain, Portugal, Italy (for calamari), Japan and South Korea (for sashimi and grilling), China, the Middle East, and Southeast Asian nations. Indian LOLIGO is particularly prized in the EU calamari market.',
      },
      {
        label: 'Certifications',
        question: 'What certifications apply to LOLIGO Squid exports?',
        answer:
          'All LOLIGO Squid exports are covered by MPEDA registration, HACCP certification, EIC Health Certificates, and EU Health Marks. Species identification by certified laboratory is available on request for buyers requiring formal species authentication.',
      },
    ],
  }),
  createProduct({
    name: 'Semi Needle Squid',
    slug: 'semi-needle-squid',
    category: 'cephalopods',
    image: '/assets/images/products/Semi Needle Squid.webp',
    galleryImages: semiNeedleSquidGalleryImages,
    summary:
      'Semi Needle Squid packed for export with dependable hygiene practices, grading, and shipment coordination.',
    faqs: needleSquidFaqs,
  }),
  createProduct({
    name: 'Needle Squid',
    slug: 'needle-squid',
    category: 'cephalopods',
    image: '/assets/images/products/Needle Squid.webp',
    galleryImages: thondiSquidGalleryImages,
    summary:
      'Needle Squid prepared for global seafood buyers with clean handling, freezing support, and export documentation.',
    faqs: needleSquidFaqs,
  }),
  createProduct({
    name: 'Cuttlefish',
    slug: 'cuttlefish',
    category: 'cephalopods',
    image: '/assets/images/products/Cuttlefish.webp',
    galleryImages: cuttlefishGalleryImages,
    summary:
      'Cuttlefish exported with careful processing, sizing, and buyer-ready packing for international markets.',
    faqs: [
      {
        label: 'Product Forms',
        question: 'What cuttlefish products does AVLA Exports offer?',
        answer:
          'AVLA Exports supplies cuttlefish in three forms: Whole Cleaned Block Frozen (3 x 4 kg), Whole Cleaned Individually Frozen (10 kg bulk or 6 kg), and Whole (uncleaned) Individually Frozen (10 kg bulk or 6 kg) - across eight size grades from U1 to 20/40.',
      },
      {
        label: 'Cleaned Cuttlefish',
        question: "What does 'cleaned' mean in the context of cuttlefish?",
        answer:
          'Cleaned cuttlefish has had the cuttlebone (internal shell), viscera, and ink sac removed, leaving the mantle, fins, and tentacles. Whole (uncleaned) cuttlefish retains all internal organs, including the ink sac, valued by buyers who use cuttlefish ink in cooking.',
      },
      {
        label: 'Size Grades',
        question: 'What do the cuttlefish size grades mean?',
        answer:
          'U1 means under 1 piece per kg (a single cuttlefish weighing over 1 kg - very large). U2 means under 2 pcs/kg. Grades such as 2/4, 5/7, 8/12 indicate piece weight ranges in kg per kg - for example, 2/4 means each cuttlefish weighs 250-500g. 20/40 refers to small cuttlefish at 20-40 pcs/kg.',
      },
      {
        label: 'Cuttlefish Ink',
        question: 'What is cuttlefish ink and can it be supplied separately?',
        answer:
          'Cuttlefish ink is a rich, briny black liquid used in Mediterranean cuisine (squid ink pasta, black rice, black risotto). While our standard product includes the ink sac in uncleaned product, separately collected cuttlefish ink is available on request.',
      },
      {
        label: 'Export Markets',
        question: 'What markets have the highest demand for cuttlefish?',
        answer:
          'Spain, Portugal, and Italy (Southern Europe) are the largest consumers of cuttlefish. Japan and South Korea value cuttlefish for sashimi and grilled applications. The Middle East uses cuttlefish extensively in stews and fried dishes.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of frozen cuttlefish?',
        answer:
          'Frozen cuttlefish stored at -18°C has a shelf life of 18-24 months for block frozen and 12-18 months for IQF cleaned product. Ink sac integrity in uncleaned product should be verified upon receipt.',
      },
      {
        label: 'Frozen Formats',
        question: 'What is the difference between block frozen and individually frozen cuttlefish?',
        answer:
          'Block frozen cuttlefish is pressed into moulds and frozen as solid blocks for processing buyers who thaw entire units. Individually frozen (IQF) cuttlefish are frozen piece-by-piece, ideal for retailers and foodservice buyers needing portioned usage.',
      },
      {
        label: 'Custom Processing',
        question: 'Can cuttlefish be supplied pre-scored or pre-portioned for retail cooking?',
        answer:
          'Yes. Pre-scored cuttlefish (cross-hatched for curling when cooked) and pre-portioned rings can be arranged for retail or foodservice buyers. Please share your specification - scoring pattern, portion size, packaging - with our export team.',
      },
      {
        label: 'Food Safety',
        question: 'What quality and food safety tests are applied to cuttlefish?',
        answer:
          'Cuttlefish undergoes sensory evaluation, microbiological testing (TPC, E. coli, Salmonella), heavy metal analysis, and sulphite screening (relevant for preserved cephalopods). All test results accompany export documentation.',
      },
      {
        label: 'Cold Storage',
        question: 'How should buyers store frozen cuttlefish upon receipt?',
        answer:
          'Frozen cuttlefish should be placed immediately into cold storage at -18°C or below upon receipt. Do not refreeze thawed product. For culinary use, thaw under refrigeration (4°C) overnight or under cold running water for controlled thawing.',
      },
    ],
  }),
  createProduct({
    name: 'Octopus',
    slug: 'octopus',
    category: 'cephalopods',
    image: '/assets/images/products/Octopus.webp',
    galleryImages: octopusGalleryImages,
    summary:
      'Export-quality Octopus prepared with strict hygiene standards, controlled freezing, and dependable packaging.',
    faqs: [
      {
        label: 'Product Forms',
        question: 'What octopus products does AVLA Exports supply?',
        answer:
          'AVLA Exports supplies Octopus in two forms: Whole Gutted (beak and viscera removed, skin intact) and Whole Cleaned (fully cleaned, skin removed). Both forms are available in tray and block packing across six size grades: 100/300g, 300/500g, 500/1000g, 1000/2000g, 2000/3000g, and 1000g+.',
      },
      {
        label: 'Cleaning Types',
        question: 'What is the difference between Whole Gutted and Whole Cleaned Octopus?',
        answer:
          'Whole Gutted Octopus has the beak and internal organs removed but retains its natural purplish-brown skin. Whole Cleaned Octopus is additionally skinned (tumbled or manually peeled), yielding a white-fleshed, ready-to-cook product preferred in Southern European markets.',
      },
      {
        label: 'Size Grades',
        question: 'What does the 1000UP size grade mean?',
        answer:
          '1000UP (also noted as 1000/up) means individual octopus weighing over 1,000g each. This large grade is highly valued in Mediterranean markets - particularly Spain, Greece, and Morocco - where large octopus is prized for traditional grilling and octopus salad dishes.',
      },
      {
        label: 'Culinary Uses',
        question: 'What are the primary culinary uses of octopus?',
        answer:
          'Octopus is used in a wide range of global dishes - Galician pulpo a la gallega (Spain), grilled octopus (Greece), takoyaki and sashimi (Japan), octopus salad (Italy and Portugal), Korean nakji (stir-fried octopus), and Moroccan seafood tagine.',
      },
      {
        label: 'Wild-Caught',
        question: "Is AVLA's octopus wild-caught?",
        answer:
          'Yes. All octopus supplied by AVLA Exports is wild caught from Indian Ocean coastal waters. Wild-caught octopus is naturally free from aquaculture chemicals and is prized for its firmer, more flavourful flesh compared to farmed alternatives.',
      },
      {
        label: 'Packing Formats',
        question: 'What is the difference between tray-packed and block-packed octopus?',
        answer:
          'Tray-packed octopus is individually frozen and presented on retail trays - ideal for supermarket display and foodservice portioning. Block-packed octopus is pressed into 10 kg or 20 kg solid frozen blocks, suited for processing buyers and bulk foodservice operations.',
      },
      {
        label: 'Tenderising',
        question: 'How is octopus tenderised before freezing?',
        answer:
          'Octopus can be supplied mechanically tenderised (tumbled) prior to freezing on request. Tumbling breaks down the muscle fibres, reducing cooking time and improving texture - particularly valued in Mediterranean restaurants and prepared meal manufacturers.',
      },
      {
        label: 'Shelf Life',
        question: 'What is the shelf life of frozen octopus?',
        answer:
          'Frozen octopus stored at -18°C has a shelf life of 18-24 months for whole gutted and 12-18 months for cleaned octopus. Vacuum packaging is recommended to prevent surface dehydration and pigment loss on cleaned product.',
      },
      {
        label: 'Certifications',
        question: 'What certifications cover octopus exports from AVLA?',
        answer:
          'Octopus exports are supported by MPEDA health certificates, EIC export clearance, HACCP certification, and destination-specific import health certificates. Cadmium testing (required for EU cephalopod imports) is conducted for every lot.',
      },
      {
        label: 'Private Label',
        question: 'Can AVLA Exports supply octopus for private label retail under my brand?',
        answer:
          'Yes. AVLA Exports supports private label retail programmes for octopus. We can arrange custom packaging with your branding, nutritional labelling, origin declaration, and barcode format compliant with destination-market retail standards. Contact our export team for a discussion.',
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
