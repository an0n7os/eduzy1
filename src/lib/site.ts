import accounting from "@/assets/accounting.jpg";
import logistics from "@/assets/logistics.jpg";
import aviation from "@/assets/aviation.jpg";
import designing from "@/assets/designing.jpg";
import digital from "@/assets/digital.jpg";
import business from "@/assets/business.jpg";

export const contact = {
  phone: "+91 9567 2222 68",
  whatsapp: "919567222268",
  email: "eduzyacademy@gmail.com",
  address: "Vyttila, Ernakulam & Thrissur, Kerala",
};

export const centres = [
  { name: "Ernakulam Centre", lines: ["3rd Floor, Style Plaza", "Near Vyttila Mobility Hub Exit", "Vyttila, Ernakulam, Kerala"] },
  { name: "Thrissur Centre", lines: ["2nd Floor, Chembottil Lane", "Near New Ragam Theatre", "Thrissur, Kerala – 680001"] },
];

export type Course = {
  slug: string;
  no: string;
  title: string;
  tagline: string;
  desc: string;
  overview: string;
  modules: string[];
  syllabus: { title: string; points: string[] }[];
  careers: string[];
  highlights: string[];
  eligibility: string;
  duration: string;
  mode: string;
  image: string;
};

export const courses: Course[] = [
  {
    slug: "accounting",
    no: "01",
    title: "Accounting",
    tagline: "Numbers that build careers.",
    desc: "Masters, diplomas and software programmes in global accounting, taxation, SAP, Excel and Tally with GST / GCC VAT.",
    overview: "Our accounting programmes combine strong theory with practical, industry-oriented learning — from Indian and international accounting to IFRS, taxation, financial management and professional software like SAP FICO, SAP MM, Advanced Excel and Tally with GST / GCC VAT.",
    modules: ["Masters in Global Accounting", "SAP FICO", "Tally with GST / GCC VAT", "Advanced MS Excel", "IFRS"],
    syllabus: [
      { title: "Masters in Global Accounting", points: ["Global Accounting", "International Financial Reporting", "Financial Management", "International Accounting Standards", "Financial Analysis", "Corporate Finance", "International Business Finance"] },
      { title: "Advanced Diploma in International Accounting", points: ["Indian Accounting", "International Accounting", "Financial Reporting", "IFRS", "Taxation", "Banking", "Financial Management", "Financial Services"] },
      { title: "Diploma in Indian & Foreign Accounting", points: ["Financial Accounting", "Indian Accounting", "Foreign Accounting", "Bookkeeping", "Financial Statements", "Taxation", "Accounting Procedures"] },
      { title: "Diploma in Corporate Accounts & Taxation", points: ["Corporate Accounting", "Financial Statements", "Taxation", "Compliance", "Accounts Management", "Business Finance", "Practical Accounting"] },
      { title: "Advanced Diploma in Financial Management", points: ["Financial Management", "Financial Planning", "Financial Analysis", "Investment Management", "Business Finance", "Resource Management", "Financial Decision-Making"] },
      { title: "SAP FICO", points: ["SAP Financial Accounting", "SAP Controlling", "General Ledger", "Accounts Payable", "Accounts Receivable", "Asset Accounting", "Financial Reporting", "Business Processes"] },
      { title: "SAP MM", points: ["Materials Management", "Procurement", "Purchasing", "Inventory Management", "Vendor Management", "Material Planning", "Supply Management"] },
      { title: "Advanced MS Excel", points: ["Advanced Formulas", "Functions", "Data Analysis", "Data Management", "Financial Modelling", "Reports", "Charts", "Business Analysis"] },
      { title: "Tally with GST / GCC VAT", points: ["Tally", "Bookkeeping", "GST", "GCC VAT", "Invoicing", "Taxation", "Financial Records", "Accounting Reports"] },
    ],
    careers: ["Accounts Executive", "Accountant (India & GCC)", "Tax Assistant", "SAP FICO Consultant", "SAP MM Executive", "Financial Analyst", "Audit Assistant", "MIS Executive"],
    highlights: ["Practical learning", "Experienced trainers", "Certification for relevant programs", "Placement assistance"],
    eligibility: "Plus Two / Degree — eligibility varies by program",
    duration: "Short-term to 1 year",
    mode: "Offline & Online",
    image: accounting,
  },
  {
    slug: "logistics",
    no: "02",
    title: "Logistics & Supply Chain",
    tagline: "Master the flow of global business.",
    desc: "Diploma in Logistics & Supply Chain Management covering warehousing, inventory, international trade and shipping.",
    overview: "Build professional knowledge in logistics, transportation, warehousing, inventory, procurement, supply-chain operations, international trade and shipping. Designed for students who want careers in logistics, supply-chain management, warehouse operations, shipping, procurement and international business.",
    modules: ["Logistics Management", "Warehouse Management", "Export & Import Trade", "Shipping & Port Management", "Supply Chain Management"],
    syllabus: [
      { title: "Logistics Management", points: ["Logistics operations fundamentals", "Transportation management", "Distribution & movement of goods"] },
      { title: "Warehouse Management", points: ["Warehouse operations & storage systems", "Inventory handling", "Warehouse planning & efficiency"] },
      { title: "Inventory Management", points: ["Inventory planning", "Stock control", "Inventory optimization"] },
      { title: "Supply Chain Coordination", points: ["Suppliers & manufacturers", "Distributors & logistics providers", "Customer coordination"] },
      { title: "Supply Chain Management", points: ["Procurement & distribution", "Supply-chain planning", "Process optimization"] },
      { title: "Export & Import Trade", points: ["International trade processes", "Export & import procedures", "Trade documentation"] },
      { title: "International Trade Documentation", points: ["Trade documents", "Shipping procedures", "Compliance basics"] },
      { title: "International Marketing Management", points: ["Global markets", "International marketing strategy", "Customer behaviour"] },
      { title: "International Business Management", points: ["Global business operations", "Cross-cultural management", "Business strategy"] },
      { title: "Shipping & Port Management", points: ["Shipping operations", "Port management", "Cargo handling"] },
    ],
    careers: ["Logistics Executive", "Supply Chain Coordinator", "Warehouse Supervisor", "Shipping Executive", "Procurement Executive", "Export–Import Executive", "Inventory Controller"],
    highlights: ["Industry-oriented curriculum", "Real-world case studies", "Industry exposure", "Placement assistance"],
    eligibility: "Plus Two / Degree in any stream",
    duration: "Diploma programme",
    mode: "Offline & Online",
    image: logistics,
  },
  {
    slug: "designing",
    no: "03",
    title: "Designing",
    tagline: "Where creativity meets career.",
    desc: "Diplomas in Interior, Fashion, Graphic, Animation & VFX and Web Designing.",
    overview: "Develop creative and technical skills across five professional design diplomas — interior, fashion, graphic, animation & VFX and web designing — with practical projects, industry software and portfolio building.",
    modules: ["Interior Designing", "Fashion Designing", "Graphic Designing", "Animation & VFX", "Web Designing"],
    syllabus: [
      { title: "Diploma in Interior Designing", points: ["Space Planning", "Interior Concepts", "Colour Theory", "Furniture Selection", "Materials", "Lighting", "Interior Styling", "Functional Design"] },
      { title: "Diploma in Fashion Designing", points: ["Fashion Illustration", "Garment Construction", "Fabric Selection", "Fashion Styling", "Fashion Trends", "Design Development", "Pattern Concepts", "Creative Design"] },
      { title: "Diploma in Graphic Designing", points: ["Graphic Design", "Typography", "Colour Theory", "Layout Design", "Image Editing", "Branding", "Digital Design", "Print Design"] },
      { title: "Diploma in Animation & VFX", points: ["Animation Principles", "3D Modelling", "Texturing", "Lighting", "Visual Effects", "Compositing", "Digital Production", "Creative Animation"] },
      { title: "Diploma in Web Designing", points: ["Web Design", "UI Design", "Responsive Design", "Website Development", "HTML", "CSS", "User Interface", "Website Optimization"] },
    ],
    careers: ["Interior Designer", "Fashion Designer", "Graphic Designer", "Animator / VFX Artist", "Web Designer", "UI Designer", "Brand Designer"],
    highlights: ["Portfolio projects", "Industry software", "Creative studio sessions", "Placement assistance"],
    eligibility: "Plus Two and above",
    duration: "Diploma programmes",
    mode: "Offline",
    image: designing,
  },
  {
    slug: "aviation",
    no: "04",
    title: "Aviation",
    tagline: "Build your career in the skies.",
    desc: "Airport management, ground staff, cabin crew and aviation hospitality training with in-flight exposure.",
    overview: "Prepare for exciting opportunities in the aviation and airport industry. Our training develops technical knowledge, professional behaviour, communication skills, grooming, customer service abilities and workplace confidence.",
    modules: ["Airport Management", "Cabin Crew Training", "Ground Staff Training", "Grooming & Personality", "In-Flight Training"],
    syllabus: [
      { title: "Airport & Aviation Management", points: ["Airport operations & administration", "Passenger services & airport departments", "Airline management & aviation business"] },
      { title: "Ground Staff Training", points: ["Ground operations", "Passenger handling & check-in", "Airport support services"] },
      { title: "Cabin Crew Training", points: ["Customer service & communication", "Safety awareness", "Professional behaviour"] },
      { title: "Aviation Hospitality & CRM", points: ["Hospitality skills", "Complaint management", "Service excellence"] },
      { title: "Grooming & Communicative English", points: ["Professional appearance & etiquette", "Confidence & personality", "English for aviation"] },
      { title: "Practical & Career", points: ["First aid training", "Industry exposure & in-flight training", "Mock interviews & placement assistance"] },
    ],
    careers: ["Cabin Crew", "Ground Staff", "Airport Operations Executive", "Customer Service Agent", "Ticketing Executive", "Aviation Hospitality Staff"],
    highlights: ["In-flight training", "Grooming sessions", "Mock interviews", "Placement assistance"],
    eligibility: "Plus Two and above",
    duration: "Diploma programme",
    mode: "Offline",
    image: aviation,
  },
  {
    slug: "digital-marketing",
    no: "05",
    title: "Digital & Influencer Marketing",
    tagline: "Grow brands. Grow your influence.",
    desc: "Master SEO, social media, ads and the creator economy — and learn to build your own personal brand.",
    overview: "A hands-on programme covering performance marketing and the fast-growing influencer economy. Run real ad campaigns, grow social pages, plan brand collaborations and learn to monetise content as a creator.",
    modules: ["SEO & Content", "Social Media Marketing", "Google & Meta Ads", "Influencer Marketing", "Personal Branding"],
    syllabus: [
      { title: "Digital Foundations", points: ["Marketing funnels", "Website & WordPress basics", "SEO & keyword research"] },
      { title: "Social & Paid Ads", points: ["Instagram, YouTube & LinkedIn", "Meta Ads Manager", "Google Search & YouTube Ads"] },
      { title: "Influencer Marketing", points: ["Creator strategy & niches", "Brand collaborations & pitching", "Campaign ROI tracking"] },
      { title: "Content & Analytics", points: ["Reels & short video", "Google Analytics 4", "Email & WhatsApp marketing"] },
    ],
    careers: ["Digital Marketing Executive", "Social Media Manager", "Performance Marketer", "Influencer Manager", "Content Creator", "SEO Specialist"],
    highlights: ["Live ad budget practice", "Creator studio sessions", "Google & Meta certifications", "Placement assistance"],
    eligibility: "Plus Two and above — students, creators & business owners",
    duration: "4 months",
    mode: "Offline & Online",
    image: digital,
  },
  {
    slug: "entrepreneurship",
    no: "06",
    title: "Entrepreneurship & Business",
    tagline: "Turn ideas into businesses.",
    desc: "Learn to plan, launch and scale a business — from idea validation to funding and growth.",
    overview: "Built for aspiring founders and family-business successors. Learn business modelling, finance, sales, branding and legal basics, then build and pitch your own business plan to a panel of mentors.",
    modules: ["Idea Validation", "Business Planning", "Sales & Branding", "Finance & Funding", "Legal & Compliance"],
    syllabus: [
      { title: "Idea to Model", points: ["Opportunity spotting", "Market research & validation", "Business Model Canvas"] },
      { title: "Sales & Marketing", points: ["Brand building", "Sales strategy & negotiation", "Customer acquisition"] },
      { title: "Finance & Funding", points: ["Costing & pricing", "Cash flow & P&L", "Startup funding & schemes"] },
      { title: "Launch & Scale", points: ["Company registration & GST", "Team building & leadership", "Pitch-deck & demo day"] },
    ],
    careers: ["Startup Founder", "Business Development Manager", "Family Business Leader", "Sales Manager", "Franchise Owner", "Business Consultant"],
    highlights: ["Mentor sessions", "Real business plan", "Demo day pitch", "Startup network access"],
    eligibility: "Plus Two and above — students, professionals & business owners",
    duration: "3 months",
    mode: "Offline & Online",
    image: business,
  },
];
