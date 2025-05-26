export enum WhichCalendarYouHadProps {
  PhysicalCalendar = "physical-calendar",
  GoogleCalendar = "google-calendar",
  OtherCalendar = "other-calendar",
  None = "none",
}

export enum HowDidYouHearAboutUsProps {
  InternetCommercial = "internet-commercial",
  GoogleCommercial = "google-commercial",
  FacebookCommercial = "facebook-commercial",
  GoogleSearch = "google-search",
  RecommendationReceive = "recommendation-receive",
  AppStoreSearch = "appstore-search",
  OtherBusiness = "other business",
}

export enum BusinessTypeProps {
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

type Day = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

type TimeRange = {
  from: string;
  until: string;
};

type ActivityHoursProps = Record<Day, TimeRange>;

export interface ServiceProps {
  serviceName: string;
  serviceDuration: string;
  price: number;
}

export type UpTo3Props<T> = [] | [T] | [T, T] | [T, T, T];

export interface SignUpDataProps {
  phone: string;
  otp: string;
  prevCalendarUse: WhichCalendarYouHadProps | "";
  howDidYouHearOfUs: HowDidYouHearAboutUsProps | "";
  businessTypes: UpTo3Props<BusinessTypeProps>;
  activityHours: ActivityHoursProps;
  services: ServiceProps[];
}

export interface SignUpContextType {
  signUpData: SignUpDataProps;
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpDataProps>>;
}
