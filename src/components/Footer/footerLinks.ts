interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

export const footerLinks: FooterSection[] = [
  {
    label: "About",
    links: [
      { title: "Download the app", href: "#features" },
      { title: "Pricing", href: "#pricing" },
      { title: "Contact us", href: "#testimonials" },
      { title: "Start free trial", href: "/" },
    ],
  },
  {
    label: "Product",
    links: [
      { title: "Appointment confirmations", href: "/faqs" },
      { title: "Calendar management", href: "/about" },
      { title: "Payments", href: "/privacy" },
      { title: "Reports", href: "/terms" },
    ],
  },
  {
    label: "Customer Service",
    links: [
      { title: "Call us", href: "/blog" },
      { title: "Send a message", href: "/changelog" },
      { title: "Customer support", href: "/brand" },
    ],
  },
];
