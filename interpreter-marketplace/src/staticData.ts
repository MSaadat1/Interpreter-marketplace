import type { TestimonialItem } from "./types";
import type { TrustBuilderDataType } from "./types";
import type { FAQItem } from "./types";
export const findInterpreters = [
  {
    icon: "🔎",
    title: "Search Interpreters",
    description: "Browse interpreters by language and specialty.",
  },
  {
    icon: "👤",
    title: "Review Profiles",
    description: "Review experience, languages, and skills.",
  },
  {
    icon: "✉️",
    title: "Send Message",
    description: "Contact the interpreter directly.",
  },
];

export const interpreterProfilesData = [
  {
    id: 1,
    name: "Ali",
    language: ["Dari", "English"],
    field: ["Medical Interpretation"],
    experience: "10 years experience",
  },
  {
    id: 2,
    name: "Safi",
    language: ["Dari", "Pashto", "English"],
    field: ["Court Interpretation"],
    experience: "5 years experience",
  },
  {
    id: 3,
    name: "Meena",
    language: ["Dari", "Pashto", "English"],
    field: ["Medical Interpretation", "Court Interpretation"],
    experience: "7 years experience",
  },
  {
    id: 4,
    name: "Zeen",
    language: ["Dari", "English"],
    field: ["several specialized fields"],
    experience: "12 years experience",
  },
  {
    id: 5,
    name: "Lima",
    language: ["Dari", "English"],
    field: ["several specialized fields"],
    experience: "4 years experience",
  },
  {
    id: 6,
    name: "Sara",
    language: ["Dari", "English"],
    field: ["Medical Interpretation"],
    experience: "5 years experience",
  },
  {
    id: 7,
    name: "Malik",
    language: ["Dari", "English"],
    field: ["Medical Interpretation"],
    experience: "8 years experience",
  },
  {
    id: 8,
    name: "Sonia",
    language: ["Dari", "Pashto", "English"],
    field: ["Court Interpretation"],
    experience: "9 years experience",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Customer",
    image: "/images/img3.jpg",
    review: "This app helped me a lot. Highly recommend!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Client",
    image: "/images/img5.jpg",
    review: "Amazing experience working with Dari Interpreter.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Customer",
    image: "/images/img1.jpg",
    review: "I love how simple and efficient this app is.",
  },
  {
    id: 4,
    name: "Bob Williams",
    role: "Client",
    image: "/images/img6.jpg",
    review: "Fantastic service and very friendly support.",
  },
  {
    id: 5,
    name: "Lisa Williams",
    role: "Client",
    image: "/images/img2.jpg",
    review: "Very experience Interpreters.",
  },
  {
    id: 6,
    name: "Megan John",
    role: "Client",
    image: "/images/img8.jpg",
    review: "All the services are great.",
  },
];

export const trustBuilderData: TrustBuilderDataType[] = [
  {
    id: 1,
    icon: "✅",
    title: "Verified Professional",
    description: "Certified and experienced interpreters",
  },
  {
    id: 2,
    icon: "🔒",
    title: "Secure Communication",
    description: "Safe and private interactions",
  },
  {
    id: 3,
    icon: "⚡️",
    title: "Fast Response",
    description: "Quick replies to your requests",
  },
  {
    id: 4,
    icon: "🌎",
    title: "Multiple Languages",
    description: "Dari,Pashto,English",
  },
];

export const faqData: FAQItem[] = [
  {
    question: "How do I book an interpreter?",
    answer:
      "You can book an interpreter by clicking the 'Connect' button and filling out the request form.",
  },
  {
    question: "Are interpreters certified?",
    answer: "Yes, all interpreters listed are certified in their languages.",
  },
  {
    question: "Can I cancel a request?",
    answer:
      "You can cancel a request anytime before it has been accepted by an interpreter.",
  },
  {
    question: "Is there a service fee?",
    answer:
      "A small service fee applies to all bookings. Details are shown during checkout.",
  },
];
