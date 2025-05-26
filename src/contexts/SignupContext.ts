import { createContext } from "react";

enum WhichCalendarYouHadProps {
  PhysicalCalendar = "physical-calendar",
  GoogleCalendar = "google-calendar",
  OtherCalendar = "other-calendar",
  None = "none",
}

enum HowDidYouHearAboutUsProps {
  InternetCommercial = "internet-commercial",
  GoogleCommercial = "google-commercial",
  FacebookCommercial = "facebook-commercial",
  GoogleSearch = "google-search",
  RecommendationReceive = "recommendation-receive",
  AppStoreSearch = "appstore-search",
  OtherBusiness = "other business",
}

enum BusinessTypeProps {
  MensBarber = "Mens Barber",
  Nails = "Nails",
  Eyebrowns = "Eyebrowns",
  Eyelashes = "Eyelashes",
  Skincare = "Skincare",
  HairDesigners = "Hair designers",
  HairRemoval = "Hair removal",
  Makeup = "Makeup",
  EarringAndTatto = "earring and tatto",
  Massage = "Massage",
  BotoxAndFillings = "Botox and fillings",
  DoctorsAndDentists = "Doctors and dentists",
  BarberDog = "Barber dog",
  HollisticTherapy = "Consulating and threapy hollistic",
  Fitness = "Fitness",
  Optics = "Optics",
  Other = "Other",
}

interface ActivityTypeProps {
  [day: string]: {
    from: string;
    until: string;
  };
}

interface ServiceProps {}

// Type for up to 3 enum values
type UpTo3Props<T> = [] | [T] | [T, T] | [T, T, T];

// Interface
interface SignUpDataProps {
  phone: string;
  otp: string;
  prevCalendarUse: WhichCalendarYouHadProps | ""; // Allow empty for default state
  howDidYouHearOfUs: HowDidYouHearAboutUsProps | ""; // Same here
  businessTypes: UpTo3Props<BusinessTypeProps>;
  activityHours: ActivityTypeProps;
  services: any[];
}

// Initial value
const signUpData: SignUpDataProps = {
  phone: "",
  otp: "",
  prevCalendarUse: "",
  howDidYouHearOfUs: "",
  businessTypes: [],
  activityHours: {
    sunday: { from: "", until: "" },
    monday: { from: "", until: "" },
    tuseday: { from: "", until: "" },
    wednesday: { from: "", until: "" },
    friday: { from: "", until: "" },
    saturday: { from: "", until: "" },
  },
  services: [],
};

// Context
const SignupContext = createContext<SignUpDataProps | undefined>(undefined);
