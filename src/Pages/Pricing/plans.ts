interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

export const PLANS: PricingPlan[] = [
  {
    name: "Basic",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited appointments",
      "Unlimited clients",
      "300 messages per month",
      "Digital calendar",
      "Online appointment booking",
      "Appointment confirmations",
      "Statistics and reports",
      "Access via computer and app",
      "✨ Exposure in the business search app",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "Premium",
    price: "139",
    yearlyPrice: "119",
    period: "per month",
    features: [
      "Unlimited appointments",
      "Unlimited clients",
      "1200 messages per month",
      "Digital calendar",
      "Online appointment booking",
      "Appointment confirmations",
      "Statistics and reports",
      "Access via computer and app",
      "✨ Exposure in the business search app",
      "WhatsApp messages",
      "Waiting list",
      "Forms and questionnaires",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "Business",
    price: "169",
    yearlyPrice: "149",
    period: "per month",
    features: [
      "Everything in previous plans, plus:",
      "2000 messages per month",
      "Point of sale (POS) interface",
      "Invoices and receipts",
      "Card and subscription management",
      "Send payment requests",
      "Credit card, Apple Pay, and Bit support",
      "Cancellation fees and deposits",
      "Send documents to accountant",
      "Product and inventory management",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
];
