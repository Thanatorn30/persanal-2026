// ข้อมูลทั้งหมดของหน้า Home — แก้ข้อความ/ลิงก์/รูปได้ที่ไฟล์นี้ไฟล์เดียว
// รูป (avatar / image) ถ้าเว้นว่างไว้ จะแสดง placeholder gradient แทน (วางรูปไว้ใน /public แล้วใส่ path เช่น "/assets/img/me.jpg")

export const profile = {
  shortName: "Alex",
  fullName: "Alex Carter",
  role: "UI/UX Designer & Front-end Developer",
  location: "Bangkok, Thailand",
  phone: "(+66) 81 234 5678",
  email: "hello@alexcarter.dev",
  avatar: "",
  bio: "Results-driven designer and developer with 5+ years of experience crafting digital products, building brand systems and shipping fast, polished websites.",
  cvUrl: "#",
  portfolio: "alexcarter.dev",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Services", href: "#services" },
];

export const brandLogos = ["Lumen", "Northpeak", "Orbit", "Pulsse", "Fitloop", "Learnly", "Vertex", "Kinetic"];

export const about = {
  text: "I am a motivated and detail-oriented professional with a passion for creating meaningful results and solving complex challenges. I bring strong communication, teamwork, and problem-solving skills.",
  stats: [
    { value: "50+", label: "Projects completed" },
    { value: "30+", label: "Happy clients" },
    { value: "15+", label: "Skills & tools" },
  ],
};

export const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Figma",
  "Design",
  "UI/UX",
  "AWS",
  "Styled Components",
  "Node.js",
  "Docker",
  "Agile",
  "Git",
  "GSAP",
];

export const experience = [
  { period: "2022 – Present", company: "Brightline Digital — Bangkok", detail: "Led product design and front-end for multi-platform web apps." },
  { period: "2020 – 2022", company: "Pixel Harbor — Bangkok", detail: "Designed and built marketing sites and design systems for clients." },
  { period: "2018 – 2020", company: "Studio Nine — Chiang Mai", detail: "Developed responsive websites and landing pages for local brands." },
];

export const education = [
  {
    period: "2020 – 2021",
    title: "Postgraduate in User Experience Design",
    detail: "Specialized in UX strategy, user research, and prototyping. The program deepened my ability to design user-centered products.",
  },
  {
    period: "Year 2018",
    title: "B.Sc. Computer Science — Bangkok",
    detail: "Focused on software engineering, human-computer interaction and web technologies.",
  },
];

export const projects = [
  { name: "Worknest", title: "Team workspace dashboard", image: "", tone: ["#8d8d8d", "#d9d9d9"], href: "#" },
  { name: "Nexora", title: "Patient booking website", image: "", tone: ["#0e2a6b", "#4f7cff"], href: "#" },
  { name: "Driftly", title: "Async video messaging app", image: "", tone: ["#1a1a1a", "#bdbdbd"], href: "#" },
  { name: "Veyra", title: "Telehealth mobile app", image: "", tone: ["#000000", "#3a3a3a"], href: "#" },
];

export const services = [
  { icon: "dashboard", title: "UI/UX Design", detail: "Designing intuitive, user-friendly interfaces that look great and are easy to use." },
  { icon: "brand", title: "Brand Design", detail: "Creating memorable visual identities, from logos and colors to typography." },
  { icon: "target", title: "Landing Page Design", detail: "Building conversion-focused landing pages with clear messaging and strong CTAs." },
  { icon: "code", title: "Front-end Development", detail: "Building fast, responsive, and fully functional websites with modern tooling." },
];

export const pricing = [
  {
    name: "Starter",
    price: "$299",
    unit: "/ Project",
    detail: "A simple, affordable way to launch a polished one-page website fast.",
    features: ["1 Landing page", "Responsive design", "Mobile optimization", "Contact form setup", "2 Revisions", "Email support", "7-day delivery"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$598",
    unit: "/ Project",
    detail: "A complete multi-page website for growing brands that need more.",
    features: ["Up to 5 pages", "Custom UI/UX design", "CMS & blog setup", "Basic SEO setup", "4 Revisions", "Priority support", "14-day delivery"],
    popular: true,
  },
];

export const testimonials = [
  { quote: "Alex turned our rough idea into a clean, modern website in under two weeks. Communication was clear, and the result exceeded expectations.", name: "Mark Sullivan", role: "Founder, Pulsse Studio" },
  { quote: "Excellent attention to detail. Our marketing site looks professional, works perfectly on mobile, and users find it easy to navigate.", name: "Kevin Turner", role: "Product Manager, Fitloop" },
  { quote: "From the first wireframe to launch, everything was handled professionally. The design captures our brand and our students love it.", name: "David Anderson", role: "Co-founder, Learnly" },
  { quote: "Fast, reliable, and great to work with. The brand identity and website came together beautifully and were delivered on time.", name: "Ryan Mitchell", role: "Creative Lead, Orbit Agency" },
  { quote: "Our new landing page looks sharp and converts far better than the old one. The whole process felt simple, fast, and organized.", name: "James Carter", role: "Marketing Director" },
  { quote: "Every section was thoughtfully designed, and the site is easy for our team to update. I would definitely work together again.", name: "Robert Hayes", role: "CEO, Northpeak Labs" },
];

export const faqs = [
  { question: "How long does a project take?", answer: "Most projects are completed within 7–14 business days. A single landing page usually takes about a week, while multi-page websites take up to two weeks." },
  { question: "What services do you offer?", answer: "UI/UX design, brand identity, landing pages and front-end development — from first sketch to a live, responsive website." },
  { question: "How much does a website cost?", answer: "Pricing starts at $299 for a one-page site. Larger projects are quoted based on the number of pages and features." },
  { question: "How many revisions are included?", answer: "The Starter plan includes 2 revisions and the Professional plan includes 4. Extra rounds can be added anytime." },
  { question: "Will my website work on mobile devices?", answer: "Yes. Every site is designed and tested for mobile, tablet and desktop screens." },
  { question: "Can I update the website myself after launch?", answer: "Absolutely. I set up an easy editing workflow and walk you through it before handover." },
  { question: "How do we get started?", answer: "Book a free call or send a message through the form below. We'll discuss your goals and I'll send a proposal within 24 hours." },
];

export const contactOptions = {
  services: ["UI/UX Design", "Front-end Development", "Brand Logo Design", "Landing Page Design"],
  budgets: ["$500", "$800", "$1,200", "$2,000"],
};

export const footer = {
  headline: "Have a project in mind? Let’s build something great together.",
  menu: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
  ],
  social: [
    { label: "X (Twitter)", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};
