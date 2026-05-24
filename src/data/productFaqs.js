export function createFaqs(name, exportLabel = `${name} Export`, frozenLabel = `Frozen ${name}`) {
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

export const shrimpFaqs = [
  {
    label: 'Varieties',
    question: 'What shrimp varieties does AVLA Exports supply?',
    answer:
      'AVLA Exports supplies five shrimp varieties: Brown Shrimp, Karikadi (Metapenaeus spp.), Poovalan (Parapenaeopsis stylifera), Deep Sea Shrimp, and Flower Shrimp - each available in Headless (HL), Head On (HON), PUD (Peeled Undeveined), and Peeled & Deveined (PD) formats.',
  },
  {
    label: 'PUD vs PD',
    question: 'What is the difference between PUD and Peeled & Deveined (PD) shrimp?',
    answer:
      'PUD (Peeled Undeveined) shrimp has the shell and head removed but the digestive tract (vein) is intact. Peeled and Deveined (PD) shrimp has both the shell and the vein removed, offering a cleaner product preferred in retail and premium foodservice.',
  },
  {
    label: 'Size Grades',
    question: 'What are the size grades available for shrimp?',
    answer:
      "Shrimp is graded by count per pound (U/15, 16/20, 21/25, 26/30, 31/40, 41/50, 51/60, 61/70, 71/90, 100/up) or count per kilogram depending on the destination market's convention. Custom grading is available.",
  },
  {
    label: 'Wild-Caught Shrimp',
    question: 'Is the shrimp farmed or wild-caught?',
    answer:
      'AVLA Exports specialises in wild-caught shrimp sourced directly from the coastal waters of Kollam, Kerala. Wild-caught shrimp carries inherently lower chemical residue risks compared to farmed shrimp.',
  },
  {
    label: 'Freezing Technology',
    question: 'What freezing technology is used for shrimp processing?',
    answer:
      'We use IQF (Individually Quick Frozen) tunnel freezers and blast plate freezers depending on the product form. IQF shrimp maintains individual piece integrity, while block-frozen formats are used for bulk processing buyers.',
  },
  {
    label: 'Residue Testing',
    question: 'Are the shrimp products antibiotic-free and residue-tested?',
    answer:
      'Yes. All shrimp products undergo antibiotic residue screening (Nitrofurans, Chloramphenicol, Tetracycline, Oxytetracycline) as per EU MRL standards. Clean test results are attached to all export documentation.',
  },
  {
    label: 'Packaging',
    question: 'What are the typical packaging options for shrimp exports?',
    answer:
      'Shrimp is packed in IQF pouches (500g, 1 kg, 2 kg) or master carton blocks of 10 kg. Retail-ready vacuum pouches with custom labelling, including nutritional information and origin, are available for private label buyers.',
  },
  {
    label: 'Export Markets',
    question: "What markets import AVLA's shrimp products?",
    answer:
      "Our shrimp is exported to the EU (Spain, Italy, France, Germany), the Middle East (UAE, Saudi Arabia, Kuwait), Asia (China, Japan, South Korea), and the United States. Each market's regulatory requirements are met before shipment.",
  },
  {
    label: 'Shelf Life',
    question: 'What is the shelf life of IQF shrimp?',
    answer:
      'IQF shrimp stored at -18°C has an optimal shelf life of 18 months. Block-frozen shrimp can maintain quality for up to 24 months in ideal storage conditions. Glazing percentage affects net weight - buyers should clarify labelling requirements.',
  },
  {
    label: 'Glaze Control',
    question: 'Can AVLA Exports supply shrimp with specific glaze percentage and net-weight guarantee?',
    answer:
      'Yes. Shrimp can be glazed at 8%, 10%, 12%, or 15% as specified. Net-weight guarantees with tolerance bands are provided on request, and verification certificates are issued at point of production.',
  },
];

export const crabFaqs = [
  {
    label: 'Crab Species',
    question: 'Which crab species does AVLA Exports offer?',
    answer:
      'AVLA Exports supplies three crab species: Blue Swimming Crab (Portunus pelagicus), Threespot Crab (Portunus sanguinolentus), and Crucifix Crab (Charybdis feriatus) - each available as Whole or Cut Crab.',
  },
  {
    label: 'Cut Crab',
    question: "What is 'Cut Crab' and how is it processed?",
    answer:
      'Cut Crab refers to whole crabs that are cleaned, halved or quartered, and frozen for markets where cut product is preferred for cooking ease. The internal organs are removed, and the product is chilled before blast freezing.',
  },
  {
    label: 'Supply Formats',
    question: 'Is crab supplied live, fresh-chilled, or frozen?',
    answer:
      'AVLA Exports specialises in frozen crab products. Whole frozen crabs are typically supplied as cleaned whole units with the apron removed. Fresh-chilled or live supply is subject to logistics feasibility and regional inquiry.',
  },
  {
    label: 'Size Grades',
    question: 'How are crabs graded by size?',
    answer:
      'Crabs are graded by individual piece weight - typical grades include 100-150g, 150-200g, 200-300g, 300-400g, and 400g+. For Blue Swimming Crab, shell width grading (8-10 cm, 10-12 cm, 12+ cm) is also available.',
  },
  {
    label: 'Culinary Uses',
    question: 'What are the culinary applications of Blue Swimming Crab?',
    answer:
      'Blue Swimming Crab is used in a wide range of cuisines - Southeast Asian crab curry, Sri Lankan crab dishes, Chinese chilli or black pepper crab, Mediterranean-style crab pasta, and as a base for crab meat extraction for pasteurised crab meat products.',
  },
  {
    label: 'Crab Meat',
    question: 'Can AVLA supply crab meat separately from the shell?',
    answer:
      'Pasteurised crab meat (claw meat, lump, special, backfin) can be arranged subject to volume and production scheduling. Please contact our sales team for specifications and minimum order quantities for crab meat products.',
  },
  {
    label: 'Quality Checks',
    question: 'What quality checks are applied to crab before export?',
    answer:
      'Crabs undergo live/freshness inspection at receipt, microbiological testing (Salmonella, E. coli, TPC), heavy metal screening, and sensory evaluation. Only product meeting export-grade quality standards is packed.',
  },
  {
    label: 'Packaging',
    question: 'What packaging is used for frozen crab exports?',
    answer:
      'Whole and cut crabs are individually wrapped in polyethylene film, packed in master cartons of 10 kg or 20 kg. IQF cartons are standard. Custom retail packs (2-crab or 4-crab tray packs) can be arranged for retail buyers.',
  },
  {
    label: 'Export Markets',
    question: 'What markets does AVLA supply crab to?',
    answer:
      'Primary markets include China, Singapore, Malaysia, the United Arab Emirates, and European countries including Portugal and Spain, where crab is a popular seafood delicacy.',
  },
  {
    label: 'Shelf Life',
    question: 'What is the shelf life of frozen crab?',
    answer:
      'Frozen whole and cut crabs stored at -18°C have a shelf life of 12-18 months. As with all shellfish, maintaining unbroken cold chain from processing to retail is critical to preserving texture and flavour.',
  },
];

export const lobsterFaqs = [
  {
    label: 'Varieties',
    question: 'What lobster varieties does AVLA Exports supply?',
    answer:
      'AVLA Exports supplies three varieties of lobster: Deep Sea Lobster (Metanephrops spp.), Spiny Lobster (Panulirus spp.), and Sand Lobster (Thenus spp.) - all sourced from the deep and coastal waters off the Kerala coast.',
  },
  {
    label: 'Types',
    question: 'What are the differences between Deep Sea, Spiny, and Sand Lobster?',
    answer:
      'Deep Sea Lobster (also called Norway Lobster equivalent in Indian waters) has slender claws and delicate sweet flesh. Spiny Lobster is large, claw-free, and prized for its tail meat. Sand Lobster (Moreton Bay Bug equivalent) is flat-bodied, suited for grilling and is popular in Australian and European markets.',
  },
  {
    label: 'Supply Formats',
    question: 'Are lobsters supplied live, fresh, or frozen?',
    answer:
      'AVLA Exports primarily supplies frozen lobster (whole or tails). Live lobster export is possible for select regional markets subject to air freight logistics and local import regulations. Please inquire for live product availability.',
  },
  {
    label: 'Product Forms',
    question: 'What product forms are available for lobster?',
    answer:
      'Lobster is available as Whole (Raw Frozen), Whole Cooked Frozen, Tails (Raw Frozen), and Split Tails. Green (raw) tail products are the most commonly exported format. Custom processing on request.',
  },
  {
    label: 'Size Grades',
    question: 'How are lobsters size-graded?',
    answer:
      'Lobsters are graded by whole-body weight - common grades for Spiny Lobster include 200-300g, 300-500g, 500-700g, 700g-1 kg, and 1 kg+. Tails are graded in ounces (2-4 oz, 4-6 oz, 6-8 oz, 8 oz+).',
  },
  {
    label: 'Shelf Life',
    question: 'What is the shelf life of frozen lobster?',
    answer:
      'Raw frozen lobster stored at -18°C maintains optimal quality for 12-18 months. Cooked frozen lobster is best consumed within 12 months. Vacuum packaging is standard to protect against freezer burn.',
  },
  {
    label: 'Export Markets',
    question: 'Which markets does AVLA export lobster to?',
    answer:
      'Key markets include China (premium live and frozen), the European Union (Spain, France, Italy), the United States (Spiny Lobster tails), and the Middle East. Each market is served with appropriate quality and regulatory documentation.',
  },
  {
    label: 'Export Compliance',
    question: 'What permits or certifications are required for lobster exports?',
    answer:
      "Lobster exports require MPEDA health certificates, fisheries licences, CITES-compliance confirmation (for monitored species), and destination-country import permits. AVLA's export team manages all documentation end-to-end.",
  },
  {
    label: 'Sourcing',
    question: 'Is the lobster sustainably caught?',
    answer:
      'AVLA sources lobsters from fishing vessels operating under Indian Fisheries regulations, with size-limit compliance to prevent juvenile harvesting. We are committed to responsible sourcing practices as part of our long-term supply strategy.',
  },
  {
    label: 'Foodservice Supply',
    question: 'Can AVLA supply lobster tails in bulk for restaurant chains or hotel groups?',
    answer:
      'Yes. We regularly supply lobster tails and split tails to foodservice distributors, hotel chains, and restaurant groups across global markets. Bulk pricing, custom grading, and dedicated production scheduling are available for regular buyers.',
  },
];

export const bivalveFaqs = [
  {
    label: 'Bivalve Products',
    question: 'What bivalve products does AVLA Exports supply beyond Bigai?',
    answer:
      'In addition to Bigai (Ark Clam), AVLA Exports supplies Yellow Clam and Green Mussels (Perna viridis) - both highly sought-after bivalves in global seafood markets.',
  },
  {
    label: 'Yellow Clam',
    question: 'What is Yellow Clam and where is it used?',
    answer:
      'Yellow Clam (Meretrix spp.) is a medium-sized marine clam with a distinctive yellowish shell. It is popular in Asian cuisines - particularly in Chinese, Thai, and Vietnamese cooking - where it is steamed, stir-fried, or used in congee and soups.',
  },
  {
    label: 'Product Forms',
    question: 'What forms of Yellow Clam are available?',
    answer:
      'Yellow Clam is supplied as whole-in-shell frozen, half-shell cooked frozen, and as extracted clam meat (IQF or block frozen). Size grading by count per kilogram or shell width is available on request.',
  },
  {
    label: 'Green Mussels',
    question: 'What are Green Mussels and how do they differ from Blue Mussels?',
    answer:
      'Green Mussels (Perna viridis), also known as Asian Green Mussels or New Zealand-type mussels, are larger than Atlantic Blue Mussels with a distinctive green shell edge. Their sweet, firm flesh and premium presentation make them popular in foodservice globally.',
  },
  {
    label: 'Mussel Formats',
    question: 'What forms of Green Mussels does AVLA Exports offer?',
    answer:
      'Green Mussels are available as: Whole-in-Shell (cooked and frozen), Half-Shell Mussels (cooked, on shell, IQF), Mussel Meat (extracted, IQF or block), and Stuffed Mussels on request for value-added applications.',
  },
  {
    label: 'Shelf Life',
    question: 'What is the shelf life of frozen Green Mussels and Yellow Clam?',
    answer:
      'Both products stored at -18°C have a shelf life of 12-18 months. Cooked half-shell mussels and clam meat maintain optimal eating quality when consumed within 12 months of production.',
  },
  {
    label: 'Biotoxin Testing',
    question: 'What microbiological and biotoxin testing is conducted on bivalves?',
    answer:
      'Bivalves are tested for E. coli, Salmonella, Vibrio, Paralytic Shellfish Poison (PSP), Diarrhetic Shellfish Poison (DSP), and Amnesic Shellfish Poison (ASP) as per EU and international food safety standards.',
  },
  {
    label: 'Sourcing',
    question: 'Are the Green Mussels wild-caught or farmed?',
    answer:
      'AVLA primarily works with wild-harvested Green Mussels from approved production areas. Aquaculture-sourced mussels are also available from certified mussel farms subject to availability and order volume.',
  },
  {
    label: 'Packaging',
    question: 'What is the typical packaging for mussel exports?',
    answer:
      'Half-shell mussels are individually IQF and packed in 1 kg or 2 kg bags in 10 kg master cartons. Whole mussels are packed in mesh bags or loose-frozen bulk packs. Custom retail packs with MAP are available.',
  },
  {
    label: 'Export Documents',
    question: 'What documentation accompanies bivalve exports?',
    answer:
      'All bivalve exports from AVLA are accompanied by a Shellfish Health Certificate, Biotoxin Test Report, Microbiological Certificate, Certificate of Origin, and destination-market-specific import clearance documents.',
  },
];

export const needleSquidFaqs = [
  {
    label: 'Squid Types',
    question: 'What is Semi Needle Squid and how does it differ from LOLIGO Squid?',
    answer:
      'Semi Needle Squid is a smaller-species squid (Uroteuthis chinensis or related spp.) with a semi-transparent pen. It differs from LOLIGO (Loligo duvaucelii) in body shape, texture, and size profile. Semi Needle is popular in Japanese, Korean, and Southeast Asian markets where smaller squid is preferred.',
  },
  {
    label: 'Needle Squid',
    question: 'What is Needle Squid and what form does AVLA supply it in?',
    answer:
      'Needle Squid (Doryteuthis spp. or similar slender-penned squid) is a slender, small-to-medium squid species. AVLA Exports supplies Needle Squid in whole block frozen form (3 x 4 kg or 6 x 2 kg) across standard size grades.',
  },
  {
    label: 'Frozen Formats',
    question: 'What processing formats are available for Semi Needle Squid?',
    answer:
      'Semi Needle Squid is available in three freezing formats: Blast AA quality (highest grade, flash frozen), Block quality (plate frozen), and Individually Frozen (IQF) - all in standard 3 x 4 kg or 6 x 2 kg master cartons.',
  },
  {
    label: 'Size Grades',
    question: 'What size grades apply to Semi Needle and Needle Squid?',
    answer:
      'Both are available in standard squid size grades: U2 (under 2 pcs/kg - very large), U3, 3/6, 6/10, 10/20, and 20/40. The appropriate grade depends on the buyer\'s target application and market segment.',
  },
  {
    label: 'Food Applications',
    question: 'What are the culinary applications of Semi Needle and Needle Squid?',
    answer:
      'Both squid types are used in a wide range of applications - stir-fried squid, karaage, tempura, grilled whole squid, marinated squid (ojingeo-muchim in Korea), and seafood pizza toppings. Their slender shape makes them attractive for whole grilled presentation.',
  },
  {
    label: 'Quality Grades',
    question: 'How does Blast AA quality differ from Block quality for Semi Needle Squid?',
    answer:
      'Blast AA quality squid is frozen immediately after catch at ultra-low temperatures, preserving superior skin colour, lustre, and texture. Block quality is plate-frozen and may show minor cosmetic variations but maintains equivalent food safety and flavour profile.',
  },
  {
    label: 'Shelf Life',
    question: 'What is the shelf life of Semi Needle and Needle Squid?',
    answer:
      'Both varieties stored at -18°C have a shelf life of 18-24 months for block frozen product and 12-18 months for IQF format. Continuous cold chain maintenance is essential to preserve skin integrity and avoid discolouration.',
  },
  {
    label: 'Cleaned Tubes',
    question: 'Can Semi Needle Squid be supplied cleaned (tube only)?',
    answer:
      'Cleaned Semi Needle Squid (tube only, pen removed, viscera removed) can be arranged on specific request. Due to the smaller body size of the species, cleaning is more labour-intensive. Please discuss pricing and MOQ with our export team.',
  },
  {
    label: 'Export Markets',
    question: 'Which markets primarily import Semi Needle and Needle Squid from India?',
    answer:
      'Japan, South Korea, China, Taiwan, and Southeast Asian countries (Thailand, Vietnam, Philippines) are the primary importers of Semi Needle and Needle Squid. European buyers use them in calamari and seafood mix products.',
  },
  {
    label: 'Pricing Inquiry',
    question: 'How do I request pricing and availability for Semi Needle or Needle Squid?',
    answer:
      'Contact AVLA Exports at info@avlaexports.com or call +91 9446017777. Share your target species, quality grade, size, quantity, packaging format, and destination port. Our team will provide a competitive CIF/FOB quotation within 48 hours.',
  },
];

export const baigaiFaqs = [
  {
    label: 'Ark Clams',
    question: 'What is Bigai and what varieties does AVLA Exports supply?',
    answer:
      'Bigai refers to Ark Clams (Tegillarca granosa and related species), available in two shell types: Short and Long. Each is graded by piece count per kilogram: 20/30, 30/50, 50/80, 80/120, and 120/up.',
  },
  {
    label: 'Size Grades',
    question: 'What do the size grades (e.g., 20/30 or 50/80) for Bigai refer to?',
    answer:
      'The size grades indicate the number of pieces per kilogram. For example, 20/30 means 20 to 30 individual clams per kilogram - a larger, heavier grade - while 120/up means 120 or more pieces per kilogram, indicating smaller clam sizes.',
  },
  {
    label: 'Shell Types',
    question: 'What is the difference between Short and Long Bigai?',
    answer:
      'Short Bigai has a more rounded, compact shell, while Long Bigai has an elongated oval shell. Both varieties are similar in flavour but may differ in meat yield and texture, with buyer preference often depending on target market tradition.',
  },
  {
    label: 'Supply Formats',
    question: 'Are Bigai supplied live, cooked, or frozen?',
    answer:
      'AVLA Exports supplies Bigai as frozen whole-in-shell products. Half-shell Bigai (cooked and on the half shell) and Bigai meat (extracted) may also be available on specific request for retail and foodservice buyers.',
  },
  {
    label: 'Fish Processing',
    question: 'How is Bigai processed and frozen?',
    answer:
      'Bigai are purged and cleaned upon receipt, then individually quick frozen (IQF) or block frozen. Cooked half-shell Bigai are steam-cooked, individually frozen, and packed in master cartons for retail presentation.',
  },
  {
    label: 'Culinary Uses',
    question: 'What are the culinary uses of Bigai?',
    answer:
      'Bigai (Ark Clams) are popular in Chinese, Vietnamese, Thai, and Malaysian cuisines - commonly stir-fried in black bean or chilli sauce, steamed in the half shell, or used in seafood soups and noodle dishes.',
  },
  {
    label: 'Packaging',
    question: 'What is the typical packaging for Bigai exports?',
    answer:
      'IQF whole Bigai is packed in 1 kg or 2 kg retail bags, placed in 10 kg master cartons. Block-frozen Bigai meat is packed in 10 kg cartons. Retail-ready tray packs with MAP are available for supermarket buyers.',
  },
  {
    label: 'Shelf Life',
    question: 'What is the shelf life of frozen Bigai?',
    answer:
      'Frozen Bigai stored at -18°C has a shelf life of 12-18 months. Buyers should verify seal integrity and internal temperature upon receipt and ensure compliant cold storage during distribution.',
  },
  {
    label: 'Quality Control',
    question: 'What quality controls apply to Bigai processing?',
    answer:
      'Bigai undergo depuration (purging in clean seawater), shell inspection, microbiological testing (E. coli, Salmonella, Vibrio), and heavy metal analysis (cadmium, lead, mercury) before export clearance.',
  },
  {
    label: 'Export Markets',
    question: 'Which markets primarily import Bigai from AVLA?',
    answer:
      "The primary markets for Bigai are China, Vietnam, Taiwan, South Korea, and Malaysia, where Ark Clams are a culturally significant ingredient. Middle Eastern markets are an emerging growth area for AVLA's bivalve exports.",
  },
];
