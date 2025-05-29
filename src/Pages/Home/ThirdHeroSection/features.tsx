import { Calendar, Bell, CreditCard, Users, TrendingUp, CheckCircle, Smartphone, FileText } from "lucide-react";

export const features = [
  {
    title: "Auto Booking 24/7",
    description: "Clients book themselves—even at 3AM. No calls, no texts, no screwups.",
    icon: <Calendar className="group-hover/feature:text-red-500" />,
    hoverColor: "group-hover/feature:bg-red-500",
  },
  {
    title: "Auto Reminders + Confirmations",
    description: "WhatsApp pings for every booking = way fewer no-shows. Fully automatic.",
    icon: <Bell className="group-hover/feature:text-orange-500" />,
    hoverColor: "group-hover/feature:bg-orange-500",
  },
  {
    title: "Get Paid Straight from the Calendar",
    description: "Client pays? One click. Cash, Bit, credit—plus auto receipts & monthly report.",
    icon: <CreditCard className="group-hover/feature:text-yellow-500" />,
    hoverColor: "group-hover/feature:bg-yellow-500",
  },
  {
    title: "One Calendar for Everyone",
    description: "All your staff and bookings in one place. No double-ups, no mix-ups, full control.",
    icon: <Users className="group-hover/feature:text-green-500" />,
    hoverColor: "group-hover/feature:bg-green-500",
  },
  {
    title: "Promo to Thousands Nearby",
    description: "Your biz pops up on the app + gets pushed to folks near you. Free marketing, basically.",
    icon: <TrendingUp className="group-hover/feature:text-teal-500" />,
    hoverColor: "group-hover/feature:bg-teal-500",
  },
  {
    title: "No Credit Card Needed",
    description: "No contracts. No fine print. Two-week free trial, no upfront payment.",
    icon: <CheckCircle className="group-hover/feature:text-blue-500" />,
    hoverColor: "group-hover/feature:bg-blue-500",
  },
  {
    title: "So Simple, Even Your Parents Can Use It",
    description: "Clean layout. Full Hebrew. Super easy—even for total tech newbies.",
    icon: <Smartphone className="group-hover/feature:text-indigo-500" />,
    hoverColor: "group-hover/feature:bg-indigo-500",
  },
  {
    title: "Auto Reports for Your Accountant",
    description: "Income, payments, receipts—all sorted with one click. No more spreadsheets or binders.",
    icon: <FileText className="group-hover/feature:text-purple-500" />,
    hoverColor: "group-hover/feature:bg-purple-500",
  },
];
