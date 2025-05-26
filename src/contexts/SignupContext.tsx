import { createContext, useContext, useState, type ReactNode } from "react";

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

interface ServiceProps {
  serviceName: string;
  serviceDuration: string;
  price: number;
}

type UpTo3Props<T> = [] | [T] | [T, T] | [T, T, T];

interface SignUpDataProps {
  phone: string;
  otp: string;
  prevCalendarUse: WhichCalendarYouHadProps | "";
  howDidYouHearOfUs: HowDidYouHearAboutUsProps | "";
  businessTypes: UpTo3Props<BusinessTypeProps>;
  activityHours: ActivityTypeProps;
  services: ServiceProps[];
}

interface SignUpContextType {
  signUpData: SignUpDataProps;
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpDataProps>>;
}

const initialSignUpData: SignUpDataProps = {
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

const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

export const SignUpProvider = ({ children }: { children: ReactNode }) => {
  const [signUpData, setSignUpData] = useState<SignUpDataProps>(initialSignUpData);

  return <SignUpContext.Provider value={{ signUpData, setSignUpData }}>{children}</SignUpContext.Provider>;
};

export const useSignUpContext = () => {
  const context = useContext(SignUpContext);
  if (!context) throw new Error("useSignUpContext must be used within SignUpProvider");
  return context;
};
