import heroImage from "../assets/hero-saree.svg";
import weddingImage from "../assets/collection-wedding.svg";
import designerImage from "../assets/collection-designer.svg";
import festivalImage from "../assets/collection-festival.svg";
import dailyWearImage from "../assets/collection-dailywear.svg";
import gallery1 from "../assets/gallery-1.svg";
import gallery2 from "../assets/gallery-2.svg";
import gallery3 from "../assets/gallery-3.svg";
import gallery4 from "../assets/gallery-4.svg";
import gallery5 from "../assets/gallery-5.svg";
import gallery6 from "../assets/gallery-6.svg";

const content = {
  company: {
    name: "Seema Sarees",
    tagline: "Crafting premium saree collections for retailers and wholesalers",
    description:
      "Seema Sarees is a trusted saree manufacturer delivering high-quality sarees with a focus on reliability, craftsmanship, and long-term business partnerships.",
    address: "D-1186 Ground floor Mellennium Market - 1 Ring Road Surat, Gujarat",
    phone: "+91 90169 15322",
    email: "seemasarees2610@gmail.com",
    hours: "Mon - Sat: 9:30 AM - 8:00 PM",
    whatsapp: "https://wa.me/919016915322",
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Collections", href: "#collections" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reach", href: "#reach" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    title: "Seema Sarees",
    subtitle: "Trusted saree manufacturing for retailers and wholesale buyers",
    description:
      "Bringing premium textiles, elegant craftsmanship, and reliable service to saree retailers across India.",
    image: heroImage,
    ctaPrimary: "View Collections",
    ctaSecondary: "Contact Us",
  },
  stats: [
    { label: "Years Experience", value: "16+" },
    { label: "Retail Partners", value: "500+" },
    { label: "Cities Served", value: "20+" },
    { label: "Designs Created", value: "1000+" },
  ],
  about: {
    title: "About Seema Sarees",
    paragraphs: [
      "With over 16 years of expertise, Seema Sarees partners with retailers, semi-wholesalers, and distributors to deliver curated saree collections that reflect trust and premium fabric quality.",
      "Our commitment is to provide consistent delivery, thoughtful design, and a streamlined procurement experience for business buyers.",
    ],
  },
  collections: [
    {
      name: "Wedding Collection",
      description:
        "Luxurious sarees crafted for wedding seasons and special celebrations.",
      image: weddingImage,
    },
    {
      name: "Designer Collection",
      description:
        "Signature designer sarees with rich textures, patterns and modern appeal.",
      image: designerImage,
    },
    {
      name: "Festival Collection",
      description:
        "Festive sarees with vibrant colors and traditional detailing.",
      image: festivalImage,
    },
    {
      name: "Daily Wear Collection",
      description:
        "Comfortable and stylish sarees for everyday wholesale orders.",
      image: dailyWearImage,
    },
  ],
  gallery: [
    { title: "Elegance in Print", image: gallery1 },
    { title: "Rich Fabric Texture", image: gallery2 },
    { title: "Premium Weave Details", image: gallery3 },
    { title: "Contemporary Style", image: gallery4 },
    { title: "Fine Embroidery", image: gallery5 },
    { title: "Graceful Drapes", image: gallery6 },
  ],
  features: [
    {
      title: "Premium Quality",
      description:
        "Carefully selected materials and refined finishing for every saree.",
    },
    {
      title: "Competitive Pricing",
      description: "Wholesale-friendly rates that support retail margins.",
    },
    {
      title: "On-Time Delivery",
      description:
        "Reliable dispatch and logistics support for business buyers.",
    },
    {
      title: "Latest Designs",
      description: "Seasonal collections curated for modern market demand.",
    },
    {
      title: "Trusted Partnerships",
      description: "Strong relationships with retailers across key regions.",
    },
  ],
  cities: [
    "Uttar Pradesh",
    "Madhya Pradesh",
    "Agra",
    "Kanpur",
    "Lucknow",
    "Indore",
  ],
  inquiry: {
    title: "Wholesale Inquiry",
    description:
      "Tell us about your requirements and our team will connect with you for the next step.",
    fields: {
      name: "Name",
      phone: "Mobile Number",
      city: "City",
      type: "Business Type",
      message: "Message",
    },
  },
  footer: {
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "Collections", href: "#collections" },
      { label: "Contact", href: "#contact" },
    ],
  },
};

export default content;
