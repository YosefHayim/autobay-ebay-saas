import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";

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
    label: "אודות",
    links: [
      { title: "הורדת האפליקציה", href: "#features" },
      { title: "מחירון", href: "#pricing" },
      { title: "צרו קשר", href: "#testimonials" },
      { title: "התחלת התנסות", href: "/" },
    ],
  },
  {
    label: "מוצר",
    links: [
      { title: "אישורי הגעה", href: "/faqs" },
      { title: "ניהול יומן", href: "/about" },
      { title: "קבלת תשלום", href: "/privacy" },
      { title: "דוחות", href: "/terms" },
    ],
  },
  {
    label: "שירות לקוחות",
    links: [
      { title: "חייגו אלינו", href: "/blog" },
      { title: "שליחת הודעה", href: "/changelog" },
      { title: "שירות לקוחות", href: "/brand" },
    ],
  },
];
