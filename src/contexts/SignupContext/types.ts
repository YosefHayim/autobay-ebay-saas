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

enum WorkingTimesEnum {
  Select = "בחר שעה",
  _06_45 = "06:45",
  _07_00 = "07:00",
  _07_15 = "07:15",
  _07_30 = "07:30",
  _07_45 = "07:45",
  _08_00 = "08:00",
  _08_15 = "08:15",
  _08_30 = "08:30",
  _08_45 = "08:45",
  _09_00 = "09:00",
  _09_15 = "09:15",
  _09_30 = "09:30",
  _09_45 = "09:45",
  _10_00 = "10:00",
  _10_15 = "10:15",
  _10_30 = "10:30",
  _10_45 = "10:45",
  _11_00 = "11:00",
  _11_15 = "11:15",
  _11_30 = "11:30",
  _11_45 = "11:45",
  _12_00 = "12:00",
  _12_15 = "12:15",
  _12_30 = "12:30",
  _12_45 = "12:45",
  _13_00 = "13:00",
  _13_15 = "13:15",
  _13_30 = "13:30",
  _13_45 = "13:45",
  _14_00 = "14:00",
  _14_15 = "14:15",
  _14_30 = "14:30",
  _14_45 = "14:45",
  _15_00 = "15:00",
  _15_15 = "15:15",
  _15_30 = "15:30",
  _15_45 = "15:45",
  _16_00 = "16:00",
  _16_15 = "16:15",
  _16_30 = "16:30",
  _16_45 = "16:45",
  _17_00 = "17:00",
  _17_15 = "17:15",
  _17_30 = "17:30",
  _17_45 = "17:45",
  _18_00 = "18:00",
  _18_15 = "18:15",
  _18_30 = "18:30",
  _18_45 = "18:45",
  _19_00 = "19:00",
  _19_15 = "19:15",
  _19_30 = "19:30",
  _19_45 = "19:45",
  _20_00 = "20:00",
  _20_15 = "20:15",
  _20_30 = "20:30",
  _20_45 = "20:45",
  _21_00 = "21:00",
  _21_15 = "21:15",
  _21_30 = "21:30",
  _21_45 = "21:45",
  _22_00 = "22:00",
  _22_15 = "22:15",
  _22_30 = "22:30",
  _22_45 = "22:45",
  _23_00 = "23:00",
  _23_15 = "23:15",
  _23_30 = "23:30",
  _23_45 = "23:45",
  _00_00 = "00:00",
}

type Day = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

type TimeRange = {
  from: string;
  until: string;
};

type ActivityHoursProps = Record<Day, TimeRange>;

export interface ServiceProps {
  serviceName: string;
  serviceDuration: WorkingTimesEnum;
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
